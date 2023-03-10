import React, { FC, useEffect, useState } from 'react';

import { Trans, t } from '@lingui/macro';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import SiteInfo from '../../src/components/SiteInfo';
import colors from '../../src/constants/colors';
import Site from '../../src/models/Site';
import { useDB } from '../../src/providers/DatabaseProvider';
import Text from '../../src/ui/Text';

const Home: FC = () => {
  const { listSites } = useDB();
  const [sites, setSites] = useState<Site[]>([]);
  const [filteredSites, setFilteredSites] = useState<Site[]>([]);
  const [search, setSearch] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    listSites().then(list => {
      setSites(list);
      setFilteredSites(list);
      setLoading(false);
    });
  }, [listSites]);

  useEffect(() => {
    if (!search) {
      setFilteredSites(sites);
    } else {
      setFilteredSites(
        sites.filter(site => site.label.match(new RegExp(search, 'i'))),
      );
    }
  }, [search, sites]);

  if (loading) return <ActivityIndicator />;

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
      {filteredSites.map((site, index) => (
        <SiteInfo key={index} site={site} />
      ))}
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
});

export default Home;
