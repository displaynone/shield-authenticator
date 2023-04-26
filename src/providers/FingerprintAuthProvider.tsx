import { FC, createContext, useContext, useEffect, useState } from 'react';

import { Trans, t } from '@lingui/macro';
import * as LocalAuthentication from 'expo-local-authentication';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Switch } from 'react-native-paper';
import { ComponentWithChildren } from '../types';
import * as SecureStore from 'expo-secure-store';
import { KEY_STORE_USE_FINGERPRINT } from '../constants/app';
import Container from '../ui/Container';
import Text from '../ui/Text';

type FingerprintAuthApi = {
  isAuthenticated?: boolean;
};

export const FingerprintAuthContext = createContext<FingerprintAuthApi>({});
export const useFingerprintAuth = () => useContext(FingerprintAuthContext);

export const FingerprintAuthProvider: FC<ComponentWithChildren> = ({
  children,
}) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState<
    boolean | undefined
  >();
  const [fingerprint, setFingerprint] = useState<boolean | undefined>();
  const [succeed, setSucceed] = useState<boolean | undefined>();
  const [isFingerPrintEnabled, setIsFingerPrintEnabled] = useState<
    string | null
  >();

  useEffect(() => {
    if (isFingerPrintEnabled) {
      (async () => {
        try {
          const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: t`Login with your fingerprint`,
            disableDeviceFallback: true,
            cancelLabel: t`Cancel`,
          });
          if (biometricAuth.success) {
            setSucceed(true);
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [isFingerPrintEnabled]);

  useEffect(() => {
    (async () => {
      if (succeed === undefined) {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        setIsBiometricSupported(compatible);
        const enroll = await LocalAuthentication.isEnrolledAsync();
        if (enroll) {
          setFingerprint(true);
        }
      }
    })();
  }, [succeed]);

  useEffect(() => {
    (async () => {
      const enabled = await SecureStore.getItemAsync(KEY_STORE_USE_FINGERPRINT);
      setIsFingerPrintEnabled(enabled);
    })();
  });

  if (
    isFingerPrintEnabled === undefined ||
    isBiometricSupported === undefined ||
    fingerprint === undefined
  ) {
    return <ActivityIndicator />;
  }

  if (isFingerPrintEnabled && !succeed) {
    return (
      <Container variant="filled">
        <ActivityIndicator />
      </Container>
    );
  }

  const handleFingerPrintEnabled = (value: string) => {
    setIsFingerPrintEnabled(value);
    SecureStore.setItemAsync(KEY_STORE_USE_FINGERPRINT, value);
  };

  if (isFingerPrintEnabled === null) {
    return (
      <Container variant="filled">
        <View style={styles.notEnabled}>
          <Text size="headlineMedium" variant="secondary" numberOfLines={2}>
            <Trans>Fingerprint authentication</Trans>
          </Text>
          <Text size="bodyLarge" variant="secondary" numberOfLines={2}>
            <Trans>
              Secure the access to your stored 2FA using your device fingerprint
              authentication
            </Trans>
          </Text>
          <View style={styles.text}>
            <Text variant="secondary" size="bodyLarge">
              <Trans>Enable</Trans>
            </Text>
            <Switch
              value={!!isFingerPrintEnabled}
              onValueChange={value =>
                handleFingerPrintEnabled(value ? 'true' : 'false')
              }
            />
          </View>
        </View>
      </Container>
    );
  }

  const isAuthenticated = isBiometricSupported && fingerprint && succeed;

  return (
    <FingerprintAuthContext.Provider
      value={{
        isAuthenticated,
      }}
    >
      {children}
    </FingerprintAuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    flex: 1,
    padding: 20,
  },
  notEnabled: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
});
