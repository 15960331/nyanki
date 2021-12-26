import React from 'react';
import { Flex, Input } from '@chakra-ui/react';

const WordForm: React.VFC = () => (
  <Flex>
    <Input variant="outline" placeholder="word" />
    <Input variant="outline" placeholder="meaning" />
  </Flex>
);

export default WordForm;
