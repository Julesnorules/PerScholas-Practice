import React from 'react';
import employeeslist from'../data'

export default function EmployeeListItem (props) {

    // const employee = employeeslist.map((element, index) => {

    return (

        <div className='img-employee-list'>
            <img className='employeesImg' alt='employeesImg' src={`https://robohash.org/${props.id}?`} />
            <h1>{props.name}<p>{props.role}</p></h1>
        </div>
    );
}


//   return (
//     <Card
//       key={index}
//       {...element}
//     />
