import React, { FC } from 'react';

import { Slot } from 'expo-router';
import Page from '../src/components/Page';

const RootLayout: FC = () => {
  return (
    <Page>
      <Slot />
    </Page>
  );
};

export default RootLayout;
