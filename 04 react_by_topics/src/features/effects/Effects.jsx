import React from 'react'
import {useEffect,useState} from "react";
const Effects = () => {
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const handleAdd = () => {
        setCount(count+1);
        localStorage.setItem("count",count+1);
    };
    const handleDelete = () => {
        setCount(count-1);
        localStorage.setItem("count",count-1);
    }

    const handleAdd1 = () => {
        setCount1(count1+1);
        
    };
    const handleDelete1 = () => {
        setCount1(count1-1);
        
    }

    useEffect(() => {
        const data = localStorage.getItem("count");
        if (data) setCount(parseInt(data));
    },[count]);
  
  return (
    <div>
        With UseEffect + Local storage <br/>
      <button onClick={handleAdd}>+</button>{count}<button onClick={handleDelete}>-</button>

      <hr/>
      Without UseEffect<br/>
    
      <button onClick={handleAdd1}>+</button>{count1}<button onClick={handleDelete1}>-</button>
    </div>
  )
}

export default Effects
