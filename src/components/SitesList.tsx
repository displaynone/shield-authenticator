import React, {
  Dispatch,
  FC,
  SetStateAction,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Trans, t } from '@lingui/macro';
import { FlashList } from '@shopify/flash-list';
import { StyleSheet, View, ViewToken } from 'react-native';
import { TextInput } from 'react-native-paper';
import { DEFAULT_TOTP_PERIOD } from '../constants/app';
import colors from '../constants/colors';
import { useTimer30 } from '../hooks/useTimer30';
import Site from '../models/Site';
import Text from '../ui/Text';
import SiteInfo from './SiteInfo';

type SitesListProps = {
  sites: Site[];
  deleteSite: (site: Site) => void;
};

const SitesList: FC<SitesListProps> = ({ sites, deleteSite }) => {
  const [search, setSearch] = useState<string>();
  const [filteredSites, setFilteredSites] = useState(sites);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const timer30 = useTimer30(DEFAULT_TOTP_PERIOD);

  useEffect(() => {
    const regEx = new RegExp(search || '', 'i');
    setFilteredSites(
      !search
        ? sites
        : sites.filter(
            site => site.label.match(regEx) || site.issuer?.match(regEx),
          ),
    );
  }, [search, sites]);

  const onViewableItemsChanged = useCallback(
    ({
      viewableItems,
    }: {
      viewableItems: ViewToken[];
      changed: ViewToken[];
    }) => {
      setVisibleItems((prevIntes: string[]) => {
        return viewableItems.map(token => token.item.label);
      });
    },
    [],
  );

  if (!sites.length) {
    return (
      <Text>
        <Trans>No sites have been added yet</Trans>
      </Text>
    );
  }

  return (
    <>
      <View style={styles.inputWrapper}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          right={<TextInput.Icon icon="magnify" />}
          placeholder={t`Search...`}
          mode="outlined"
          theme={{
            colors: {
              background: colors.white,
            },
          }}
          outlineColor={colors.medium}
          placeholderTextColor={colors.medium}
        />
      </View>
      {!!sites.length && !filteredSites.length && (
        <Text>
          <Trans>No results matching your search</Trans>
        </Text>
      )}
      <View style={styles.scrollView}>
        <FlashList
          data={filteredSites}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <SiteInfo
                site={item}
                timer={timer30}
                visible={visibleItems.includes(item.label)}
                deleteSite={deleteSite}
              />
            );
          }}
          onViewableItemsChanged={onViewableItemsChanged}
          estimatedItemSize={90}
          extraData={{ timer30 }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 32,
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
  },
  scrollView: {
    marginBottom: 32,
    width: '100%',
    flex: 1,
  },
});

export default memo(SitesList);
