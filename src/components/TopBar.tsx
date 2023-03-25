import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { LogoIcon } from '../icons/LogoIcon';
import Text from '../ui/Text';

const TopBar: FC = () => {
  return (
    <View style={styles.head}>
      <LogoIcon width={64} height={64} />
      <Text size="headlineSmall" variant={['marginless', 'bold']}>
        TimePass
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TopBar;
