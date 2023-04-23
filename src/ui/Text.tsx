import { FC } from 'react';
import { StyleSheet } from 'react-native';
import {
  MD3Theme,
  MD3TypescaleKey,
  Text as PaperText,
  useTheme,
} from 'react-native-paper';
import { ComponentWithChildren } from '../types';

const variants = [
  'primary',
  'secondary',
  'marginless',
  'tertiary',
  'bold',
] as const;
export type TextVariantTypes = (typeof variants)[number];

export type TextProps = {
  variant?: TextVariantTypes | TextVariantTypes[];
  size?: keyof typeof MD3TypescaleKey;
  numberOfLines?: number;
};

const Text: FC<ComponentWithChildren & TextProps> = ({
  children,
  variant = 'primary',
  size,
  numberOfLines = 1,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const listOfStiles = [variant].flat().map(style => styles[style]);

  return (
    <PaperText
      style={[styles.common, listOfStiles]}
      variant={size}
      numberOfLines={numberOfLines}
    >
      {children}
    </PaperText>
  );
};

const getStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    common: {
      paddingBottom: 24,
    },
    primary: {
      color: theme.colors.primary,
    },
    tertiary: {
      color: theme.colors.tertiary,
    },
    secondary: {
      color: theme.colors.secondary,
    },
    marginless: {
      paddingBottom: 0,
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginBottom: 0,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
    },
    bold: {
      fontWeight: '500',
      fontFamily: 'OpenSans-SemiCondensed-Bold',
    },
  });

export default Text;
