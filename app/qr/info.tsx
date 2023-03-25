import { useRouter, useSearchParams } from 'expo-router';
import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Site from '../../src/models/Site';
import { useDB } from '../../src/providers/DatabaseProvider';
import { OtpRecord } from '../../src/types';
import Container from '../../src/ui/Container';
import Text from '../../src/ui/Text';
import IssuerIcon from '../../src/ui/IssuerIcon';
import colors from '../../src/constants/colors';
import { DEFAULT_TOTP_PERIOD } from '../../src/constants/app';
import SiteToken from '../../src/ui/SiteToken';
import { generateTOTP, getAlgorithm } from '../../src/util/generateTotp';
import { Button } from 'react-native-paper';
import { Trans } from '@lingui/macro';
import CopyToClipboard from '../../src/components/CopyToClipboard';

const QRInfo: FC = () => {
  const params = useSearchParams() as unknown as OtpRecord;
  const { push } = useRouter();
  const { newSite } = useDB();
  const [site, setSite] = useState<Site>();

  const period = site?.period || DEFAULT_TOTP_PERIOD;

  useEffect(() => {
    newSite(params).then(s => setSite(s));
  }, [newSite, params]);

  if (!site) {
    return <ActivityIndicator />;
  }

  const token = generateTOTP({
    algorithm: getAlgorithm(site.algorithm),
    digits: site.digits,
    period,
    secret: site.secret,
  });

  return (
    <Container variant={['fullscreen', 'filled']}>
      <View style={styles.icon}>
        <IssuerIcon size={124} color={colors.white} issuer={site.issuer} />
      </View>
      <View style={styles.container}>
        <Text variant={['secondary', 'bold']} size="bodyLarge">
          {site.label}
        </Text>
        <View style={styles.token}>
          <SiteToken value={token} variant="tertiary" size="displayMedium" />
          <CopyToClipboard text={token} />
        </View>
      </View>
      <Button
        mode="elevated"
        onPress={() => {
          push('/qr');
        }}
      >
        <Trans>Scan another code</Trans>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 32,
  },
  icon: {
    alignItems: 'center',
  },
  token: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default QRInfo;
