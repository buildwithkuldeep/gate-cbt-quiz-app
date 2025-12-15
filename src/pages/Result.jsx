import { useTheme } from "../context/ThemeContext";

export default function Result({ result, onRestart }) {
  const { darkMode, setDarkMode } = useTheme();

  if (!result) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Test Result</h1>

        <div className="flex gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          <button
            onClick={onRestart}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            🔁 Reattempt Test
          </button>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <SummaryCard title="Correct" value={result.correct} color="green" />
        <SummaryCard title="Wrong" value={result.wrong} color="red" />
        <SummaryCard title="Unattempted" value={result.unattempted} color="gray" />
        <SummaryCard title="Score" value={result.score} color="blue" />
      </div>

      {/* QUESTION REVIEW */}
      <div className="space-y-6">
        {result.detailed.map((q, index) => (
          <div
            key={q.id}
            className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded p-5"
          >
            <div className="flex justify-between mb-2">
              <p className="font-semibold text-lg">
                Q{index + 1}. {q.question}
              </p>
              <StatusBadge status={q.status} />
            </div>

            <p className="text-sm">
              <strong>Your Answer:</strong>{" "}
              {q.userAnswer?.toString() || "Not Answered"}
            </p>

            <p className="text-sm">
              <strong>Correct Answer:</strong>{" "}
              {q.correct.toString()}
            </p>

            {q.explanation && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded text-sm">
                <strong>Explanation:</strong> {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- UI HELPERS ---------- */

function SummaryCard({ title, value, color }) {
  const colors = {
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  };

  return (
    <div className={`p-5 rounded border dark:border-gray-700 text-center ${colors[color]}`}>
      <p className="text-2xl font-bold">{value}</p>
      <p className="uppercase text-sm tracking-wide">{title}</p>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Correct: "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200",
    Wrong: "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200",
    Unattempted: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
  };

  return (
    <span className={`px-3 py-1 rounded text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
}
