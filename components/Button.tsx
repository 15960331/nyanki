import React from 'react';
import { NextPage } from 'next';
import { Button as Button1 } from '@chakra-ui/react';

type Props = JSX.IntrinsicElements['button'] & {
  rightIcon?: React.ReactElement;
  isActive?: boolean;
};

// TODO: gives ref
// u cant put this on MenuButton, dropdown will be broken
export const Button: NextPage<Props> = (props) => {
  const {
    rightIcon, isActive, children, ...buttonProps
  } = props;

  return (
    <Button1
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      rightIcon={rightIcon}
      colorScheme={isActive ? 'purple' : 'facebook'}
    >
      {children}
    </Button1>
  );
};
