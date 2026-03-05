import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function App() {
  const [buttonclick, setButtonClick] = useState('');

  function clearInput() {
    setButtonClick('');
  }

  function clearChar() {
    setButtonClick((prev) => prev.slice(0, -1));
  }
  function calculateResult() {
    try {
      const result = eval(buttonclick);
      setButtonClick(result.toString());
    } catch {
      setButtonClick('Error');
    }
  }

  function handleClick(value) {
    setButtonClick((prev) => prev + value);
  }
  return (
    <>
      <div className="container">
        <div className="calculator-container">
          <div className="calculator-input">
            <input type="text" value={buttonclick} disabled />
          </div>
          <div className="buttons">
            <button onClick={clearInput}>AC</button>
            <button onClick={clearChar}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button onClick={() => handleClick(0)}>0</button>
            <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button onClick={() => handleClick(4)}>4</button>
            <button onClick={() => handleClick(5)}>5</button>
            <button onClick={() => handleClick(6)}>6</button>
            <button onClick={() => handleClick(7)}>7</button>
            <button onClick={() => handleClick(8)}>8</button>
            <button onClick={() => handleClick(9)}>9</button>
            <button onClick={() => handleClick('/')}>/</button>
            <button onClick={() => handleClick('*')}>*</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={calculateResult}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
