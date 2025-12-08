;import { style } from '@vanilla-extract/css';

export const layoutStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  overflowX: 'hidden',
});

export const containerStyle = style({
  backgroundColor : '#FAFAFA',
  height: 'calc(100vh - 60px)'
});