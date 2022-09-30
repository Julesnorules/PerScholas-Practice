import './style.css';
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Womens from './pages/Womens';
import Mens from './pages/Mens';
import OnTheStreet from './pages/OnTheStreet';
import TheCatwalk from './pages/TheCatwalk';
import AdWatch from './pages/AdWatch';
import About from './pages/About';

export default function App () {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/womens" element={<Womens/>}/>
      <Route path="/mens" element={<Mens/>}/>
      <Route path="/onthestreet" element={<OnTheStreet/>}/>
      <Route path="/thecatwalk" element={<TheCatwalk/>}/>
      <Route path="/adwatch" element={<AdWatch/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
  );
}
