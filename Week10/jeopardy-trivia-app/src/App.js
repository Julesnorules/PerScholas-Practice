import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Button from './components/Button';
import { useEffect, useState } from 'react';


function App() {

  const [questionsList, setQuestion] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('http://jservice.io/api/random');
      const data = await response.json();
      setQuestion(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main questions={questionsList} />} />
        <Route path="/questions/:questionNo" element={<Button />} />
      </Routes>
    </div>
  );
}

export default App;