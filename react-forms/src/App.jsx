import React, { useRef } from "react";
import "./App.css";
const App = () => {

 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData= new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
   
    console.log({name , email , password});
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit} className="usr-form">
        <input type="text" placeholder="Name"  name="name"/>
        <input type="email" placeholder="Email" name="email" />
        <input type="text" placeholder="Password" name="password"/>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default App;
