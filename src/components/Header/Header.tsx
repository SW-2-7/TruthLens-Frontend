'use client';
import { IcLogo } from '../icons';
import * as styles from './Header.css';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <IcLogo width={200} height={40}/>
     
    </header>
  );
};
