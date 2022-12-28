import React, { forwardRef } from 'react';
import { Input as Input1, InputProps } from '@chakra-ui/react';

type Props = {
  id?: InputProps['id'];
  value: InputProps['value'];
  type?: InputProps['type'];
  placeholder?: InputProps['placeholder'];
  isRequired?: InputProps['isRequired'];
  isDisabled?: InputProps['isDisabled'];
  rounded?: InputProps['rounded'];
  roundedRight?: InputProps['roundedRight'];
  w?: InputProps['w'];
  textAlign?: InputProps['textAlign'];
  onChange?: InputProps['onChange'];
  onBlur?: InputProps['onBlur'];
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Input1
    {...props}
    variant="outline"
    color="gray.700"
    bgColor="white"
    size="md"
    ref={ref}
  />
));
