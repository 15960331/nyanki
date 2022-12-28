import React, { memo } from 'react';
import { NextPage } from 'next';
import Link, { LinkProps } from 'next/link';
import { ButtonProps } from '@chakra-ui/react';

import { Button } from 'components/atoms';

type Props = {
  href: LinkProps['href'];
  children: string;
  isDisabled?: ButtonProps['isDisabled'];
  isActive?: boolean;
};

export const LinkButton: NextPage<Props> = memo(({ href, isDisabled, isActive, children }) => (
  <Link href={href}>
    <Button
      isDisabled={isDisabled}
      isActive={isActive}
    >
      {children}
    </Button>
  </Link>
));
