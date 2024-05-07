import './App.css';
import useWordGame from './hooks/useWordGame';

export default function App() {
  const {
    wordCount,
    text,
    countdown,
    isTimeRunning,
    textBoxRef,
    handleChange,
    startGame,
  } = useWordGame(10);

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea
        ref={textBoxRef}
        disabled={!isTimeRunning}
        value={text}
        onChange={handleChange}
        placeholder="type here"
      />
      <h4>Time remaining: {countdown}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        start
      </button>
      <h2>Word count: {wordCount}</h2>
    </div>
  );
}
