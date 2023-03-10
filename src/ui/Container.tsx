import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import { ComponentWithChildren } from '../types';

const variants = ['regular', 'filled'] as const;
type VariantTypes = (typeof variants)[number];

type ContainerProps = {
  variant?: VariantTypes;
};

const Container: FC<ComponentWithChildren & ContainerProps> = ({
  children,
  variant = 'regular',
}) => {
  return (
    <SafeAreaView style={[styles.area, styles[variant]]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  regular: {},
  filled: {
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
    height: '100%',
  },
});

export default Container;
