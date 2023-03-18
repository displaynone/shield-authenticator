import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MD3Theme, useTheme } from 'react-native-paper';
import { ComponentWithChildren } from '../types';
import colors from '../constants/colors';

type IconButtonProps = {
  onPress: () => void;
};

const IconButton: FC<ComponentWithChildren & IconButtonProps> = ({
  children,
  onPress,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [isPressing, setIsPressing] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPressIn={() => setIsPressing(true)}
      onPressOut={() => setIsPressing(false)}
      onPress={() => onPress()}
    >
      <View
        style={[styles.button, isPressing ? styles.pressing : styles.regular]}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      minWidth: 48,
      width: 48,
      aspectRatio: 1,
      borderRadius: theme.roundness,
      alignItems: 'center',
      justifyContent: 'center',
    },
    regular: {
      backgroundColor: 'transparent',
    },
    pressing: {
      backgroundColor: colors.light,
    },
  });

export default IconButton;
