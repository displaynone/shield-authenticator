import { useNavigation } from 'expo-router';
import { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { BackIcon } from '../icons/BackIcon';
import Container from '../ui/Container';
import IconButton from '../ui/IconButton';
import Text from '../ui/Text';

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
          {showBack && (
            <IconButton
              onPress={() => {
                goBack();
              }}
              style={styles.button}
            >
              <BackIcon width={20} />
            </IconButton>
          )}
          <Text
            size="headlineSmall"
            variant={['bold', 'primary', 'marginless']}
          >
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
    paddingLeft: 0,
    paddingTop: 4,
  },
  head: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1000,
  },
  wrapper: {
    flexGrow: 1,
  },
});

export default Section;
