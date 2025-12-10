import { style } from '@vanilla-extract/css';

export const card = style({
  flex: 1,
  height : '25.6rem',
  borderRadius: '20px',
  border: '1px solid transparent',
  padding: '3.2rem 4rem',
});

export const cardContainer = style({
 flex: 1,
  height : '25.6rem',
  borderRadius: '20px',
  border: '1px solid transparent',
  padding: '3.2rem 4rem',
  backgroundColor: '#FFFFFF'
});

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.8rem 3.5rem',
  borderRadius: '30px',
  border: '1px solid currentColor',
  fontSize: '2.2rem',
  fontWeight: 700,
});