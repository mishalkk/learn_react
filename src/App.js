import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { NoPage } from './pages/NoPage';


// install react router dom
  // npm install react-router-dom


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
