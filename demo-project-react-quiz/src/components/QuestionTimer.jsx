import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, intervalValue, onTimeout }) {
  const [remaningTime, setRemaniningTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    
    return () => {
      clearTimeout(timer);
    }
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaniningTime((prev) => prev - intervalValue);
    }, intervalValue);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remaningTime} />;
}
