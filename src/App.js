import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        <User name="Pedro" age={25} mail="pedro@gmail.com" />
        <User name="Mishal" age={17} mail="mishal@gmail.com" />
      </div>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.mail}</h1>
    </div>
  );
}
export default App;
