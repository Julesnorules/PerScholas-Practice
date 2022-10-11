import employeesArr from '../data';
import EmployeeListItem from './EmployeeListItem'

const employee = employeesArr.map(( employee, i ) => {
    return (
        <div>
            <EmployeeListItem {...employee} key={i} />
        </div> 
    );
})

export default function employeesList() {
    return (
        <div>{employee} 
        </div>
    )
}
