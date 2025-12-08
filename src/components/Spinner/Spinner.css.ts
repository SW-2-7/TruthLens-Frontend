import { keyframes, style } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const wrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${spin} 1s linear infinite`,
});