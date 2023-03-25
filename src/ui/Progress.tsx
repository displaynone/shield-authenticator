import { FC } from 'react';
import { ProgressBar } from 'react-native-paper';
import { DEFAULT_TOTP_PERIOD } from '../constants/app';
import colors from '../constants/colors';
import { useTimer } from '../hooks/useTimer';
import { StyleSheet, View } from 'react-native';

const Progress: FC = () => {
  const timer = useTimer(DEFAULT_TOTP_PERIOD);
  const progress = timer / DEFAULT_TOTP_PERIOD;
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} color={colors.medium} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});

export default Progress;
