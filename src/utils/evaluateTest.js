export function evaluateTest(questions, answers) {
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  const detailed = questions.map((q) => {
    const userAnswer = answers[q.id];

    if (!userAnswer || userAnswer.length === 0) {
      unattempted++;
      return { ...q, userAnswer, status: "Unattempted" };
    }

    const correctSet = new Set(q.correct);
    const userSet = new Set(
      Array.isArray(userAnswer) ? userAnswer : [userAnswer]
    );

    const isCorrect =
      correctSet.size === userSet.size &&
      [...correctSet].every((v) => userSet.has(v));

    if (isCorrect) {
      score += q.marks;
      correct++;
    } else {
      wrong++;
    }

    return {
      ...q,
      userAnswer,
      status: isCorrect ? "Correct" : "Wrong"
    };
  });

  return {
    score,
    correct,
    wrong,
    unattempted,
    total: questions.length,
    detailed
  };
}
