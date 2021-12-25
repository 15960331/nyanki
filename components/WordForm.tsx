import React from 'react';
import { Box, Input } from '@chakra-ui/react';

const WordForm: React.VFC = () => (
  <Box>
    <Input variant="outline" placeholder="word" />
    <Input variant="outline" placeholder="meaning" />
  </Box>
);

export default WordForm;
