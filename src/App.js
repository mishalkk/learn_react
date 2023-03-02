import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { NoPage } from './pages/NoPage';
import { Navbar } from './Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// install react router dom
  // npm install react-router-dom


function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        // do not reload page when switching windows
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
