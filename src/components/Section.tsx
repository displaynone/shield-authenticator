import { Trans } from '@lingui/macro';
import { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Container from '../ui/Container';
import Text from '../ui/Text';
import IconButton from '../ui/IconButton';
import { BackIcon } from '../icons/BackIcon';
import { useNavigation } from 'expo-router';

type SectionProps = {
  title: string;
  children: ReactNode;
  showBack?: boolean;
};

const Section: FC<SectionProps> = ({ children, title, showBack }) => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.head}>
          <View>
            {showBack && (
              <IconButton
                onPress={() => {
                  goBack();
                }}
                style={styles.button}
              >
                <BackIcon width={24} />
              </IconButton>
            )}
          </View>
          <Text size="headlineSmall" variant={['bold', 'primary']}>
            {title}
          </Text>
        </View>
        <View style={styles.wrapper}>{children}</View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  button: {
    paddingRight: 16,
    width: 36,
    minWidth: 20,
  },
  head: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  wrapper: {
    flexGrow: 1,
  },
});

export default Section;
