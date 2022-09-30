import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Price (props) {

const apikey = process.env.REACT_APP_API_KEY

const params = useParams()
const symbol = params.ssymbol

const url = ``


const [coin, setCoin] = useState ('null');

const getCoin = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getCoin();
}, []);

    return (
        <div>
        <h1>
            {coin?.asset_id_base}/{coin?.asset_id_quote}
        </h1>
        <h2>{coin?.rate}</h2>
        </div>
    )
}