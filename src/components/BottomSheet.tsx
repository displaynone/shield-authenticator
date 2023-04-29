import { t } from '@lingui/macro';
import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Menu } from 'react-native-paper';
import { LogoIcon } from '../icons/LogoIcon';
import { MenuIcon } from '../icons/MenuIcon';
import IconButton from '../ui/IconButton';
import Text from '../ui/Text';
import { useRouter } from 'expo-router';
import { ComponentWithChildren } from '../types';
import colors from '../constants/colors';

const BottomSheet: FC<ComponentWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginHorizontal: -24,
    marginBottom: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.primary,
    flex: 0,
  },
});

export default BottomSheet;
