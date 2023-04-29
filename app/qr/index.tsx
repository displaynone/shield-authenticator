import { Trans, t } from '@lingui/macro';
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { FC, useEffect, useState } from 'react';
import {
  Dimensions,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  ActivityIndicator,
  Button,
  MD3Theme,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/src/types';
import BottomSheet from '../../src/components/BottomSheet';
import Section from '../../src/components/Section';
import colors from '../../src/constants/colors';
import { CameraPermissionIcon } from '../../src/icons/CameraPermission';
import { EditIcon } from '../../src/icons/Edit';
import { QrIcon } from '../../src/icons/Qr';
import { ScanQRIcon } from '../../src/icons/ScanQR';
import Text from '../../src/ui/Text';
import { parseOtpUri } from '../../src/util/parseOtpUri';
import { OtpRecord } from '../../src/types';

const QRScanner: FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [showCamera, setShowCamera] = useState(false);
  const [manually, setManually] = useState(false);
  const [token, setToken] = useState('');
  const [tokenName, setTokenName] = useState('');
  const { push } = useRouter();
  const theme = useTheme();
  const styles = getStyles(theme);

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data, type }: BarCodeEvent) => {
    const parsed = parseOtpUri(data);
    if (parsed.type === 'totp') {
      push({ pathname: '/qr/info', params: parsed });
    }
  };

  const handleTokenManually = () => {
    const params: OtpRecord = {
      type: 'totp',
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      label: tokenName,
      issuer: tokenName,
      secret: token,
    };
    push({ pathname: '/qr/info', params });
  };

  const resetPermissions = () => {
    Linking.openSettings();
  };

  if (hasPermission === undefined) {
    return <ActivityIndicator />;
  }

  if (hasPermission === false) {
    return (
      <Section title={t`Add a new site`} showBack>
        <Text size="titleLarge" variant={['primary', 'bold']} numberOfLines={5}>
          <Trans>No access to camera</Trans>
        </Text>
        <CameraPermissionIcon
          width={Dimensions.get('screen').width - 48}
          height={Dimensions.get('screen').width - 48}
        />
        <View style={styles.divider}>
          <Text size="bodyLarge" variant={'secondary'} numberOfLines={4}>
            <Trans>
              Access to the camera was denied. To enable Shield Authenticator to
              utilize the camera, it is necessary to provide permission through
              the settings
            </Trans>
          </Text>
        </View>
        <View style={styles.divider}>
          <Button mode="contained" onPress={() => resetPermissions()}>
            <Text>
              <Trans>Enable camera</Trans>
            </Text>
          </Button>
        </View>
      </Section>
    );
  }

  const inputTheme: ThemeProp = {
    colors: {
      background: colors.light,
      primary: colors.dark,
    },
    roundness: 4,
  };

  return (
    <Section title={t`Add a new site`} showBack>
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrolling}>
          <Text size="bodyLarge" variant={'secondary'} numberOfLines={4}>
            <Trans>
              You can either use your device's camera to scan the 2FA QR code on
              the site, or manually enter the provided token and a name
            </Trans>
          </Text>
          {showCamera && (
            <View>
              <View style={styles.cameraContainer}>
                <Camera
                  onBarCodeScanned={handleBarCodeScanned}
                  style={styles.camera}
                  ratio="1:1"
                />
              </View>
              <Text size="bodyMedium" variant={'secondary'} numberOfLines={2}>
                <Trans>
                  The QR code can be easily recognized by simply pointing your
                  device's camera at it
                </Trans>
              </Text>
              <View style={styles.cancel}>
                <Button
                  mode="contained-tonal"
                  onPress={() => setShowCamera(false)}
                >
                  <Trans>Cancel</Trans>
                </Button>
              </View>
            </View>
          )}
          {!showCamera && !manually && (
            <View>
              <ScanQRIcon
                width={Dimensions.get('screen').width - 48}
                height={Dimensions.get('screen').width - 48}
              />
            </View>
          )}
          {manually && (
            <>
              <View>
                <Text
                  variant={['marginless', 'secondary', 'bold']}
                  size="labelLarge"
                >
                  <Trans>Token name</Trans>
                </Text>
                <TextInput
                  value={tokenName}
                  onChangeText={text => setTokenName(text)}
                  mode="outlined"
                  theme={inputTheme}
                />
              </View>
              <View style={styles.formSpacer}>
                <Text
                  variant={['marginless', 'secondary', 'bold']}
                  size="labelLarge"
                >
                  <Trans>Token</Trans>
                </Text>
                <TextInput
                  value={token}
                  onChangeText={text => setToken(text)}
                  mode="outlined"
                  theme={inputTheme}
                />
              </View>
              <View style={styles.formSpacer}>
                <View style={styles.formSpacer}>
                  <Button
                    mode="contained"
                    onPress={() => handleTokenManually()}
                  >
                    <Text variant={['marginless', 'tertiary']}>
                      <Trans>Save site</Trans>
                    </Text>
                  </Button>
                </View>
              </View>
            </>
          )}
        </ScrollView>
        <BottomSheet>
          <Pressable
            onPress={() => {
              setShowCamera(true);
              setManually(false);
            }}
          >
            <View style={styles.button}>
              <View style={styles.icon}>
                <QrIcon color={colors.primary} width={24} height={24} />
              </View>
              <Text variant={['tertiary', 'marginless']} size="bodyLarge">
                <Trans>Scan QR code</Trans>
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              setShowCamera(false);
              setManually(true);
            }}
            style={styles.spacer}
          >
            <View style={styles.button}>
              <View style={styles.icon}>
                <EditIcon color={colors.primary} width={24} height={24} />
              </View>
              <Text variant={['tertiary', 'marginless']} size="bodyLarge">
                <Trans>Add token manually</Trans>
              </Text>
            </View>
          </Pressable>
        </BottomSheet>
      </View>
    </Section>
  );
};

const getStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    camera: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: theme.roundness,
    },
    cameraContainer: {
      backgroundColor: colors.light,
      padding: 16,
      borderRadius: theme.roundness,
      marginBottom: 24,
    },
    divider: {
      marginTop: 24,
    },
    button: {
      flexDirection: 'row',
      padding: 8,
      borderRadius: 4,
      alignItems: 'center',
    },
    icon: {
      margin: 0,
      marginRight: 16,
      padding: 4,
      borderRadius: 4,
      backgroundColor: colors.light,
    },
    wrapper: {
      flex: 1,
    },
    scrolling: {
      flex: 0,
    },
    cancel: {
      paddingBottom: 24,
    },
    spacer: {
      marginTop: 4,
    },
    formSpacer: {
      marginTop: 24,
    },
  });

export default QRScanner;
