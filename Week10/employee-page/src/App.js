import './App.css';
import './style.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
import EmployeeList from './components/EmployeeList';
import EmployeeListItem from './components/EmployeeListItem'
import employeesArr from './data'


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
        <Header />
        <SearchBar employeesearch = {EmployeeListItem} />
        <EmployeeList />
      </div>
      <div className="employee-page">
        <Header />
        <EmployeeListItem />
      </div>
      
    </div>
  );
}

