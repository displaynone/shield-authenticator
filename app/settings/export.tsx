import { Trans, t } from '@lingui/macro';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import React, { FC } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, MD3Theme, useTheme } from 'react-native-paper';
import { ExportIcon } from '../../src/icons/Export';
import Site from '../../src/models/Site';
import { useDB } from '../../src/providers/DatabaseProvider';
import Container from '../../src/ui/Container';
import Text from '../../src/ui/Text';
import { format } from 'date-fns';
import Section from '../../src/components/Section';

const SettingsExport: FC = () => {
  const { listSites } = useDB();
  const theme = useTheme();
  const styles = getStyles(theme);

  const downloadStringAsFile = async () => {
    const sites = await listSites();
    const content = JSON.stringify(
      sites.map(
        site =>
          ({
            label: site.label,
            secret: site.secret,
            algorithm: site.algorithm,
            digits: site.digits,
            issuer: site.issuer,
            type: site.type,
            period: site.period,
          } as Site),
      ),
      null,
      2,
    );

    const fileUri =
      (FileSystem.documentDirectory || '') +
      'shield-authenticator_' +
      format(Date.now(), 'yyyy-MM-dd-HH-mm-ss') +
      '.json';
    await FileSystem.writeAsStringAsync(fileUri, content);

    const isAvailable = await Sharing.isAvailableAsync();
    if (!isAvailable) {
      alert('Sharing is not available on your device.');
      return;
    }

    await Sharing.shareAsync(fileUri);
  };

  return (
    <Section title={t`Backup your data`} showBack>
      <Text size="bodyLarge" variant={'secondary'} numberOfLines={3}>
        <Trans>
          To ensure that you don't lose your saved data, you can download a file
          of the sites and restore them at a later time
        </Trans>
      </Text>

      <ExportIcon
        width={Dimensions.get('screen').width - 48}
        height={Dimensions.get('screen').width - 48}
      />
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => downloadStringAsFile()}>
          <Text variant={['tertiary', 'marginless']}>
            <Trans>Generate file</Trans>
          </Text>
        </Button>
      </View>
    </Section>
  );
};

const getStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    buttonContainer: {
      marginTop: 24,
    },
  });

export default SettingsExport;
