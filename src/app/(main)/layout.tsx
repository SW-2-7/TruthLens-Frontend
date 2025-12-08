import { Header } from '@/components/Header/Header';
import type { ReactNode } from 'react';
import * as styles from './layout.css';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
      <div className={styles.layoutStyle}>
        <Header/>
        <main className={styles.containerStyle}>
          {children}
        </main>
      </div>
  );
}