'use client';

import * as styles from './Spinner.css';
import { IcSpinner } from '../icons';

interface SpinnerProps {
  size?: number; 
}

export default function Spinner({ size = 100 }: SpinnerProps) {
  return (
    <div className={styles.wrapper}>
      <IcSpinner width={size} height={size} />
    </div>
  );
}