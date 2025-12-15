import { useReducer, useState } from "react";
import questionsData from "../data/questions.json"; // or questions.json
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import QuestionPalette from "../components/QuestionPalette";
import useTimer from "../hooks/useTimer";
import { quizReducer, initialState } from "../hooks/useQuizReducer";
import { evaluateTest } from "../utils/evaluateTest";
import Result from "./Result";
import { useTheme } from "../context/ThemeContext";

export default function Quiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [result, setResult] = useState(null);
  const { darkMode, setDarkMode } = useTheme();

  /* ---------------- SUBMIT & RESTART ---------------- */

  const handleSubmit = () => {
    const evaluatedResult = evaluateTest(
      questionsData.questions,
      state.answers
    );
    setResult(evaluatedResult);
  };

  const handleRestart = () => {
    setResult(null);
    dispatch({ type: "RESET" });
  };

  /* ---------------- TIMER ---------------- */

  const timeLeft = useTimer(questionsData.duration, handleSubmit);
  const question = questionsData.questions[state.currentIndex];

  /* ---------------- ANSWER HANDLER ---------------- */

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

  /* ---------------- RESULT PAGE ---------------- */

  if (result) {
    return <Result result={result} onRestart={handleRestart} />;
  }

  /* ---------------- MAIN QUIZ UI ---------------- */

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* ================== TOP HEADER ================== */}
      <div className="sticky top-0 z-20 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="exam-container px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold">
              {questionsData.testName}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Question {state.currentIndex + 1} of{" "}
              {questionsData.questions.length}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Timer timeLeft={timeLeft} />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>

      {/* ================== MAIN BODY ================== */}
      <div className="exam-container flex gap-6 px-6 py-6">
        {/* -------- LEFT: QUESTION PALETTE -------- */}
        <aside className="w-1/4">
          <div className="exam-card p-4">
            <h3 className="font-semibold mb-4">Question Palette</h3>

            <QuestionPalette
              questions={questionsData.questions}
              answers={state.answers}
              currentIndex={state.currentIndex}
              onJump={(index) =>
                dispatch({ type: "JUMP_TO", payload: index })
              }
            />
          </div>
        </aside>

        {/* -------- RIGHT: QUESTION AREA -------- */}
        <main className="w-3/4 space-y-6">
          {/* QUESTION CARD */}
          <QuestionCard
            question={question}
            savedAnswer={state.answers[question.id]}
            onAnswer={handleAnswer}
          />

          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-between">
            <button
              onClick={() => dispatch({ type: "PREV" })}
              disabled={state.currentIndex === 0}
              className="exam-button-secondary disabled:opacity-50"
            >
              Previous
            </button>

            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                className="exam-button-danger"
              >
                Submit Test
              </button>

              <button
                onClick={() => dispatch({ type: "NEXT" })}
                disabled={
                  state.currentIndex ===
                  questionsData.questions.length - 1
                }
                className="exam-button-primary disabled:opacity-50"
              >
                Save & Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
