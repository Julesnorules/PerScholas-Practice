import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Button(props) {

    const [questions, setQuestion] = useState({});

    const params = useParams();
    const { question } = params

    const getData = async () => {
        const response = await fetch(`http://jservice.io/api/random/${question}`);
        const data = await response.json();
        setQuestion(data[0]);
    }
    
    useEffect(() => {
        getData();
    }, [])

    return(
        <>
        <div>
            <Link>{questions?.question}</Link>
        </div>
        </>
    )
}