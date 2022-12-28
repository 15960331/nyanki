import React from 'react';
import { NextPage } from 'next';
import { ColorProps, Box, Heading, Text, BoxProps } from '@chakra-ui/react';

type Props = {
  title?: string;
  children?: React.ReactNode;
  centerText?: boolean;
  darkMode?: boolean;
  width?: BoxProps['width'];
};

export const Card: NextPage<Props> = ({
  title = '',
  children,
  centerText = false,
  darkMode = false,
  ...props
}) => {
  const BACKGROUND_COLOR: BoxProps['backgroundColor'] = darkMode
    ? 'blackAlpha.600'
    : 'whiteAlpha.600';
  const COLOR: ColorProps['color'] = darkMode ? 'white' : 'gray.800';

  return (
    <Box
      textAlign={centerText ? 'center' : 'left'}
      backgroundColor={BACKGROUND_COLOR}
      color={COLOR}
      padding={4}
      rounded={10}
      boxShadow="0px 1px 4px black"
      {...props}
    >
      <Heading>{title}</Heading>
      {children && (
        <>
          <Box py={1} />
          <Text
            as="div"
            fontSize="xl"
          >
            {children}
          </Text>
        </>
      )}
    </Box>
  );
};
