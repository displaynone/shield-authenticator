import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { DEFAULT_TOTP_PERIOD } from '../constants/app';
import colors from '../constants/colors';
import { useTimer } from '../hooks/useTimer';
import Site from '../models/Site';
import IssuerIcon from '../ui/IssuerIcon';
import SiteToken from '../ui/SiteToken';
import Text from '../ui/Text';
import { generateTOTP, getAlgorithm } from '../util/generateTotp';
import CopyToClipboard from './CopyToClipboard';

type SiteInfoProps = {
  site: Site;
};

const SiteInfo: FC<SiteInfoProps> = ({ site }) => {
  const period = site.period || DEFAULT_TOTP_PERIOD;
  const timer = useTimer(period, 150);
  const progress = (100 * timer) / period;

  const token = generateTOTP({
    algorithm: getAlgorithm(site.algorithm),
    digits: site.digits,
    period,
    secret: site.secret,
  });

  return (
    <View style={styles.card}>
      <View style={styles.main}>
        <View style={styles.icon}>
          <IssuerIcon issuer={site.issuer} progress={progress} />
        </View>
        <View>
          <Text size="titleSmall" variant={['marginless', 'primary']}>
            {site.label}
          </Text>
          <SiteToken value={token} />
        </View>
      </View>
      <CopyToClipboard text={token} />
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
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 16,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

export default SiteInfo;
