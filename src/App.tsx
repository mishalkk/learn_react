import React from 'react';
import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name="Morty" email="morty@gmail.com" age={16} isMarried={false} 
      friends={["Rick", "Jerry", "Summer", "Beth"]} />
    </div>
  );
}

export default App;
