import React from 'react';
import { NextPage } from 'next';
import { Link } from '@chakra-ui/react';

import { Button } from 'components/Button';

type Props = {
  href: string;
  disabled?: boolean;
  children: string;
};

export const LinkButton: NextPage<Props> = ({ href, children, disabled = false }) => (
  <Link href={href} passHref>
    <Button disabled={disabled}>
      {children}
    </Button>
  </Link>
);
