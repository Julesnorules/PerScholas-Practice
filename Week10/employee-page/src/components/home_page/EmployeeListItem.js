import React from 'react';

const EmployeeListItem = (props) => {
    return (
        <div className='employeeItem'> 
            <img alt='employeesImg' src={`https://robohash.org/${props.id}?`} />
            <h4>{props.name}</h4>
            <p>{props.role}</p>
        </div>
    );
}

export default EmployeeListItem;