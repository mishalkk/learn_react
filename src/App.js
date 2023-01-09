import './App.css';

function App() {
  const age = 17;
  const isGreen= true;

  return (
    <div className="App">
      {age >= 18 ? <h1>Over AGED</h1> : <h1>Under Aged</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>This Has Color</h1>

      {isGreen && <button>Go Green</button>}
    </div>
  );
}

export default App;
