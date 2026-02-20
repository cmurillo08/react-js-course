import { useState } from 'react';
import OldCounter from './components/Counter/OldCounter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }


  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <OldCounter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
