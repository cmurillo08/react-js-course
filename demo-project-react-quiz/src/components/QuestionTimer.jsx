import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, intervalValue, onTimeout, mode }) {
  const [remaningTime, setRemaniningTime] = useState(timeout);
  // Initiate the timer (10 secs, 1 sec, 2 secs)
  // 10 secs avaiable to select an answer
  // 1 sec once answer is selected
  // 2 secs once answer is evaluated
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

  return <progress 
    id="question-time" 
    max={timeout} 
    value={remaningTime}
    className={mode}
  />;
}
