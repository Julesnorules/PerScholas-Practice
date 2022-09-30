import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HomePage from './components/HomePage';
import EmployeeListItem from './components/EmployeeListItem';
import employeesArr from './data';


const employees = employeesArr.map((element, index) => {  
  return (
    
    <EmployeeListItem
      key={index}
      {...element}
    />
  )
});

export default function App() {
  return (
    <div className = "App">
      <div className="home-page">
        <div><Header /></div>
        <div><SearchBar employeesearch = {EmployeeListItem} /></div>
        <div>{employees}
        </div>
      </div>
      <div className="employee-page">
      </div>
      
    </div>
  );
}

