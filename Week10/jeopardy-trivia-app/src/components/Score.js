import { useState } from "react";
import CountSpan from "./CountSpan";
import Button from "./Button";

export default (props) => {

    const [count, setCount] = useState(0);

    return (
        <>
            <CountSpan count={count} />
            <section>
            <Button operator="Decrease" count={count} setCount={setCount} />
            <Button operator="Increase" count={count} setCount={setCount} />
            <Button operator="Reset" count={count} setCount={setCount} />
            </section>
        </>
    )
}