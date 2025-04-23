export const colors = {
  primaryColor: '#FFF3BF',
  mainFontColor: '#17161C',
  btnColor: 'rgba(164, 188, 212, 0.3)',
  activeBtnColor: '#8CACD7',
  accentHoverColor: '#FFF3BF',
  primaryWhite: '#ffffff',
  bBgModal: '#7F99C0',
  bgHeaderColor: '#3E6DA3',
  inputGrayColor: 'rgba(0, 0, 0, 0.4)',
  errorColor: '#870505',
  backGroundGreyColor: '#CECCC180'
};

export const sizes = {
  header: { height: '80px' },
  footer: { height: '68px' },

  container: { width: '1440px' },

  cardSetGap: '24px'
};

export const transition = {
  duration: '300ms ease-out'
};
export const border = {
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.60) inset'
};

export const mainCubicTransition = 'cubic-bezier(0.4, 0, 0.2, 1)';

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1200px',
  desktop: '1440px',
  largeDesktop: '1920px'
};

export const media = {
  mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
  laptop: `@media screen and (min-width: ${breakpoints.desktop})`,
  largeDesktop: `@media screen and (min-width: ${breakpoints.largeDesktop})`
};
