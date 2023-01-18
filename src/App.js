import './App.css';
import { User, Planet } from './User';

function App() {
  const users = [
    {name:"Mugen", age:21},
    {name:"Kusho", age:25},
    {name:"Pedro", age:30}
  ];

  const planets = [
    {name:"Mars", isGasPlanet: false},
    {name:"Earth", isGasPlanet: false},
    {name:"Jupiter", isGasPlanet: true},
    {name:"Venus", isGasPlanet: false},
    {name:"Neptune", isGasPlanet: true},
    {name:"Uranus", isGasPlanet: true},
  ]

  return (
    <div className="App">
      {users.map((user, key) => {
        return (
          <User name={user.name} age={user.age} />
        );
      })}
      {planets.map((planet, key) => {
        return (
          <Planet name={planet.name} isGasPlanet={planet.isGasPlanet} />
        );
      })}
    </div>
  );
}

export default App;
