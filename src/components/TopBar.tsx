import { t } from '@lingui/macro';
import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Menu } from 'react-native-paper';
import { LogoIcon } from '../icons/LogoIcon';
import { MenuIcon } from '../icons/MenuIcon';
import IconButton from '../ui/IconButton';
import Text from '../ui/Text';
import { useRouter } from 'expo-router';

const TopBar: FC = () => {
  const { push } = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.head}>
      <View style={styles.logo}>
        <LogoIcon width={64} height={64} />
        <Text size="titleMedium" variant={['marginless', 'bold']}>
          Shield Authenticator
        </Text>
      </View>
      <View>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <IconButton onPress={() => setMenuVisible(true)}>
              <MenuIcon height={28} />
            </IconButton>
          }
          style={styles.menu}
          anchorPosition="bottom"
        >
          <Menu.Item
            onPress={() => push('/settings/export')}
            title={t`Backup your data`}
            leadingIcon="export"
          />
          <Menu.Item
            onPress={() => push('/settings/import')}
            title={t`Restore sites`}
            leadingIcon="import"
          />
        </Menu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menu: {
    // marginTop: 48,
  },
});

export default TopBar;
