import React from 'react';
import { NextPage } from 'next';
import {
  BackgroundProps, ColorProps,
  Box, Heading, Text,
} from '@chakra-ui/react';

type Props = {
  title?: string;
  children?: React.ReactNode;
  centerText?: boolean;
  darkMode?: boolean;
};

export const Card: NextPage<Props> = ({
  title = '', children, centerText = false, darkMode = false,
}) => {
  const bg: BackgroundProps['bg'] = darkMode
    ? 'blackAlpha.600'
    : 'whiteAlpha.600';

  const color: ColorProps['color'] = darkMode
    ? 'white'
    : 'gray.800';

  return (
    <Box
      textAlign={centerText ? 'center' : 'left'}
      p={4}
      bg={bg}
      color={color}
      rounded={10}
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.70)"
    >
      <Heading>{title}</Heading>
      {children && (
        <>
          <Box py={1} />
          <Text as="div" fontSize="xl">
            {children}
          </Text>
        </>
      )}
    </Box>
  );
};
