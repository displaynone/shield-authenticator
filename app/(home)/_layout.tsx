import React, { FC } from 'react';

import { Slot } from 'expo-router';
import AddSite from '../../src/components/AddSite';
import Container from '../../src/ui/Container';
import TopBar from '../../src/components/TopBar';

const HomeLayout: FC = () => {
  return (
    <Container>
      <TopBar />
      <Slot />
      <AddSite />
    </Container>
  );
};

export default HomeLayout;
