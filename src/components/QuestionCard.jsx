export default function QuestionCard({ question, savedAnswer, onAnswer }) {
  if (question.type === "NAT") {
    return (
      <div>
        <p className="font-semibold mb-2">{question.question}</p>
        <input
          type="number"
          value={savedAnswer || ""}
          onChange={(e) => onAnswer(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
    );
  }

  return (
    <div>
      <p className="font-semibold mb-4">{question.question}</p>

      {question.options.map((opt) => (
        <label key={opt} className="block mb-2">
          <input
            type="checkbox"
            checked={savedAnswer?.includes(opt) || false}
            onChange={() => onAnswer(opt)}
            className="mr-2"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
