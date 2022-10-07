import { Route, Routes } from "react-router-dom";
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Stock from './components/Stock';
import './App.css';

function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      {
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stock/:symbol" element={<Stock />} />
            <Route path="/stock" element={<Dashboard />} />
          </Routes>
        </>
      }
    </div>
  );
}

export default App;
