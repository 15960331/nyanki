import React from 'react';
import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

type Props = {
  children: React.ReactNode;
};

export const Main: NextPage<Props> = ({ children }) => (
  <Box
    minH="95vh" // Header 5 + Main 95
    flex="1"
    display="flex"
    flexDirection="column"
    alignItems="center"
    bg="gray.500"
  >
    {children}
  </Box>
);
