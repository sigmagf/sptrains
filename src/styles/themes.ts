import { transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';

const colors: DefaultTheme['colors'] = {
  primary: '#4E148C',
  primaryText: '#FFFFFF',
  secondary: '#613DC1',
  secondaryText: '#FFFFFF',

  info: '#2A9D8F',
  infoText: '#222222',
  success: '#3E8914',
  successText: '#FFFFFF',
  warning: '#F5BB00',
  warningText: '#FFFFFF',
  danger: '#AD2E24',
  dangerText: '#FFFFFF',

  background: '#F1F1F1',
  text: '#333333',
  shaddow: transparentize(0.80, '#000'),
};

const light: DefaultTheme = {
  title: 'light',

  colors,
  toggleTheme: () => {},
};

const dark: DefaultTheme = {
  title: 'dark',

  colors: {
    ...colors,
    primary: '#333333',

    background: '#222222',
    text: '#FFFFFF',
  },

  toggleTheme: () => {},
};

export {
  light,
  dark,
};
