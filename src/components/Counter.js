import {useState} from "react";
import "../index.css";
function Counter() {
    const [count,setcount] = useState(0)

    function handleinc() {
        setcount(count+1)
    }
    
    function handledec() {
        setcount(count-1)
    }
    return(
        <div className="counter">
            <h1 className="heading">Counter Application</h1>
            <h1 className="count">{count}</h1>
            <div className="counter-button">
                <button onClick={handleinc}>Increment</button>
                <button onClick={handledec}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter