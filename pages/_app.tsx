/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import Header from '../components/layout/Header';
import '../styles/globals.css';

// TODO: move Head here
// TODO: move Main here
// TODO: move Footer here
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Header />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
