import React from 'react';
import { NextPage } from 'next';
import {
  Box, Menu, Button, MenuButton, MenuItem, MenuList, Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Main: NextPage = () => (
  <Box
    p={1}
    minH="5vh" // Header 5 + Main 95
    bg="gray.700"
    display="flex"
    alignItems="center"
  >
    <Text as="span" fontSize="3xl" color="white" paddingX={4}>Nyanki</Text>
    <Menu>
      <MenuButton as={Button} colorScheme="facebook" rightIcon={<ChevronDownIcon />}>
        Word
      </MenuButton>
      <MenuList>
        <MenuItem>Add & Delete</MenuItem>
        <MenuItem>Test</MenuItem>
      </MenuList>
    </Menu>
  </Box>
);

export default Main;
