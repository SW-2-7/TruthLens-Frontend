'use client';

import { useState } from 'react';
import Image from 'next/image';
import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import * as styles from './ImageAnalysis.css';

interface ImageAnalysisPanelProps {
  originalImageUrl: string;
  heatmapImageUrl: string;
}

type ViewMode = 'original' | 'heatmap';

export default function ImageAnalysisPanel({
  originalImageUrl,
  heatmapImageUrl,
}: ImageAnalysisPanelProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('heatmap');

  const currentUrl = viewMode === 'original' ? originalImageUrl : heatmapImageUrl;

  return (
    <Flex direction="column" gap="2.2rem" align='flexStart'  className={styles.card}>
      <Text size={2.5} fontWeight="semibold">
        이미지 분석
      </Text>

        {/* 회색 좌우 영역 + 중앙 이미지 */}
        <div className={styles.imageStrip}>
   
    
            <div className={styles.imageInner}>
              <img
  src={currentUrl}
  alt={viewMode === 'original' ? '원본 이미지' : '조작 영역 이미지'}
  style={{
    width: '100%',
    height: '100%',
  }}
/>
            </div>
          </div>
            

        {/* 하단 토글 버튼 */}
        <Flex
          direction="row"
          justify="center"
          align='center'
          gap="7.1rem"
          marginTop="1.6rem"
          width='100%'
        >
          <Button
            variant={viewMode === 'original' ? 'sub' : 'main'}
            width="27rem"
            onClick={() => setViewMode('original')}
          >
            원본만 보기
          </Button>
          <Button
            variant={viewMode === 'heatmap' ? 'sub' : 'main'}
            width="27rem"
            onClick={() => setViewMode('heatmap')}
          >
            조작 영역 보기
          </Button>
        </Flex>
    </Flex>
  );
}
