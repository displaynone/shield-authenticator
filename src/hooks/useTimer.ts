import { useEffect, useState } from 'react';

export const useTimer = (period: number, ms = 1000) => {
  const [seconds, setSeconds] = useState(period);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setSeconds((date.getSeconds() % period) + date.getMilliseconds() / 1000);
    }, ms);

    return () => clearInterval(intervalId);
  }, [ms, period]);

  return seconds;
};
