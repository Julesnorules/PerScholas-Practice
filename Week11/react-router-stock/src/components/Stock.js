import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Stock () {

    const [stock, setStock] = useState([]);

    // const params = useParams();
    // const { stockName } = params

    // const { stockName } = useParams();

    const getData = async () => {
        const response = await fetch(`https://financialmodelingprep.com/`);
        const data = await response.json();
        setStock(data[0]);
    }

    // useEffect(() => {
    //     getData();
    // }, [])

    return (
        <>
            <h1>{stock}</h1>
        </>
    )
}