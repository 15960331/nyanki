import React from 'react';
import { NextPage } from 'next';
import { Button as Button1, ButtonProps, ComponentWithAs } from '@chakra-ui/react';

type Props = ComponentWithAs<'button', ButtonProps> & {
  rightIcon?: React.ReactElement;
};

const Button: NextPage<Props> = (props) => {
  const { rightIcon, children, ...buttonProps } = props;

  return (
    <Button1
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      rightIcon={rightIcon}
      colorScheme="facebook"
    >
      {children}
    </Button1>
  );
};

export default Button;
