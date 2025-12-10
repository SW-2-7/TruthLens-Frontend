import { style } from '@vanilla-extract/css';

export const card = style({
  width: '100%',
  borderRadius: '20px',
  border: '1px solid #DFDFDF',
  background: '#FFFFFF',
  padding: '4.3rem 7.9rem',
});

export const imageStrip = style({
  width: '100%',
  display: 'flex',
  borderRadius: '20px',
  overflow: 'hidden',
  height:'55rem',
  background: '#E3E3E3', 
    alignItems: 'center',
  justifyContent: 'center',
});

export const imageInner = style({
  minWidth: '80rem', 
 height:'55rem',
  maxWidth: '100%',
  overflow: 'hidden',
});
