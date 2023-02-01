import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      <button onClick={() => {setShowText(!showText)}}>show/hide</button>
      {showText && <h1>{inputValue}</h1>}
    </div>
  );
}

export default App;
