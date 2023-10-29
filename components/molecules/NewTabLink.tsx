import React from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

type Props = {
  href: string;
  children: React.ReactNode;
};

export const NewTabLink: NextPage<Props> = ({ href, children }) => (
  <Box
    as="span"
    color="darkblue"
  >
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  </Box>
);
