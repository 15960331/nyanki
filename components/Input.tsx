import React from 'react';
import { NextPage } from 'next';
import { Input as Input1 } from '@chakra-ui/react';

type Props = JSX.IntrinsicElements['input'];

export const Input: NextPage<Props> = (props) => {
  const { children, size, ...inputProps } = props;

  return (
    <Input1
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
      variant="outline"
      color="gray.700"
      bgColor="white"
      size="md"
    >
      {children}
    </Input1>
  );
};
