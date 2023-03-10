import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Text as PaperText, useTheme } from 'react-native-paper';
import {
  MD3Theme,
  MD3TypescaleKey,
} from 'react-native-paper/lib/typescript/types';
import { ComponentWithChildren } from '../types';

const variants = [
  'primary',
  'secondary',
  'marginless',
  'tertiary',
  'bold',
] as const;
type VariantTypes = (typeof variants)[number];

type TextProps = {
  variant?: VariantTypes | VariantTypes[];
  size?: keyof typeof MD3TypescaleKey;
};

const Text: FC<ComponentWithChildren & TextProps> = ({
  children,
  variant = 'primary',
  size,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const listOfStiles = [variant].flat().map(style => styles[style]);

  return (
    <PaperText style={[styles.common, listOfStiles]} variant={size}>
      {children}
    </PaperText>
  );
};

const getStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    common: {
      paddingBottom: 32,
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
