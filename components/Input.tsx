import React, { forwardRef } from 'react';
import { Input as Input1, InputProps } from '@chakra-ui/react';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { children, ...inputProps } = props;

  return (
    <Input1
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
      variant="outline"
      color="gray.700"
      bgColor="white"
      size="md"
      ref={ref}
    >
      {children}
    </Input1>
  );
});
