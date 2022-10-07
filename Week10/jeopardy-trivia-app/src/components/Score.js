import { useState } from "react";
import CountSpan from "./CountSpan";
import ScoreButtons from "./ScoreButtons";

export default (props) => {

const [count, setCount] = useState(0);
    return (
        <>
            <CountSpan count={count} />
            <section>
            <ScoreButtons operator="Decrease" count={count} setCount={setCount} />
            <ScoreButtons operator="Increase" count={count} setCount={setCount} />
            <ScoreButtons operator="Reset" count={count} setCount={setCount} />
            </section>
        </>
    )
}