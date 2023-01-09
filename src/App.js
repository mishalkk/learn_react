import './App.css';

function App() {
  const age = 17;

  return (
    <div className="App">
      {age >= 18 ? <h1>Over AGED</h1> : <h1>Under Aged</h1>}
    </div>
  );
}

export default App;
