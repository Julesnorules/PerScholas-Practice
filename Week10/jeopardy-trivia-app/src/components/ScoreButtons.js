export default (props) => {

    const increase = () => {
        props.setCount(props.count + 100)
    }

    const decrease = () => {
        props.setCount(props.count - 100)
    }

    const reset = () => {
        props.setCount(props.count - props.count)
    }

    return (
        <div className="btn-container">
        <button className="bd" onClick={decrease}>Decrease</button>
        <button className="bi" onClick={increase}>Increase</button>
        <button className="br" onClick={reset}>Reset</button>
        </div>
        
    )
}