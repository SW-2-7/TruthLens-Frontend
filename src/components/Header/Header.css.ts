import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/color.css';

export const headerContainer = style({
  width: '100%',
  height: '60px',
  display: 'flex',
  flexDirection: 'row',
  justifyItems: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid #D7D8E2`,
  padding: '1.6rem 2.4rem',
  backgroundColor: vars.colors.white,
  top: 0,
  left: 0,
  right: 0,
});