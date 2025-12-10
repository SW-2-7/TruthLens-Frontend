'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import * as styles from './ImageUploadSection.css';
import { IcDelete, IcDropzone } from '@/components/icons';
import { useModal } from '@/hooks/useModal/useModal';
import AnalysisProgressModal from '../AnalysisProgressModal/AnalysisProgressModal';

const ACCEPTED_TYPES = [  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',];
const MAX_SIZE = 30 * 1024 * 1024;// 10MB

const STORAGE_KEY = 'TRUTHLENS_LAST_ANALYSIS';

export interface DetectResponse {
  filename: string;
  is_fake: boolean;
  score: number; // 98.5 같은 실수
  heatmap: string; // base64 (접두사 없는)
  original_image: string; // base64 (접두사 없는)
}

export interface StoredAnalysis extends DetectResponse {
  analyzedAt: string; // ISO 문자열 (new Date().toISOString())
}

function formatBytes(bytes: number) {
  if (!bytes) return '0B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  return `${value.toFixed(i === 0 ? 0 : 1)}${sizes[i]}`;
}

export default function ImageUploadSection() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

   const { isOpen, open, close } = useModal(false);
   
  const fileInfo = useMemo(() => {
    if (!file) return null;
    return {
      name: file.name,
      sizeText: formatBytes(file.size),
    };
  }, [file]);

  const validateFile = useCallback((f: File) => {
    if (!ACCEPTED_TYPES.includes(f.type)) {
      return 'JPG, JPEG, PNG 파일만 업로드할 수 있어요.';
    }
    if (f.size > MAX_SIZE) {
      return '최대 10MB 이하의 파일만 업로드할 수 있어요.';
    }
    return null;
  }, []);

  const applyFile = useCallback(
    (f: File) => {
      const message = validateFile(f);
      if (message) {
        setError(message);
        setFile(null);
        setPreviewUrl(null);
        return;
      }

      setError(null);
      setFile(f);

      const url = URL.createObjectURL(f);
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
    },
    [validateFile]
  );

  const onClickDropzone = () => {
    inputRef.current?.click();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) applyFile(f);
    e.currentTarget.value = '';
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const f = e.dataTransfer.files?.[0];
    if (f) applyFile(f);
  };

  const onRemove = () => {
    setFile(null);
    setError(null);
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  };

    const onAnalyze = async () => {
    if (!file) return;

    // 모달 열어서 단계 로딩 보여주기
    open();

    try {
      const formData = new FormData();
      // 백엔드에서 기대하는 필드 이름이 'file'이라고 가정
      formData.append('file', file);

      const res = await fetch('http://127.0.0.1:8000/api/v1/detect', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        // 상태 코드별 메시지
        if (res.status === 400) {
          setError('지원하지 않는 파일 형식이에요.');
        } else if (res.status === 413) {
          setError('파일 크기가 30MB를 초과했어요.');
        } else {
          setError('이미지 분석 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.');
        }
        console.error('detect error status:', res.status);
        // 에러면 모달 닫고 끝
        close();
        return;
      }

      const data = (await res.json()) as DetectResponse;

      console.log("response", data)

      const stored: StoredAnalysis = {
        ...data,
        analyzedAt: new Date().toISOString(),
      };

      // localStorage에 저장
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));

      // 업로드 컴포넌트 상태 정리 (선택)
      // setFile(null); setPreviewUrl(null); 등등 해도 되고 안해도 돼

  
    } catch (e) {
      console.error(e);
      setError('서버와 통신 중 오류가 발생했어요.');
      close();
    }
  };

  return (
    <>
    <Flex direction="column" gap="3.7rem">
      <div
        className={styles.dropzone}
        onClick={onClickDropzone}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClickDropzone()}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          className={styles.hiddenInput}
          onChange={onChangeInput}
        />

        {!file && (
          <Flex direction="column" align="center" justify="center" gap="1.6rem" width='100%'>
           <IcDropzone width={72} height={73}/>
            <Text size={1.6} fontWeight='medium' color="#7F82A1">
              이미지를 이곳에 드래그하거나 클릭해서 업로드하세요
            </Text>
            <Text size={1.2} fontWeight='medium' color="#7F82A1">
              JPG, PNG 지원 & 최대 30MB
            </Text>
          </Flex>
        )}

        {file && previewUrl && (
          <div className={styles.previewWrap}>
            <div style={{position:'relative'}}>
<img src={previewUrl} alt="preview" className={styles.previewImg} />
            <button
              type="button"
              className={styles.removeButton}
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              aria-label="remove image"
              title="remove"
            >
              <IcDelete width={24} height={24}/>
            </button>
            </div>
            

            <Flex direction='column' justify='center' align='center' width='100%'>
              <Text size={1.6} fontWeight='medium' color="#7F82A1">
                파일 이름 : {fileInfo?.name}
              </Text>
              <Text size={1.6} fontWeight='medium' color="#7F82A1">
                크기 : {fileInfo?.sizeText}
              </Text>
            </Flex>
          </div>
        )}
      </div>


      <Button
        variant="main"
        width="54.4rem"
        disabled={!file}
        onClick={onAnalyze}
      >
        이미지 분석하기
      </Button>
    </Flex>

    <AnalysisProgressModal open={isOpen} onClose={close} />
    </>
    
  );
}
