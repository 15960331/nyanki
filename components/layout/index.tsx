import React from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { Header } from './Header';
import { Main } from './Main';

type Props = {
  children: React.ReactNode;
};

export const Layout: NextPage<Props> = ({ children }) => (
  <Box display="flex" flexDirection="column" minH="100vh">
    <Header />
    <Main>
      {children}
    </Main>
  </Box>
);
