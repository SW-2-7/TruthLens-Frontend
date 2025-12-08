import clsx from 'clsx';
import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { textBase } from './Text.css';

type WeightName = 'bold' | 'semibold' | 'medium' | 'regular';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /** 글자 크기 (rem 단위 숫자) 예: 1.6 -> 1.6rem */
  size?: number;
  /** 글자 두께 */
  fontWeight?: WeightName;
  /** 글자 색상 (예: '#000000', 'rgb(...)', 'var(--token)' 등 자유) */
  color?: string;
  children: ReactNode;
  /** 추가 인라인 스타일 */
  style?: CSSProperties;
  /** 추가 className */
  className?: string;
}

const weightMap: Record<WeightName, CSSProperties['fontWeight']> = {
  bold: '700',
  semibold: '600',
  medium: '500',
  regular: '400',
};

const Text = ({
  size = 1.6,          // 기본 1.6rem
  fontWeight = 'regular',
  color,
  children,
  style,
  className,
  ...rest
}: TextProps) => {
  const inlineStyle: CSSProperties = {
    fontSize: `${size}rem`,
    fontWeight: weightMap[fontWeight],
    ...(color ? { color } : {}),
    ...style,
  };

  return (
    <p
      className={clsx(textBase, className)}
      style={inlineStyle}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
