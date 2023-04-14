import { useEffect, useState } from 'react';

export const useTimer30 = (period: number) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const checkTimeAndUpdateValue = () => {
      const now = new Date();
      const seconds = now.getSeconds();

      if (seconds % period === 0) {
        setValue(prevValue => (prevValue === null ? 0 : prevValue + 1));
      }
    };

    const intervalId = setInterval(checkTimeAndUpdateValue, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [period]);

  return value;
};
