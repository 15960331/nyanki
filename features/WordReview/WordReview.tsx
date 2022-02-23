import React from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { LinkButton } from 'components/LinkButton';
import { Card } from 'components/Card';

type Props = {};

export const WordReview: NextPage<Props> = () => (
  <>
    <LinkButton href="/word/list">
      Back to List
    </LinkButton>

    <Box p={4} />

    <Card title="Cat" centerText darkMode>
      wats this
    </Card>
  </>
);
