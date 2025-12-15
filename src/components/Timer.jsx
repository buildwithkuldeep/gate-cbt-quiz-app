export default function Timer({ timeLeft }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-black text-white px-4 py-2 rounded font-semibold">
      Time Left: {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}
