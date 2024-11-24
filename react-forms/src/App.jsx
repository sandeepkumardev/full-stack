import React from "react";
import "./App.css";
const App = () => {
  const [name ,setName] =React.useState("");
  const [email ,setEmail] =React.useState("");
  const [password ,setPassword] =React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData ={ name, email, password};
  console.log(userData);
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit} className="usr-form">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default App;
