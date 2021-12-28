import React from 'react';
import { NextPage } from 'next';
import { Grid, GridItem } from '@chakra-ui/react';

import { Header } from './Header';
import { Main } from './Main';

type Props = {
  children: React.ReactNode;
};

export const Layout: NextPage<Props> = ({ children }) => (
  <Grid
    h="100vh"
    gridTemplateRows="56px auto"
  >
    <GridItem bg="gray.700">
      <Header />
    </GridItem>
    <GridItem bg="gray.500" p="16px">
      <Main>
        {children}
      </Main>
    </GridItem>
  </Grid>
);
