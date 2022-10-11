import './App.css';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
// import employeesArr from './data'


export default function App() {

  return (
    <div className = "App">
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/employee/:id' element={<EmployeePage />} />
        </Routes>
        
      </div>

      
    </div>
  );
}

{/* <Routes>
        <Route path="/" element={<Main fishes={fishList} />} />
        <Route path="/species/:fishName" element={<Species />} />
      </Routes> */}