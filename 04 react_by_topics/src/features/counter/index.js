import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function dencrement() {
    setCount(count - 1);
  }

  function rst() {
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={dencrement}>Decrement</button>
      <button onClick={rst}>Reset</button>
    </div>
  );
};
export default Counter;
