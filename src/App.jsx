import { useState } from 'react';
import './App.css';

export default function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function calcWordsCount() {
    const arrText = text.split(' ').filter((word) => word !== '');
    console.log(arrText.length);
  }

  return (
    <div>
      <h1>How fast do you type</h1>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Your text here"
      />
      <h4>Time remaining:???</h4>
      <button onClick={calcWordsCount}>start</button>
      <h2>Word count: ???</h2>
    </div>
  );
}
