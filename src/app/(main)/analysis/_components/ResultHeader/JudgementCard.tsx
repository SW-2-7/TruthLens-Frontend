'use client';

import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import { getRiskMeta } from '@/utils/riskUtils';
import * as styles from './ResultHeader.css';
import { style } from '@vanilla-extract/css';

interface JudgementCardProps {
  score: number;
  finishedAt: string;
}

export default function JudgementCard({ score, finishedAt }: JudgementCardProps) {
  const meta = getRiskMeta(score);

  return (
    <div
      className={styles.cardContainer}
      style={{ borderColor: meta.border }}
    >
      <Flex direction="column" gap="0.6rem" align='flexStart' width='100%' >
        <Text size={2.0} fontWeight="medium">
          진위 판별
        </Text>

        <div
          className={styles.badge}
          style={{
            color: meta.color,
            borderColor: meta.border,
            backgroundColor : meta.bg
          }}
        >
          {meta.label}
        </div>

     
          <Text size={2.0} fontWeight="medium" style={{marginTop:'1.4rem'}}>
            분석 완료
          </Text>
          <Text size={2.2} fontWeight="semibold">
            {finishedAt}
          </Text>
      </Flex>
    </div>
  );
}