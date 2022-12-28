import React from 'react';
import { NextPage } from 'next';
import { Link } from '@chakra-ui/react';

import { Button } from 'components/atoms';

type Props = {
  href: string;
  disabled?: boolean;
  children: string;
};

// TODO: add isActive prop so I can refactor Header comp
// TODO: not sure if this should inherit Button props to allow specifying CSS
export const LinkButton: NextPage<Props> = ({ href, children, disabled = false }) => (
  <Link href={href}>
    <Button isDisabled={disabled}>{children}</Button>
  </Link>
);
