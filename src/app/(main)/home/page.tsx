'use client';

import Image from 'next/image';
import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import { IcArrow } from '@/components/icons';
import * as styles from './page.css';
import { useRouter } from 'next/navigation';
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';


export default function HomePage() {
 const router = useRouter();

  return (
    <main className={styles.page}>
      {/* 1. Hero 섹션 */}
      <section className={styles.heroSection}>
          <Flex direction="column" align="center" justify="center" height="100%" gap="2.4rem">
            <div className={styles.heroBadge}>
              <Text size={1.8} fontWeight="medium" color="#717171">
                AI 기반 이미지 진위 분석
              </Text>
            </div>

            <div className={styles.heroTitleWrapper}>
              <Text
                size={8.0}
                fontWeight="semibold"
              >
                이 이미지,
              </Text>
              <Text
                size={8.0}
                fontWeight="semibold"
              >
                정말 <span className={styles.highlight}>진짜</span>일까요?
              </Text>
            </div>

            <Flex direction="column" align="center">
              <Text size={2.2} fontWeight="regular">
                딥페이크와 이미지 조작이 일상화된 시대,
              </Text>
              <Text size={2.2} fontWeight="regular" >
                AI가 이미지의 진위를 정밀하게 분석해드립니다.
              </Text>
            </Flex>

            <button
              type="button"
              className={styles.heroButton}
              onClick={() => router.push('/upload')}
            >
              이미지 분석해보기
            </button>
          </Flex>
    
      </section>

      {/* 2. 사용 방법 섹션 */}
      <section className={styles.section}>
          <Flex direction="column" width='100%' justify='center' gap='7rem' align='center'>
            <Text size={4.0} fontWeight="semibold">
              사용 방법
            </Text>

            <Flex
              className={styles.cardsRow}
              align="center"
              width="100%"
              justify='center'
            >
              <Image
                src="/images/landing-how-to1.png"
                alt="이미지 업로드 카드"
                width={400}
                height={483}
              />
              <Image
                src="/images/landing-how-to2.png"
                alt="AI 분석 카드"
               width={400}
                height={483}
              />
              <Image
                src="/images/landing-how-to3.png"
                alt="결과 확인 및 리포트 저장 카드"
         width={400}
                height={483}
              />
            </Flex>
          </Flex>
      </section>

      {/* 3. 다양한 분석 결과 예시 섹션 */}
      <section className={styles.sectionBottom2} >
    
          <Flex direction="column"   width='100%' gap='5.4rem' align='center'>
            <Flex direction="column" align="center" justify='center' width='100%' gap='0.8rem'>
     <Text size={4.0} fontWeight="semibold">
              다양한 분석 결과 예시
            </Text>
            <Text size={2.2} fontWeight="regular" >
              각 케이스별 분석 결과를 미리 확인해보세요
            </Text>
            </Flex>
       

            <Flex
              className={styles.cardsRow}
              align="center"
              width="100%"
              justify='center'
            >
  
              <Image
                src="/images/landing-examples1.png"
                alt="조작 의심 예시 카드"
                width={400}
                height={493}
              />
              <Image
                src="/images/landing-examples2.png"
                alt="주의 필요 예시 카드"
               width={400}
                height={493}
              />
              <Image
                src="/images/landing-examples3.png"
                alt="조작 가능성 낮음 예시 카드"
                width={400}
                height={493}
              />
            </Flex>
          </Flex>
      </section>

      {/* 4. 자주 묻는 질문 섹션 */}
      <section className={styles.sectionBottom}>
          <Flex direction="column" align="center" gap="5.5rem" width='100%' justify='center'>
            <Text size={4.0} fontWeight="semibold" >
              자주 묻는 질문
            </Text>
            <FaqAccordion/>
          </Flex>
      </section>
    </main>
  );
}