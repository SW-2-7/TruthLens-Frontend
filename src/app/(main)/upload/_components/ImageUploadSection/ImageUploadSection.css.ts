import { style } from '@vanilla-extract/css';

export const hiddenInput = style({
  display: 'none',
});

export const dropzone = style({
  width: '54.4rem',
  minHeight: '26rem',
  borderRadius: '12px',
  border: '1px dashed #666666',
  background: 'none',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 120ms ease',
  paddingBottom: '4.3rem',
  paddingTop: '5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const previewWrap = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection : 'column',
  gap : '1.8rem'
});

export const previewImg = style({
  width: '35.8rem',
  height: '26.7rem',
  objectFit: 'cover',
  borderRadius: '12px'
});

export const removeButton = style({
  position: 'absolute',
  top: '-0.5rem',
  right: '-0.5rem',
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '50%',
  border: 'none',
  background: '#6D5BFF',
  color: '#FFFFFF',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
