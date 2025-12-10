'use client';

import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import { getRiskMeta } from '@/utils/riskUtils';
import * as styles from './ResultHeader.css';
import { IcCheck, IcQuestion, IcWarning } from '@/components/icons';

interface ScoreStatusCardProps {
  score: number;
}

export default function ScoreStatusCard({ score }: ScoreStatusCardProps) {
  const meta = getRiskMeta(score);

  const ICON_MAP = {
  high: IcWarning,
  medium: IcQuestion,
  low: IcCheck,
} as const;

const Icon = ICON_MAP[meta.level];

  return (
    <div
      className={styles.card}
      style={{ background: meta.bg, borderColor: meta.border }}
    >
      <Flex direction="row" justify="spaceBetween" align="flexStart" width='100%'>
        <Flex direction="column" align='flexStart'>
          <Text size={2.0} fontWeight="medium" color={meta.color}>
            {meta.summaryTitle}
          </Text>
          <Text size={8.0} fontWeight="semibold" color={meta.color}>
            {score}%
          </Text>
          {meta.description.split('\n').map((line) => (
            <Text key={line} size={2.2} fontWeight="medium" color={meta.color}>
              {line}
            </Text>
          ))}
        </Flex>

        <Icon width={90} height={90} color={meta.color} />
      </Flex>
    </div>
  );
}