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
        <div>
          {user.name} {user.age}
        </div>
        );
      })}
    </div>
  );
}

export default App;
