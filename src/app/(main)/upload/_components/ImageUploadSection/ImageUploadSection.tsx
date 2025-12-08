'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import * as styles from './ImageUploadSection.css';
import { IcDelete, IcDropzone } from '@/components/icons';

const ACCEPTED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

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

  const onAnalyze = () => {
    // 여기서 실제 분석 API 연결하면 됨
    console.log('analyze file:', file);
  };

  return (
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
  );
}
