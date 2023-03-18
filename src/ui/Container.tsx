import { FC } from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import { ComponentWithChildren } from '../types';

const variants = ['regular', 'filled', 'fullscreen'] as const;
type VariantTypes = (typeof variants)[number];

type ContainerProps = {
  variant?: VariantTypes | VariantTypes[];
};

const Container: FC<ComponentWithChildren & ContainerProps> = ({
  children,
  variant = 'regular',
}) => {
  const variants = [variant].flat();
  const variantStyles: StyleProp<ViewStyle>[] = variants.map(
    type => styles[type],
  );

  const Outter = variants.includes('fullscreen') ? View : SafeAreaView;
  const Inner = variants.includes('fullscreen') ? SafeAreaView : View;
  return (
    <Outter style={[styles.area, ...variantStyles]}>
      <Inner style={styles.area}>
        <View style={styles.container}>{children}</View>
      </Inner>
    </Outter>
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
    padding: 24,
    position: 'relative',
    height: '100%',
  },
  fullscreen: {},
});

export default Container;
