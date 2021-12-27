import React from 'react';
import { NextPage } from 'next';
import { Button as Button1, ButtonProps, ComponentWithAs } from '@chakra-ui/react';

type Props = ComponentWithAs<'button', ButtonProps> & {
  labelText: string;
};

const Button: NextPage<Props> = (props) => {
  const { children, ...buttonProps } = props;

  return (
    <Button1
      colorScheme="facebook"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
    >
      {children}
    </Button1>
  );
};

export default Button;
