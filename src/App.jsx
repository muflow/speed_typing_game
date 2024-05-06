import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState('');
  const [countdown, setCountdown] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    setText(e.target.value);
  }

  function calcWordCount(words) {
    const wordsArr = words.split(' ').filter((word) => word !== '');
    return wordsArr.length;
  }

  useEffect(() => {
    if (isTimeRunning && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      endGame();
    }
  }, [countdown, isTimeRunning]);

  function startGame() {
    setIsTimeRunning(true);
    setCountdown(STARTING_TIME);
    setText('');
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calcWordCount(text));
  }

  return (
    <div>
      <h1>How fast do you type?</h1>

      <textarea
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
