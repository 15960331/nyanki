/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { UserProvider } from 'providers/userProvider';
import { Layout } from 'components/Layout';
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Nyanki - Online flashcard maker</title>
      <meta name="description" content="Online flashcard maker" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ChakraProvider>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  </>
);

export default MyApp;
