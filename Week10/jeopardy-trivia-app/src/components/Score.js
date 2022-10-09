import { useState } from "react";
import CountSpan from "./CountSpan";
import ScoreButtons from "./ScoreButtons";


export default (props) => {

const [count, setCount] = useState(0);
    return (
        <>
            <CountSpan count={count} />
            <section>
            <ScoreButtons className="bd" operator="Decrease" count={count} setCount={setCount} />

            </section>
        </>
    )
}