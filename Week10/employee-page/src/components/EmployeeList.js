import React from 'react';
import EmployeeListItem from './home_page/EmployeeListItem';

const EmployeeList = (props) => {
    return (
        <div>
            {
                props.employees.map((employee,i) => {
                    return (
                        <EmployeeListItem key={i} 
                        img={employee[i].img} 
                        name={employee[i].name} 
                        role={employee[i].role}
                        />
                    );
                })
            }
        </div> 
    );
}

export default EmployeeList;