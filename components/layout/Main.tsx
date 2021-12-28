import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

type Props = {
  children: React.ReactNode;
};

export const Main: NextPage<Props> = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    {children}
  </Box>
);
