import { style } from '@vanilla-extract/css';

export const card = style({
    display:'flex',
    width: '54.4rem',
  background: '#F1F3FF',
  border: '1px solid #B4BEFF',
  borderRadius: '12px',
 padding:'3rem 3.8rem',
 alignItems: 'flex-start',
  flexDirection:'column',
});

export const cardTitle = style({
  marginBottom: '1.6rem'
});


export const bulletDot = style({
  display: 'inline-block',
  transform: 'translateY(0.1rem)',
  color: '#3B82F6',
  fontSize: '1.4rem',
  lineHeight: 1,
});

