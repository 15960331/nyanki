import React from 'react';
import type { NextPage } from 'next/types';
import { Stack } from '@chakra-ui/react';

import { Card } from 'components/atoms/Card';
import { BlueLink } from 'components/BlueLink';

const Page: NextPage = () => (
  <Stack gap={5}>
    <Card
      title="Welcome to Nyanki!"
      darkMode
      centerText
    >
      Online flashcard maker.
    </Card>

    <Card title="What is this?">
      <p>Nyanki is a webapp for remembering things.</p>
      <p>You can make flashcards and check if you remembered them.</p>
    </Card>

    <Card title="What is different from Anki?">
      <p>
        As you can see, this webapp is made after
        <BlueLink href="https://apps.ankiweb.net/"> Anki </BlueLink>
        but I wanted it to be easier to edit flashcards.
      </p>
    </Card>

    <Card title="This is so bad">
      Nyanki is also an open source project so feel free to contribute on github.
      <br />
      <BlueLink href="https://github.com/15960331/nyanki">nyanki - github</BlueLink>
    </Card>
  </Stack>
);

export default Page;
