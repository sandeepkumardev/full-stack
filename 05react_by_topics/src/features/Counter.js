import { useState } from 'react'

const Counter = () => {
    // let count = 5;
    const [count, setCount] = useState(0)
    

    function increment() {
        // count = count + 1;
       setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    function reset(){
        setCount(0)
    }

    return(
        <div>
            <h1>counter</h1>

            <button onClick={increment}>+</button>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            
        </div>
    );
};
export default Counter;