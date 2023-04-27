import { FC, useState } from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { MD3Theme, useTheme } from 'react-native-paper';
import colors from '../constants/colors';
import { ComponentWithChildren } from '../types';

type IconButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const IconButton: FC<ComponentWithChildren & IconButtonProps> = ({
  children,
  onPress,
  style,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [isPressing, setIsPressing] = useState(false);
  return (
    <Pressable
      style={styles.container}
      onPressIn={() => setIsPressing(true)}
      onPressOut={() => setIsPressing(false)}
      onPress={event => onPress()}
    >
      <View
        style={[
          styles.button,
          isPressing ? styles.pressing : styles.regular,
          style,
        ]}
      >
        {children}
      </View>
    </Pressable>
  );
};

const getStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    },
    button: {
      backgroundColor: 'cyan',
      padding: 8,
      borderRadius: theme.roundness,
    },
    regular: {
      backgroundColor: 'transparent',
    },
    pressing: {
      backgroundColor: colors.light,
    },
  });

export default IconButton;
