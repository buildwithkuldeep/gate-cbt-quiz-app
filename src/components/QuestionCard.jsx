export default function QuestionCard({ question, savedAnswer, onAnswer }) {
  return (
    <div className="exam-card p-6 space-y-5">
      <p className="text-lg font-medium leading-relaxed">
        {question.question}
      </p>

      {question.type === "NAT" ? (
        <input
          type="number"
          value={savedAnswer || ""}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder="Enter numerical answer"
          className="w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700"
        />
      ) : (
        <div className="space-y-3">
          {question.options.map((opt) => {
            const checked = savedAnswer?.includes(opt);
            return (
              <div
                key={opt}
                onClick={() => onAnswer(opt)}
                className={`cursor-pointer p-4 rounded-lg border transition
                  ${
                    checked
                      ? "border-blue-600 bg-blue-50 dark:bg-blue-900/30"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  readOnly
                  className="mr-3"
                />
                {opt}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
