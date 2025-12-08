'use client';

import clsx from 'clsx';
import {
  CSSProperties,
  ButtonHTMLAttributes,
  forwardRef,
  ReactNode,
} from 'react';
import Text from '../Text/Text';
import * as styles from './Button.css';

export type ButtonVariant = 'main' | 'sub';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 메인 / 서브 버튼 */
  variant?: ButtonVariant;
  /** 버튼 width (예: '100%', '20rem', 240 등) */
  width?: CSSProperties['width'];
  /** children은 버튼 안에 표시할 텍스트 */
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'main',
      width = '100%',
      className,
      style,
      children,
      disabled,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const buttonClassName = clsx(
      styles.baseButton,
      styles[variant],
      disabled && styles.disabled,
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={buttonClassName}
        style={{ ...style, width }}
        {...rest}
      >
        <Text size={2} fontWeight="medium">
          {children}
        </Text>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
