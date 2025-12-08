import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(15, 23, 42, 0.35)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
});

export const modal = style({
  width: '52.9rem',
  height: '34.8rem',
  borderRadius: '20px',
  background: '#FFFFFF',
});