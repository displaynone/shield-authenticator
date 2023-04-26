import { Plural, Trans, t } from '@lingui/macro';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import React, { FC, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, MD3Theme, ProgressBar, useTheme } from 'react-native-paper';
import { ImportIcon } from '../../src/icons/Import';
import Site from '../../src/models/Site';
import { useDB } from '../../src/providers/DatabaseProvider';
import Container from '../../src/ui/Container';
import Text from '../../src/ui/Text';
import * as DocumentPicker from 'expo-document-picker';
import { OtpRecord } from '../../src/types';
import Section from '../../src/components/Section';

const SettingsImport: FC = () => {
  const { newSite } = useDB();
  const theme = useTheme();
  const styles = getStyles(theme);
  const [processing, setProcessing] = useState(false);
  const [numberOfSites, setNumberOfSites] = useState(0);
  const [sitesProcessed, setSitesProcessed] = useState(0);

  const loadBackupFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      const content = await FileSystem.readAsStringAsync(result.uri);
      try {
        const sites = JSON.parse(content) as Site[];
        if (!sites.length) {
          throw new Error();
        }
        setNumberOfSites(sites.length);
        setProcessing(true);
        for (let i = 0; i < sites.length; i++) {
          const site = sites[i];
          await newSite(
            {
              algorithm: site.algorithm,
              digits: site.digits,
              label: site.label,
              period: site.period,
              secret: site.secret,
              type: site.type,
              issuer: site.issuer,
            } as OtpRecord,
            false,
          );
          setSitesProcessed(value => value + 1);
        }
      } catch (e) {
        alert('The format of the file is not valid');
      }
    }
  };

  return (
    <Section title={t`Restore sites`} showBack>
      <Text size="bodyLarge" variant={'secondary'} numberOfLines={5}>
        <Trans>
          If you want to restore your saved sites from a backup, you can load
          the file stored on your device. It's important to note that the
          existing sites will remain unchanged and won't be replaced
        </Trans>
      </Text>

      <ImportIcon
        width={Dimensions.get('screen').width - 48}
        height={Dimensions.get('screen').width - 48}
      />
      {processing && (
        <View style={styles.buttonContainer}>
          <Text size="labelLarge" variant={['bold', 'primary', 'marginless']}>
            {sitesProcessed !== numberOfSites && <Trans>Processing</Trans>}
            {sitesProcessed === numberOfSites && <Trans>Completed</Trans>}
          </Text>
          <View style={styles.processContainer}>
            <ProgressBar progress={0} />
          </View>
          <Text>
            <Plural
              value={sitesProcessed}
              one={<Trans>Processed 1 site of {numberOfSites}</Trans>}
              other={<Trans>Processed # sites of {numberOfSites}</Trans>}
            />
          </Text>
        </View>
      )}
      {!processing && (
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => loadBackupFile()}
            disabled={processing}
          >
            <Trans>Load backup sites</Trans>
          </Button>
        </View>
      )}
    </Section>
  );
};

const getStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    buttonContainer: {
      marginTop: 24,
    },
    processContainer: {
      marginVertical: 16,
    },
  });

export default SettingsImport;
