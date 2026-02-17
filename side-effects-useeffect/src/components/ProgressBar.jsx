import { useEffect, useState } from 'react';

export default function ProgresBar({timerValue, intervalValue}) {
  const [remaningTime, setRemaniningTime] = useState(timerValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaniningTime(prev => prev - intervalValue);
    }, intervalValue);

    return () => {
      clearInterval(interval)
    };
  }, []);

  return (
     <progress max={timerValue} value={remaningTime}/>
  )
}