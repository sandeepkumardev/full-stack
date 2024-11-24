import React, { useRef } from "react";
import "./App.css";
const App = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
    })
    
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit} className="usr-form">
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="email" placeholder="Email"  ref={emailRef}/>
        <input type="text" placeholder="Password"  ref={passwordRef}/>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default App;
