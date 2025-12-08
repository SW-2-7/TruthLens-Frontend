import { style } from '@vanilla-extract/css';

const palette = {
  // main 버튼
  mainBg: '#6553FF',
  mainBgHover: '#3822FF',
  mainBgActive: '#3822FF',
  mainText: '#ffffff',

  // sub 버튼
  subBg: '#D7D8E2',
  subText: '#747693',
  subBgHover: '#C0C0C5',
  subBgActive: '#C0C0C5',

  // disabled 공통
  disabledBg: '#A9ABC0',
  disabledText: '#D7D8E2',
};

export const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '6.4rem',
  borderRadius: '16px',
  border: '1px solid transparent',
  cursor: 'pointer',
  outline: 'none',
  background: 'transparent',
  transition:
    'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.05s ease',
  whiteSpace: 'nowrap',
  selectors: {
    '&:active:not(:disabled)': {
      transform: 'translateY(1px)',
    },
  },
});

export const main = style({
  backgroundColor: palette.mainBg,
  color: palette.mainText,
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: palette.mainBgHover,
    },
    '&:active:not(:disabled)': {
      backgroundColor: palette.mainBgActive,
    },
  },
});

export const sub = style({
  backgroundColor: palette.subBg,
  color: palette.subText,
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: palette.subBgHover,
    },
    '&:active:not(:disabled)': {
      backgroundColor: palette.subBgActive,
    },
  },
});

export const disabled = style({
  cursor: 'not-allowed',
  backgroundColor: palette.disabledBg,
  color: palette.disabledText,
});
