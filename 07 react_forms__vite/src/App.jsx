import React from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input type="text" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
