import { Trans } from '@lingui/macro';
import * as Clipboard from 'expo-clipboard';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import colors from '../constants/colors';
import { CopyPasteIcon } from '../icons/CopyPasteIcon';
import { useNotification } from '../providers/NotificationProvider';
import IconButton from '../ui/IconButton';

type CopyToClipboardProps = {
  text: string;
};

const CopyToClipboard: FC<CopyToClipboardProps> = ({ text }) => {
  const { setNotification } = useNotification();

  const handleCopyToClipboard = () => {
    const copyToClipboard = async () => {
      await Clipboard.setStringAsync(text);
      setNotification(<Trans>Token copied to clipboard</Trans>);
    };
    copyToClipboard();
  };

  return (
    <IconButton onPress={handleCopyToClipboard}>
      <CopyPasteIcon width={24} height={24} color={colors.medium} />
    </IconButton>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default CopyToClipboard;
