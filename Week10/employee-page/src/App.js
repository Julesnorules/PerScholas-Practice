import './App.css';
import Header from './components/home_page/Header';
import SearchBar from './components/home_page/SearchBar';
// import EmployeeList from './components/home_page/EmployeeList';
import EmployeeListItem from './components/home_page/EmployeeListItem';
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
        img
        </div>
      </div>
      <div className="employee-page">
      </div>
      
    </div>
  );
}

