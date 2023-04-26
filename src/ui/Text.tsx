import { FC } from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import {
  MD3Theme,
  MD3TypescaleKey,
  Text as PaperText,
  useTheme,
} from 'react-native-paper';
import { ComponentWithChildren, TextDirection } from '../types';
import { useLocaleContext } from '../providers/LocalizationProvider';
import { text } from '@nozbe/watermelondb/decorators';

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
  const { textDirection } = useLocaleContext();
  const theme = useTheme();
  const styles = getStyles(theme, textDirection);

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

const getStyles = (theme: MD3Theme, textDirection: TextDirection) =>
  StyleSheet.create({
    common: {
      paddingBottom: 24,
      direction: textDirection as TextStyle['direction'],
      textAlign: textDirection === 'ltr' ? 'left' : 'right',
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
