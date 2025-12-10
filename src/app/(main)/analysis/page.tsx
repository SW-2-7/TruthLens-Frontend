'use client';

import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import ResultHeader from './_components/ResultHeader/ResultHeader';
import * as styles from './page.css';
import ImageAnalysisPanel from './_components/ImageAnalysis/ImageAnalysis';
import { IcGrayWarning } from '@/components/icons';
import { useEffect, useState } from 'react';

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

export default function AnalysisPage() {
   const [analysis, setAnalysis] = useState<StoredAnalysis | null>(null);

  useEffect(() => {
    const raw = typeof window !== 'undefined'
      ? localStorage.getItem(STORAGE_KEY)
      : null;

    if (!raw) {
      // 분석 데이터가 없으면 업로드 페이지로 돌려보냄
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

  // 아직 로딩 중일 때
  if (!analysis) {
    return null;
  }

  // 점수는 소수점 반올림해서 정수로
  const score = Math.round(analysis.score);
  const finishedAt = formatKoreanDateTime(analysis.analyzedAt);

  // base64를 data URL로 변환해서 img src로 사용
  // (백엔드가 PNG로 내보낸다고 가정. 아니면 MIME 타입을 응답에 추가해도 좋음)
  const originalUrl = `data:image/png;base64,${analysis.original_image}`;
  const heatmapUrl = `data:image/png;base64,${analysis.heatmap}`;

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
 <Button variant="main" width="34.1rem">
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
  