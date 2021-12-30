import React from 'react';
import { NextPage } from 'next';
import { Button as Button1, ButtonProps } from '@chakra-ui/react';

type Props = JSX.IntrinsicElements['button'] & ButtonProps;

// TODO: gives ref
// u cant put this on MenuButton, dropdown will be broken prob(fixed?)
export const Button: NextPage<Props> = (props) => {
  const {
    isActive, children, ...buttonProps
  } = props;

  return (
    <Button1
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      colorScheme={isActive ? 'purple' : 'facebook'}
    >
      {children}
    </Button1>
  );
};
