'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as styles from './Modal.css';

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose?: () => void;
  closeOnBackdropClick?: boolean;
}

export default function Modal({
  open,
  children,
  onClose,
  closeOnBackdropClick = false,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!open || !mounted) return null;

  const handleBackdropClick = () => {
    if (closeOnBackdropClick && onClose) onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal} onClick={handleContentClick}>
        {children}
      </div>
    </div>,
    document.body
  );
}
