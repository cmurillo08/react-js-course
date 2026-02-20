import { useState, memo, useCallback, useMemo } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// memo() prevents unnecessary re-renders by comparing props
// If props haven't changed, the component won't re-render
// This is useful for optimizing performance when parent components re-render frequently
// Note: memo() only prevents re-renders caused by prop changes. Internal state changes
// (like useState updates) will still trigger re-renders, and child components will
// re-render if their props or internal state changes
const OldCounter = memo(function OldCounter({ initialCount }) {
  log('<Counter /> rendered', 1);
  // useMemo() memoizes the result of the isPrime calculation
  // It only recalculates when dependencies change (initialCount in this case)
  // This prevents unnecessary expensive calculations on every render
  // Note: Memoizes a computed value
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);
  const [counter, setCounter] = useState(initialCount);
  // Memoizes a function itself
  // Returns the same function reference across renders (if dependencies don't change)
  // Used to prevent child components from re-rendering when they receive function props
  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  )});

export default OldCounter;