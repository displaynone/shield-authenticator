import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

export const useTimer30 = (period: number) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const syncWithClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();

      if (seconds % period === 0) {
        setValue(prevValue => prevValue + 1);
      }
    };

    const forceRefresh = () => {
      setValue(prevValue => prevValue + 1);
    };

    syncWithClock();

    const intervalId = setInterval(syncWithClock, 1000);
    const appStateSubscription = AppState.addEventListener(
      'change',
      nextAppState => {
        if (nextAppState === 'active') {
          forceRefresh();
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
