import { AppProps } from 'next/app';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Header } from '~/components/Header';

import { GlobalStyle } from '~/styles/global';
import { light } from '~/styles/themes';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={light}>
    <Header />
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
