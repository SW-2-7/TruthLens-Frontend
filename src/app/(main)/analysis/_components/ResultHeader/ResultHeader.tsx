'use client';

import Flex from '@/components/Flex/Flex';
import ScoreStatusCard from './ScoreStatusCard';
import JudgementCard from './JudgementCard';

interface ResultHeaderProps {
  score: number;
  finishedAt: string;
}

export default function ResultHeader({ score, finishedAt }: ResultHeaderProps) {
  return (
    <Flex direction="row" gap="4.8rem" width="100%">
      <ScoreStatusCard score={score} />
      <JudgementCard score={score} finishedAt={finishedAt} />
    </Flex>
  );
}