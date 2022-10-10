import employeesArr from '../data';
import EmployeeListItem from './EmployeeListItem';

const list = employeesArr.map(( employee, i ) => {
    return (
        <div>
            <EmployeeListItem key={i} {...employee}
                img={employee[i].img} 
                name={employee[i].name} 
                role={employee[i].role}
            />
        </div> 
    );
}

