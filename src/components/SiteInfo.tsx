import { Trans } from '@lingui/macro';
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { DEFAULT_TOTP_PERIOD } from '../constants/app';
import colors from '../constants/colors';
import { TrashIcon } from '../icons/TrashIcon';
import Site from '../models/Site';
import IssuerIcon from '../ui/IssuerIcon';
import SiteToken from '../ui/SiteToken';
import Text from '../ui/Text';
import { generateTOTP, getAlgorithm } from '../util/generateTotp';
import CopyToClipboard from './CopyToClipboard';
import { TickIcon } from '../icons/TickIcon';
import { useDB } from '../providers/DatabaseProvider';
import { useTimer30 } from '../hooks/useTimer30';

type SiteInfoProps = {
  site: Site;
  timer: number;
  visible: boolean;
  deleteSite: (site: Site) => void;
};

const SiteInfo: FC<SiteInfoProps> = ({ site, timer, visible, deleteSite }) => {
  const { deleteSite: deleteSiteDB } = useDB();
  const [token, setToken] = useState('------');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(true);
  const swipeableRef = useRef<Swipeable>(null);
  const period = site.period || DEFAULT_TOTP_PERIOD;

  const regenerateToken = useCallback(() => {
    generateTOTP({
      algorithm: getAlgorithm(site.algorithm),
      digits: site.digits,
      period,
      secret: site.secret,
    }).then(t => {
      setToken(t);
      setLoading(false);
    });
  }, [period, site.algorithm, site.digits, site.secret]);

  useEffect(() => {
    if (timer >= 0 && visible) {
      // Forces update
      setLoading(true);
      regenerateToken();
    }
  }, [timer, regenerateToken, site.label, visible]);

  const cancelSwip = () => {
    swipeableRef.current?.close();
    setShowConfirmation(false);
  };

  const handleDeleteSite = () => {
    deleteSite(site);
    deleteSiteDB(site);
  };

  const renderRightActions = () => {
    return (
      <View style={styles.swipedRow}>
        <View style={styles.swipeContainer}>
          <View style={styles.swipeCancel}>
            <Button onPress={() => cancelSwip()}>
              <Text>
                <Trans>Cancel</Trans>
              </Text>
            </Button>
          </View>
          <Animated.View style={[styles.deleteButton]}>
            {!showConfirmation && (
              <TouchableOpacity
                onPress={() => setShowConfirmation(true)}
                style={styles.cancelButton}
              >
                <TrashIcon width={24} height={24} color={colors.lightest} />
                <Text variant={'tertiary'}>
                  <Trans>Delete</Trans>
                </Text>
              </TouchableOpacity>
            )}
            {showConfirmation && (
              <TouchableOpacity
                onPress={() => handleDeleteSite()}
                style={styles.confirmationButton}
              >
                <Text variant={['tertiary', 'marginless']}>
                  <Trans>Confirm deletion</Trans>
                </Text>
                <TickIcon width={24} height={24} color={colors.lightest} />
              </TouchableOpacity>
            )}
          </Animated.View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Swipeable renderRightActions={renderRightActions} ref={swipeableRef}>
        <View style={styles.card}>
          <View style={styles.main}>
            <View style={styles.icon}>
              <IssuerIcon issuer={site.issuer} />
            </View>
            <View>
              <Text size="titleSmall" variant={['marginless', 'primary']}>
                {site.label}
              </Text>
              <SiteToken value={token} loading={loading} />
            </View>
          </View>
          <CopyToClipboard text={token} />
        </View>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: colors.red,
    marginBottom: 16,
    borderRadius: 8,
  },
  card: {
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 8,
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
  swipedRow: {
    flexDirection: 'row',
  },
  swipeCancel: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: colors.light,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  swipeContainer: {
    borderRadius: 8,
    backgroundColor: colors.red,
    width: '100%',
    flexDirection: 'row',
  },
  deleteButton: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: colors.red,
    padding: 16,
  },
  cancelButton: {
    alignContent: 'center',
    alignItems: 'center',
  },
  confirmationButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
  },
});

export default SiteInfo;
