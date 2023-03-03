import './App.css';
import { Person } from './components/Person';

function App() {

  return (
    <div className="App">
      <Person name="Morty" email="morty@gmail.com" age={16} isMarried={false} 
      friends={["Rick", "Summer", "Jerry", "Beth"]} />
    </div>
  );
}

export default App;
