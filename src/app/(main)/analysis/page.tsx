'use client';

import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';
import ResultHeader from './_components/ResultHeader/ResultHeader';
import * as styles from './page.css';
import ImageAnalysisPanel from './_components/ImageAnalysis/ImageAnalysis';
import { IcGrayWarning } from '@/components/icons';


const MOCK_SCORE = 87;
const MOCK_FINISHED_AT = '2025년 12월 1일 오후 06:14';
const MOCK_ORIGINAL_URL = 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg';
const MOCK_HEATMAP_URL = 'https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg';

export default function AnalysisPage() {
   const score = MOCK_SCORE;

    return (
      <Flex width="100%" direction="column" gap="4rem" justify="center" align="center" paddingBottom="12rem" paddingTop="10rem" paddingLeft="8rem" paddingRight="8rem">
         <ResultHeader score={score} finishedAt={MOCK_FINISHED_AT} />

            <ImageAnalysisPanel
          originalImageUrl={MOCK_ORIGINAL_URL}
          heatmapImageUrl={MOCK_HEATMAP_URL}
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
  