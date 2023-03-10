import React, { FC } from 'react';

import { Slot } from 'expo-router';
import AddSite from '../../src/components/AddSite';

const HomeLayout: FC = () => {
  return (
    <>
      <Slot />
      <AddSite />
    </>
  );
};

export default HomeLayout;
