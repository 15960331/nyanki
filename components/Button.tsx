import React, { forwardRef } from 'react';
import { Button as Button1, ButtonProps } from '@chakra-ui/react';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    isActive, children, ...buttonProps
  } = props;

  return (
    <Button1
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      colorScheme={isActive ? 'purple' : 'facebook'}
      ref={ref}
    >
      {children}
    </Button1>
  );
});
