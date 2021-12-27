import React from 'react';
import { NextPage } from 'next';
import { Input as Input1, InputProps, ComponentWithAs } from '@chakra-ui/react';

type Props = ComponentWithAs<'input', InputProps> & {
  labelText: string;
};

const Input: NextPage<Props> = (props) => {
  const { children, ...buttonProps } = props;

  return (
    <Input1
      color="gray.700"
      bgColor="white"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
    >
      {children}
    </Input1>
  );
};

export default Input;
