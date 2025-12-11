import { style } from '@vanilla-extract/css';

export const item = style({
  width: '100%',
  padding: '2.4rem 3.3rem',
  borderRadius: '12px',
  border: '1px solid #DDDDDD',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'box-shadow 0.15s ease-out, border-color 0.15s ease-out, transform 0.1s ease-out',
  selectors: {
    '&:hover': {
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
      borderColor: '#C5CAE9',
    },
    '&:active': {
      transform: 'translateY(1px)',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.05)',
    },
  },
});

export const questionRow = style({
  width: '100%',
});

export const arrow = style({
  flexShrink: 0,
  transition: 'transform 0.2s ease',
});

export const arrowOpen = style({
  transform: 'rotate(180deg)',
});

export const answer = style({
  marginTop: '1.2rem',
  whiteSpace: 'pre-line',
});

export const divider = style({
  width: '100%',
  height: '1px',
  marginTop: '2.8rem',
  marginBottom: '2.8rem',
  backgroundColor: '#D9D9D9',
});
