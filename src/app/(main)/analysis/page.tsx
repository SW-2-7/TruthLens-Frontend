'use client';

import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import ResultHeader from './_components/ResultHeader/ResultHeader';
import * as styles from './page.css';
import ImageAnalysisPanel from './_components/ImageAnalysis/ImageAnalysis';
import { IcGrayWarning } from '@/components/icons';
import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import { getRiskMeta } from '@/utils/riskUtils';

const STORAGE_KEY = 'TRUTHLENS_LAST_ANALYSIS';

interface DetectResponse {
  filename: string;
  is_fake: boolean;
  score: number;
  heatmap: string;
  original_image: string;
}

interface StoredAnalysis extends DetectResponse {
  analyzedAt: string;
}

function formatKoreanDateTime(isoString: string): string {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '';

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour24 = date.getHours();
  const minute = date.getMinutes();

  const ampm = hour24 < 12 ? '오전' : '오후';
  const hour12 = hour24 % 12 || 12;

  const pad = (n: number) => (n < 10 ? `0${n}` : String(n));

  return `${year}년 ${month}월 ${day}일 ${ampm} ${pad(hour12)}:${pad(minute)}`;
}

// 폰트 파일을 base64 문자열로 변환
async function loadFontBase64(url: string): Promise<string> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`폰트 로드 실패: ${res.status} ${res.statusText}`);
  }

  const buffer = await res.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  let binary = '';
  for (let i = 0; i < bytes.byteLength; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }

  return btoa(binary);
}

export default function AnalysisPage() {
   const [analysis, setAnalysis] = useState<StoredAnalysis | null>(null);

  useEffect(() => {
    const raw = typeof window !== 'undefined'
      ? localStorage.getItem(STORAGE_KEY)
      : null;

    if (!raw) {
      window.location.href = '/upload';
      return;
    }

    try {
      const parsed = JSON.parse(raw) as StoredAnalysis;
      setAnalysis(parsed);
    } catch (e) {
      console.error('failed to parse stored analysis', e);
      window.location.href = '/upload';
    }
  }, []);

  if (!analysis) {
    return null;
  }

  const score = Math.round(analysis.score);
  const finishedAt = formatKoreanDateTime(analysis.analyzedAt);
 const meta = getRiskMeta(score);

  const originalUrl = `data:image/png;base64,${analysis.original_image}`;
  const heatmapUrl = `data:image/png;base64,${analysis.heatmap}`;

   /** PDF 다운로드 핸들러 */
const handleDownloadPdf = async () => {
  try {
    const doc = new jsPDF({
      unit: 'mm',
      format: 'a4',
    });

    const fontBase64 = await loadFontBase64('/fonts/NanumGothic.ttf');
    doc.addFileToVFS('NanumGothic.ttf', fontBase64);
    doc.addFont('NanumGothic.ttf', 'NanumGothic', 'normal');
    doc.setFont('NanumGothic', 'normal');
    doc.setFontSize(14);

    const marginLeft = 20;
    let cursorY = 25;

    // 제목
    doc.setFontSize(20);
    doc.text('TruthLens 이미지 분석 리포트', marginLeft, cursorY);
    cursorY += 15;

    doc.setFontSize(12);

    // 기본 정보
    doc.text(`파일명: ${analysis.filename}`, marginLeft, cursorY);
    cursorY += 7;
    doc.text(`조작 가능성: ${score}%`, marginLeft, cursorY);
    cursorY += 7;
    doc.text(`분석 완료 시각: ${finishedAt}`, marginLeft, cursorY);
    cursorY += 10;

    const judgementText =
      score >= 70
        ? '진위 판별: 조작 의심'
        : score >= 40
        ? '진위 판별: 주의 필요'
        : '진위 판별: 조작 가능성 낮음';

    doc.text(judgementText, marginLeft, cursorY);
    cursorY += 12;

    // 먼저 이미지부터 배치
    const imgY = cursorY;
    const imgWidth = 70; // mm
    const imgHeight = 50;

    // 원본 이미지
    doc.text('원본 이미지', marginLeft, imgY - 5);
    doc.addImage(originalUrl, 'PNG', marginLeft, imgY, imgWidth, imgHeight);

    // 조작 영역 이미지
    const rightX = marginLeft + imgWidth + 10;
    doc.text('조작 영역 이미지', rightX, imgY - 5);
    doc.addImage(heatmapUrl, 'PNG', rightX, imgY, imgWidth, imgHeight);

    cursorY = imgY + imgHeight + 15;

    const descLines = doc.splitTextToSize(
      '이 리포트는 TruthLens 서비스에서 제공한 분석 결과를 기반으로 하며, 법적 판단이나 절대적 진위를 보장하지 않습니다. 중요한 판단이 필요할 경우 전문가의 추가 검증을 받으시기 바랍니다.',
      170,
    );
    doc.text(descLines, marginLeft, cursorY);


    const safeFilename =
      analysis.filename?.replace(/[^\w.-]+/g, '_') || 'truthlens_report';
    doc.save(`${safeFilename}.pdf`);
  } catch (err) {
    console.error('PDF 생성 실패', err);
    alert('PDF 생성 중 오류가 발생했어요. 콘솔을 확인해 주세요.');
  }
};


    return (
      <Flex width="100%" direction="column" gap="4rem" justify="center" align="center" paddingBottom="12rem" paddingTop="10rem" paddingLeft="8rem" paddingRight="8rem">
         <ResultHeader score={score} finishedAt={finishedAt}  />

            <ImageAnalysisPanel
          originalImageUrl={originalUrl}
        heatmapImageUrl={heatmapUrl}
        />

        <Flex gap='1.9rem' justify='flexStart' align='center' className={styles.card}>
          <IcGrayWarning width={32} height={32}/>
          <Flex direction='column'  align='flexStart'>
             <Text size={2.2} fontWeight="medium" color="#616161">
              이 서비스는 참고용 분석 결과를 제공하며, 법적 판단이나 절대적 진위를 보장하지 않습니다.
            </Text>
            <Text size={2.2} fontWeight="medium" color="#616161">
              중요한 판단이 필요할 경우 전문가의 추가 검증을 받으시기 바랍니다.
            </Text>
          </Flex>
        </Flex>

        <Flex direction="row" justify="center" gap="2.7rem" align='center' width='100%'>
 <Button variant="main" width="34.1rem" onClick={handleDownloadPdf}>
            PDF로 저장하기
          </Button>
           <Button
            variant="sub"
            width="34.1rem"
            onClick={() => {
              window.location.href = '/upload';
            }}
          >
            새로운 이미지 분석하기
          </Button>

        </Flex>



        </Flex>
    );
  }
  