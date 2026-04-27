'use client';

import { useRouter } from 'next/navigation';
import * as styles from '../page.css';

export default function AnalyzeButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      className={styles.heroButton}
      onClick={() => router.push('/upload')}
    >
      이미지 분석해보기
    </button>
  );
}
