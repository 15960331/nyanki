import React from 'react';
import { NextPage } from 'next';
import {
  Box, Button, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Main: NextPage = () => (
  <Box
    p={1}
    minH="5vh" // Header 5 + Main 95
    bg="gray.700"
  >
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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
