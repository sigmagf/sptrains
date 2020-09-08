import { AppProps } from 'next/app';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '~/styles/global';
import { light } from '~/styles/themes';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={light}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
