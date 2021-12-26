import React from 'react';
import { NextPage } from 'next';
import {
  Box, Button, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Main: NextPage = () => (
  <Box as="header" p={1}>
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
