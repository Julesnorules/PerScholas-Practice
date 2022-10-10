export default function EmployeeListItem (props) {

    return (
        <>
            <div className='img-employee-list'>
                <img className='employeesImg' alt='employeesImg' src={`https://robohash.org/${props.id}?`} />
                <h1>{props.name}<p>{props.role}</p></h1>
            </div>
        </>
    );
}