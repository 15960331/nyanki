import React from 'react';
import { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';

import { Input } from './Input';

export const WordForm: NextPage = () => (
  <Flex>
    <Input placeholder="word" />
    <Input placeholder="meaning" />
  </Flex>
);
