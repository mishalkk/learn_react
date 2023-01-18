import './App.css';

function App() {
  const users = [
    {name:"Mugen", age:21},
    {name:"Kusho", age:25},
    {name:"Pedro", age:30}
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return (
          <User name={user.name} age={user.age}/>
        );
      })}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  )
}
export default App;
