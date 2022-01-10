import React from 'react';
import { NextPage } from 'next';
import {
  BackgroundProps, ColorProps,
  Box, Heading, Text,
} from '@chakra-ui/react';

type Props = {
  title: string;
  children?: React.ReactNode;
  centerText?: boolean;
  darkMode?: boolean;
};

export const Card: NextPage<Props> = ({
  title, children, centerText = false, darkMode = false,
}) => {
  const bg: BackgroundProps['bg'] = darkMode
    ? 'blackAlpha.600'
    : 'whiteAlpha.600';

  const color: ColorProps['color'] = darkMode
    ? 'white'
    : 'black';

  return (
    <Box
      textAlign={centerText ? 'center' : 'left'}
      p={4}
      bg={bg}
      color={color}
      rounded={10}
    >
      <Heading>{title}</Heading>
      {children && (
        <>
          <Box py={1} />
          <Text fontSize="xl">
            {children}
          </Text>
        </>
      )}
    </Box>
  );
};
