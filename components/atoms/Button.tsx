import React, { forwardRef } from 'react';
import { Button as Button1, ButtonProps } from '@chakra-ui/react';

type Props = {
  colorScheme?: ButtonProps['colorScheme'];
  marginRight?: ButtonProps['marginRight'];
  width?: ButtonProps['width'];
  marginTop?: ButtonProps['marginTop'];
  isDisabled?: ButtonProps['isDisabled'];
  isLoading?: ButtonProps['isLoading'];
  children: ButtonProps['children'];
  size?: ButtonProps['size'];
  type?: ButtonProps['type'];
  isActive?: boolean;
  onClick?: ButtonProps['onClick'];
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ isActive, children, ...props }, ref) => {
    return (
      <Button1
        {...props}
        colorScheme={isActive ? 'purple' : 'facebook'}
        ref={ref}
      >
        {children}
      </Button1>
    );
  },
);
