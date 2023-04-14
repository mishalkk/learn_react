import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { CreatePost } from './Pages/createpost/create-post';
import { Login } from './Pages/login';
import { Main } from './Pages/main/main';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
