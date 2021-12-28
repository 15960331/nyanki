import React from 'react';
import { NextPage } from 'next';

import { Header } from './Header';
import { Main } from './Main';

type Props = {
  children: React.ReactNode;
};

export const Layout: NextPage<Props> = ({ children }) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
  </>
);
