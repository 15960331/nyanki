import React, { forwardRef } from 'react';
import { Button as Button1, ButtonProps } from '@chakra-ui/react';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    isActive, children, ...buttonProps
  } = props;

  return (
    <Button1
      colorScheme={isActive ? 'purple' : 'facebook'}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      ref={ref}
    >
      {children}
    </Button1>
  );
});
