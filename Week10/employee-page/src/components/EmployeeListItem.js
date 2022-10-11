import { Link } from "react-router-dom";

export default function EmployeeListItem (props) {

    return (
        <>
            <Link to ={`/employee/${props.id}`}> 
                <div className='employee-list-item-container'>                
                <img className='employeesImg' alt='employeesImg' src={`https://robohash.org/${props.id}?`} />
                <h1>{props.name}<p>{props.role}</p></h1>
                </div>
            </Link>
        </>
    );
}