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
import { useTimer } from '../../src/hooks/useTimer';
import { DEFAULT_TOTP_PERIOD } from '../../src/constants/app';
import SiteToken from '../../src/ui/SiteToken';
import { generateTOTP, getAlgorithm } from '../../src/util/generateTotp';
import { Button } from 'react-native-paper';
import { Trans } from '@lingui/macro';

const QRInfo: FC = () => {
  const params = useSearchParams() as unknown as OtpRecord;
  const { push } = useRouter();
  const { newSite } = useDB();
  const [site, setSite] = useState<Site>();

  const period = site?.period || DEFAULT_TOTP_PERIOD;
  const timer = useTimer(period, 150);
  const progress = (100 * timer) / period;

  useEffect(() => {
    newSite(params).then(s => setSite(s));
  }, [newSite, params]);

  if (!site) {
    return <ActivityIndicator />;
  }

  return (
    <Container variant={['fullscreen', 'filled']}>
      <View style={styles.icon}>
        <IssuerIcon
          size={124}
          color={colors.white}
          issuer={site.issuer}
          progress={progress}
        />
      </View>
      <View style={styles.container}>
        <Text variant={['secondary', 'bold']} size="bodyLarge">
          {site.label}
        </Text>
        <SiteToken
          value={generateTOTP({
            algorithm: getAlgorithm(site.algorithm),
            digits: site.digits,
            period,
            secret: site.secret,
          })}
          variant="tertiary"
          size="displayMedium"
        />
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
});

export default QRInfo;
