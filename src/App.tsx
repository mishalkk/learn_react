import React, { useState } from 'react';
import './App.css';
import { Country, Person } from './components/Person';

function App() {
  // const [name, setName] = useState<string>("");

  return (
    <div className="App">
      <Person name="Morty" email="morty@gmail.com" age={16} isMarried={false} 
      friends={["Rick", "Jerry", "Summer", "Beth"]} 
      country={Country.Brazil} />
    </div>
  );
}

export default App;
