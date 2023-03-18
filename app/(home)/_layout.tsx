import React, { FC } from 'react';

import { Slot } from 'expo-router';
import AddSite from '../../src/components/AddSite';
import Container from '../../src/ui/Container';

const HomeLayout: FC = () => {
  return (
    <Container>
      <Slot />
      <AddSite />
    </Container>
  );
};

export default HomeLayout;
