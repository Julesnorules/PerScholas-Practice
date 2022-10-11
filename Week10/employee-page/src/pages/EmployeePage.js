import Header from '../components/Header';
import EmployeeListItem from '../components/EmployeeListItem';
import { useParams } from "react-router-dom"
import employeesArr from '../data';

export default function EmployeePage(props) {

  const params = useParams();
  const { id } = params

  const employee = employeesArr.filter(( employee, i ) => {
    return (
        <div>
            <EmployeeListItem {...employee} key={i} />
        </div> 
    );
    })

    return (
    <>
        <Header />
        <EmployeeListItem employee={employee[id]}/>
        <div>{console.log(id)}</div>
    </>
    );
}