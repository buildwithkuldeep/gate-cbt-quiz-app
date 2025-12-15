import { useReducer } from "react";
import questionsData from "../data/questions.json";
import QuestionCard from "../components/QuestionCard";
import { quizReducer, initialState } from "../hooks/useQuizReducer";

export default function Quiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const question = questionsData.questions[state.currentIndex];

  const handleAnswer = (answer) => {
    const prev = state.answers[question.id] || [];
    const updated =
      question.type === "NAT"
        ? answer
        : prev.includes(answer)
        ? prev.filter((a) => a !== answer)
        : [...prev, answer];

    dispatch({
      type: "SAVE_ANSWER",
      payload: { questionId: question.id, answer: updated }
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">
        Question {state.currentIndex + 1}
      </h2>

      <QuestionCard
        question={question}
        savedAnswer={state.answers[question.id]}
        onAnswer={handleAnswer}
      />

      <div className="flex justify-between mt-6">
        <button
          disabled={state.currentIndex === 0}
          onClick={() => dispatch({ type: "PREV" })}
          className="px-4 py-2 bg-gray-300"
        >
          Previous
        </button>

        <button
          disabled={state.currentIndex === questionsData.questions.length - 1}
          onClick={() => dispatch({ type: "NEXT" })}
          className="px-4 py-2 bg-blue-600 text-white"
        >
          Save & Next
        </button>
      </div>
    </div>
  );
}
