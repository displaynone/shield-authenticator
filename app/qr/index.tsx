import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { parseOtpUri } from '../../src/util/parseOtpUri';

const QRScanner: FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const { push } = useRouter();
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
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
        ratio="16:9"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
});

export default QRScanner;
