import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import DatabaseProvider from '../providers/DatabaseProvider';
import { FingerprintAuthProvider } from '../providers/FingerprintAuthProvider';
import LocalizationProvider from '../providers/LocalizationProvider';
import { ComponentWithChildren } from '../types';
import Container from '../ui/Container';

import * as SplashScreen from 'expo-splash-screen';
import NotificationProvider from '../providers/NotificationProvider';

SplashScreen.preventAutoHideAsync();

const fontConfig = {
  android: {
    regular: {
      fontFamily: 'inter',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'inter-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'inter-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'inter-thin',
      fontWeight: 'normal',
    },
  },
};

const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.primary,
    primaryContainer: colors.primary,
    onPrimaryContainer: colors.light,
    secondary: colors.medium,
    tertiary: colors.light,
  },
  roundness: 8,
  fonts: configureFonts({
    config: {
      fontFamily: 'OpenSans-SemiCondensed-Regular',
    },
  }),
};

const Page: FC<ComponentWithChildren> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'OpenSans-SemiCondensed-Bold': require('../../assets/fonts/OpenSans_SemiCondensed-Bold.ttf'),
    'OpenSans-SemiCondensed-Regular': require('../../assets/fonts/OpenSans_SemiCondensed-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <DatabaseProvider>
        <PaperProvider theme={theme}>
          <LocalizationProvider>
            <SafeAreaProvider>
              <NotificationProvider>
                <FingerprintAuthProvider>
                  <StatusBar style="auto" />
                  {children}
                </FingerprintAuthProvider>
              </NotificationProvider>
            </SafeAreaProvider>
          </LocalizationProvider>
        </PaperProvider>
      </DatabaseProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightest,
  },
});

export default Page;
