import React from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

type Props = {
  href: string;
  children: React.ReactNode;
};

// this is for opening a link in a new tab.
export const BlueLink: NextPage<Props> = ({ href, children }) => (
  <Box as="span" color="darkblue">
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  </Box>
);
