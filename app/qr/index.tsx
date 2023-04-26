import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { FC, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { parseOtpUri } from '../../src/util/parseOtpUri';
import { Trans, t } from '@lingui/macro';
import colors from '../../src/constants/colors';
import { Button, MD3Theme, useTheme } from 'react-native-paper';
import Text from '../../src/ui/Text';
import { ScanQRIcon } from '../../src/icons/ScanQR';
import Container from '../../src/ui/Container';
import Section from '../../src/components/Section';

const CAMERA_WIDTH = Dimensions.get('screen').width - 2 * 20;

const QRScanner: FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [showCamera, setShowCamera] = useState(false);
  const { push } = useRouter();
  const theme = useTheme();
  const styles = getStyles(theme);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data, type }: BarCodeEvent) => {
    const parsed = parseOtpUri(data);
    if (parsed.type === 'totp') {
      push({ pathname: '/qr/info', params: parsed });
    }
  };

  if (hasPermission === null) {
    return (
      <Text>
        <Trans>Requesting for camera permission</Trans>
      </Text>
    );
  }
  if (hasPermission === false) {
    return (
      <Text>
        <Trans>No access to camera</Trans>
      </Text>
    );
  }

  return (
    <Section title={t`Add a new site`} showBack>
      <Text size="bodyLarge" variant={'secondary'} numberOfLines={2}>
        <Trans>
          Scan your website's 2FA QR code using your device's camera
        </Trans>
      </Text>
      {showCamera && (
        <>
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
        </>
      )}
      {!showCamera && (
        <>
          <ScanQRIcon
            width={Dimensions.get('screen').width - 48}
            height={Dimensions.get('screen').width - 48}
          />
          <Button mode="contained" onPress={() => setShowCamera(true)}>
            <Trans>Scan QR code</Trans>
          </Button>
        </>
      )}
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
  });

export default QRScanner;
