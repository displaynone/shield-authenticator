import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';
import { ComponentWithChildren } from '../types';

import { Snackbar } from 'react-native-paper';
import Text from '../ui/Text';

export interface NotificationContextInterface {
  setNotification: (text: string | ReactNode) => void;
}

const initialDBContext: NotificationContextInterface = {
  setNotification: () => {},
};

export const NotificationContext =
  createContext<NotificationContextInterface>(initialDBContext);
export const useNotification = () => useContext(NotificationContext);

const SNACKBAR_DURATION = 3000;

const NotificationProvider: FC<ComponentWithChildren> = ({ children }) => {
  const [notification, setNotification] = useState<string | ReactNode>();
  const [visible, setVisible] = useState(false);

  const handleNotification = (text: string | ReactNode) => {
    setNotification(text);
    setVisible(true);
  };

  return (
    <NotificationContext.Provider
      value={{ setNotification: handleNotification }}
    >
      {children}
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={SNACKBAR_DURATION}
      >
        <Text variant={['tertiary', 'marginless']}>{notification}</Text>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
