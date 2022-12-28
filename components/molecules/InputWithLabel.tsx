import React, { memo, forwardRef } from 'react';
import { NextPage } from 'next';
import { FormLabel, InputProps, FormLabelProps, Box, BoxProps } from '@chakra-ui/react';

import { Input } from 'components/atoms';

type Props = {
  id: InputProps['id'];
  type?: InputProps['type'];
  value: InputProps['value'];
  width?: BoxProps['width'];
  isDisabled?: InputProps['isDisabled'];
  isRequired?: InputProps['isRequired'];
  labelProps: {
    text: FormLabelProps['children'];
    color?: FormLabelProps['color'];
  };
  onChange?: InputProps['onChange'];
};

export const InputWithLabel = forwardRef<HTMLInputElement, Props>(
  ({ id, type, value, width, isDisabled, isRequired, labelProps, onChange }, ref) => (
    <Box width={width}>
      <FormLabel
        htmlFor={id}
        color={labelProps.color}
      >
        {labelProps.text}
      </FormLabel>
      <Input
        id={id}
        type={type}
        value={value}
        isDisabled={isDisabled}
        isRequired={isRequired}
        ref={ref}
        onChange={onChange}
      />
    </Box>
  ),
);
