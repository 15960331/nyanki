import React from 'react';
import { Flex } from '@chakra-ui/react';

import Input from './atoms/Input';

const WordForm: React.VFC = () => (
  <Flex>
    <Input variant="outline" placeholder="word" />
    <Input variant="outline" placeholder="meaning" />
  </Flex>
);

export default WordForm;
