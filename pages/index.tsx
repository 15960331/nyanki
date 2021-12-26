import React from 'react';
import type { NextPage } from 'next/types';

import { Text } from '@chakra-ui/react';
import WordForm from '../components/WordForm';

const Index: NextPage = () => (
  <>
    <Text fontSize="6xl">Welcome to Nyanki!</Text>
    <WordForm />
  </>
);

export default Index;
