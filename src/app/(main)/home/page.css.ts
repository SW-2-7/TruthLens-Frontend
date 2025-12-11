import { style } from '@vanilla-extract/css';

export const page = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const heroSection = style({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  background: 'linear-gradient(180deg, #E9F2FF 0%, #F6EEFF 100%)',
});

export const heroBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 3.6rem',
  borderRadius: '20px',
  backgroundColor: '#FFFFFF',
  border : '1px solid #DBDBDB'
});

export const heroTitleWrapper = style({
  textAlign: 'center',
});



export const highlight = style({
  background: 'linear-gradient(90deg, #2E27FF 0%, #C2AEFF 100%)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
});

export const heroButton = style({
  marginTop: '3.3rem',
  padding: '0.8rem 4.1rem',
  height: '5.8rem',
  borderRadius: '12px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: '#6553FF',
  color: '#FFFFFF',
  fontSize: '2.2rem',
  fontWeight: 600,
  boxShadow: '0 14px 30px rgba(46, 39, 255, 0.45)',
  transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out',
});

export const section = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  backgroundColor: '#FAFAFA',
});

export const sectionBottom = style({
  width: '100%',
  paddingBottom: '17.5rem',
  display: 'flex',
  backgroundColor: '#FAFAFA',
  paddingLeft: '10rem',
  paddingRight : '10rem'
});

export const sectionBottom2 = style({
  width: '100%',
  paddingBottom: '30rem',
  display: 'flex',
  backgroundColor: '#FAFAFA',
});



export const cardsRow = style({
  gap: '15rem',
  paddingLeft: '7.6rem',
  paddingRight : '7.6rem'
});
