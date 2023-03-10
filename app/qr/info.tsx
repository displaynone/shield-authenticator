import { useRouter, useSearchParams } from 'expo-router';
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Site from '../../src/models/Site';
import { useDB } from '../../src/providers/DatabaseProvider';
import { OtpRecord } from '../../src/types';

const QRInfo: FC = () => {
  const params = useSearchParams() as unknown as OtpRecord;
  const { push } = useRouter();
  const { newSite } = useDB();
  const [site, setSite] = useState<Site>();

  useEffect(() => {
    newSite(params).then(s => setSite(s));
  }, [newSite, params]);

  if (!site) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text>Label: {site.label}</Text>
      <Text>Secret: {site.secret}</Text>
      <Text>Algorithm: {site.algorithm}</Text>
      <Text>Digits: {site.digits}</Text>
      <Text>Issuer: {site.issuer}</Text>
      <Text>Type: {site.type}</Text>
      <Text>Period: {site.period}</Text>
      <Button
        title={'Tap to Scan Again'}
        onPress={() => {
          push('/qr');
        }}
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

export default QRInfo;
