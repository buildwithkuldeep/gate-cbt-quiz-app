export default function QuestionPalette({
  questions,
  answers,
  currentIndex,
  onJump
}) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {questions.map((q, index) => {
          const attempted = answers[q.id];
          const active = index === currentIndex;

          return (
            <button
              key={q.id}
              onClick={() => onJump(index)}
              className={`h-10 rounded-lg font-semibold transition
                ${
                  active
                    ? "border-2 border-blue-600"
                    : "border"
                }
                ${
                  attempted
                    ? "bg-green-500 text-white"
                    : "bg-white dark:bg-gray-800"
                }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {/* LEGEND */}
      <div className="text-sm space-y-2">
        <Legend color="bg-green-500" label="Attempted" />
        <Legend color="bg-white dark:bg-gray-800 border" label="Not Attempted" />
        <Legend color="border-2 border-blue-600" label="Current" />
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-4 h-4 rounded ${color}`}></span>
      <span>{label}</span>
    </div>
  );
}
