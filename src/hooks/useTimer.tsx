import { useState, useEffect, useRef } from 'react';

const useTimer = (durationInHours: number) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const targetTime = new Date().getTime() + durationInHours * 60 * 60 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetTime - now;

      if (diff <= 0) {
        clearInterval(intervalRef.current as number);
        return;
      }

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };

    intervalRef.current = window.setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(intervalRef.current as number);
  }, [durationInHours]);

  return timeLeft;
};

export default useTimer;
