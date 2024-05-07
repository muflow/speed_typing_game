import { useState, useEffect, useRef } from 'react';

export default function useWordGame(startingTime = 10) {
  const [text, setText] = useState('');
  const [countdown, setCountdown] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const textBoxRef = useRef(null);

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
    setCountdown(startingTime);
    setText('');
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calcWordCount(text));
  }

  return {
    wordCount,
    text,
    countdown,
    isTimeRunning,
    textBoxRef,
    handleChange,
    startGame,
  };
}
