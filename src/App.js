import './App.css';

function App() {

  fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  });

  return (
    <div className="App">
      <button >Genarate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default App;
