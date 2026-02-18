import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

export const useTimer = (period?: number) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const syncWithClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();

      setValue(seconds);
    };

    syncWithClock();

    const intervalId = setInterval(syncWithClock, 1000);
    const appStateSubscription = AppState.addEventListener(
      'change',
      nextAppState => {
        if (nextAppState === 'active') {
          syncWithClock();
        }
      },
    );

    return () => {
      clearInterval(intervalId);
      appStateSubscription.remove();
    };
  }, [period]);

  return value;
};
