'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import Modal from '@/components/Modal/Modal';
import * as styles from './AnalysisProgressModal.css';
import Spinner from '@/components/Spinner/Spinner';
import ProgressBar from '@/components/ProgressBar/ProgressBar';

interface AnalysisProgressModalProps {
  open: boolean;
  onClose: () => void;
}

const STEP_ITEMS = [
  {
    stepText: '1/3 단계',
    description: '이미지 진위 여부 분석 중...',
  },
  {
    stepText: '2/3 단계',
    description: '조작 유형을 분류하는 중...',
  },
  {
    stepText: '3/3 단계',
    description: '리포트를 작성하는 중...',
  },
];

export default function AnalysisProgressModal({
  open,
  onClose,
}: AnalysisProgressModalProps) {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setStepIndex(0);
    }
  }, [open]);

  // 단계 진행 타이머
  useEffect(() => {
    if (!open) return;

    const isLast = stepIndex === STEP_ITEMS.length - 1;

    const timer = setTimeout(() => {
      if (isLast) {
        onClose();
        router.push('/analysis');
      } else {
        setStepIndex((prev) => prev + 1);
      }
    }, 1500); // 단계당 1.5초

    return () => clearTimeout(timer);
  }, [open, stepIndex, onClose, router]);

  if (!open) return null;

  const current = STEP_ITEMS[stepIndex];
  const progressValue = (stepIndex + 1) / STEP_ITEMS.length;

  return (
    <Modal open={open}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="1rem"
        width='100%'
        height='100%'
        paddingLeft='5rem'
        paddingRight='5rem'
      >
        <Spinner/>

        <Flex direction="column" align="center" justify='center' width='100%'>
          <Text size={2.0} fontWeight="medium" color="#848484">
            {current.stepText}
          </Text>
          <Text size={2.2} fontWeight="semibold">
            {current.description}
          </Text>
        </Flex>

        <div className={styles.progressWrapper}>
          <ProgressBar value={progressValue} />
        </div>
      </Flex>
    </Modal>
  );
}
