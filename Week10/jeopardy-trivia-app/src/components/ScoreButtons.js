export default (props) => {

    const handleFunc = () => {
        if (props.operator === "Increase") {
            props.setCount(props.count + 100)
        } else if (props.operator === "Decrease") {
            props.setCount(props.count - 100)
        } else if (props.operator === "Reset") {
            props.setCount(props.count === 0) 
        }
    }

    return (
        <button onClick={handleFunc}>{props.operator}</button>
    )
}