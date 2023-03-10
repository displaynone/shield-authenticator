import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import Site from '../models/Site';
import Text from '../ui/Text';
import { generateTOTP, getAlgorithm } from '../util/generateTotp';
import SiteToken from '../ui/SiteToken';
import colors from '../constants/colors';
import IssuerIcon from '../ui/IssuerIcon';
import { useTimer } from '../hooks/useTimer';
import { DEFAULT_TOTP_PERIOD } from '../constants/app';

type SiteInfoProps = {
  site: Site;
};

const SiteInfo: FC<SiteInfoProps> = ({ site }) => {
  const period = site.period || DEFAULT_TOTP_PERIOD;
  const timer = useTimer(period, 150);
  const progress = (100 * timer) / period;
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <IssuerIcon issuer={site.issuer} progress={progress} />
      </View>
      <View>
        <Text size="titleSmall" variant={['marginless', 'primary']}>
          {site.label}
        </Text>
        <SiteToken
          value={generateTOTP({
            algorithm: getAlgorithm(site.algorithm),
            digits: site.digits,
            period,
            secret: site.secret,
          })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 16,
  },
});

export default SiteInfo;
