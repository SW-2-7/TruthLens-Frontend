import { style } from '@vanilla-extract/css';

export const track = style({
  width: '100%',
  height: '14px',
  borderRadius:'12px',
  background: '#E6E6E6',
  overflow: 'hidden',
});

export const bar = style({
  height: '100%',
  borderRadius: '12px',
  background: '#6553FF',
  transition: 'width 220ms ease',
});
