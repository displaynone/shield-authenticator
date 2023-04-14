import { useEffect, useState } from 'react';

export const useTimer = (period?: number) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const checkTimeAndUpdateValue = () => {
      const now = new Date();
      const seconds = now.getSeconds();

      setValue(seconds);
    };

    const intervalId = setInterval(checkTimeAndUpdateValue, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [period]);

  return value;
};
