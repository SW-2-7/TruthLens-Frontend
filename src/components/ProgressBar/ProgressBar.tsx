'use client';

import * as styles from './ProgressBar.css';

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const percent = Math.min(1, Math.max(0, value)) * 100;

  return (
    <div className={styles.track}>
      <div className={styles.bar} style={{ width: `${percent}%` }} />
    </div>
  );
}
