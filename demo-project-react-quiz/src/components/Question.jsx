import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answer.jsx";
import { useState } from "react";
import QUESTIONS from "../questions.js";

const TIMER = 10000;
const INTERVAL_TIMER = 100;

export default function Question({
  index,
  onSelectAnswer,
  onSkipAnswer,
}) {

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  let timer = TIMER;

  // 1 second timer when answer is selected
  if (answer.selectedAnswer) {
    timer = 1000;
  }

  // 2 seconds timer displaying correct/wrong stlying
  if (answer.isCorrect != null) {
    timer = 2000;
  }

  function handleSelectAnswer(value) {
    setAnswer({
      selectedAnswer: value,
      isCorrect: null
    });

    // 1 second timer when answer is selected
    setTimeout(() => {
      setAnswer({
        selectedAnswer: value,
        isCorrect: QUESTIONS[index].answers[0] === value
      });

      // 2 seconds timer displaying correct/wrong stlying
      setTimeout(() => {
        onSelectAnswer(value);
      }, 2000);
    }, 1000);
  }

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        intervalValue={INTERVAL_TIMER}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answer
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
