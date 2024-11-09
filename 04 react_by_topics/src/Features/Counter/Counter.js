import {useState} from "react";

const Counter=()=>{
const [count,setCount]= useState(1);

function increment() {
    // if (count>=0){
    // setCount(count+1); }
    setCount(count+1);
}

function decreament() {
    if(count>0){
    setCount(count-1);}
    // setCount(count-1);
}
function reset(){
    setCount(0);
}

    return(
        <div className="in">
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decreament}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Counter;