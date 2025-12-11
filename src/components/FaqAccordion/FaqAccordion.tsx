'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import * as styles from './FaqAccordion.css';
import { IcArrow } from '../icons';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: '이 서비스 결과가 100% 정확한가요?',
    answer:
      'AI 기반 분석은 높은 정확도로 제공되지만 100% 완벽하지는 않습니다. 이 서비스는 참고용 분석 결과를 제공하며, 법적 효력이나 절대적 진위를 보장하지 않습니다. 중요한 판단이 필요한 경우 전문가의 검증을 권장드립니다.',
  },
  {
    question: '얼굴 사진, 민감한 정보 보호는 어떻게 되나요?',
    answer:
      '업로드된 모든 이미지는 분석 목적으로만 사용되며, 분석 완료 후 일정 기간 이후 자동으로 삭제됩니다. 개인 정보는 수집하지 않으며, 모든 데이터는 암호화되어 안전하게 처리됩니다.',
  },
  {
    question: '어떤 종류의 조작을 탐지 할 수 있나요?',
    answer:
      '합성(Splicing), 복사-붙여넣기(Copy-Move), 보정(Retouching), 텍스트 삽입 등 다양한 유형의 이미지 조작을 탐지할 수 있습니다. AI 모델은 노이즈 패턴, 경계선 불일치, 주파수 도메인 특성 등을 분석합니다.',
  },
  {
    question: '어떤 파일 형식을 지원하나요?',
    answer:
      '현재 JPG, JPEG, PNG 형식을 지원하며, 최대 파일 크기는 10MB입니다. 고해상도 이미지일수록 더 정교한 분석이 가능합니다.',
  },
];


export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Flex direction="column" gap="2.6rem" width="100%">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <button
            key={item.question}
            type="button"
            className={styles.item}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <Flex
              direction="row"
              align="center"
              justify="spaceBetween"
              className={styles.questionRow}
            >
              <Text size={2.2} fontWeight="medium">
                {item.question}
              </Text>
              <IcArrow
                width={48}
                height={48}
                className={clsx(styles.arrow, isOpen && styles.arrowOpen)}
              />
            </Flex>

             {isOpen && (
              <>
                <div className={styles.divider} />
                <Text
                  size={2.1}
                  fontWeight="regular"
                  className={styles.answer}
                >
                  {item.answer}
                </Text>
              </>
            )}
          </button>
        );
      })}
    </Flex>
  );
}
