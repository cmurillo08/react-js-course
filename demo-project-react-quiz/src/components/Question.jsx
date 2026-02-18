import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answer.jsx";

const TIMER = 10000;
const INTERVAL_TIMER = 100;

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={TIMER}
        intervalValue={INTERVAL_TIMER}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answer
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
