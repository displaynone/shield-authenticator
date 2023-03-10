import { t } from '@lingui/macro';
import { useRouter } from 'expo-router';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const AddSite: FC = () => {
  const { push } = useRouter();
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => push('/qr')}
      label={t`Add site`}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default AddSite;
