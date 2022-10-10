import Header from '../components/Header';
import EmployeeList from "../components/EmployeeList";

export default function Home() {
    return (
    <>
        <Header title="Employees" />
        <EmployeeList />
    </>
    );
}