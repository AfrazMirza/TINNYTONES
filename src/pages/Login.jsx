import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({setUserLoggedIn}) {
  const [fromData, setFormData] = useState({ username: "", password: "" });

  const [userData, setUserData] = useState([
    {
      username: "afraz",
      password: "123",
    },
    {
      username: "manish123",
      password: "12345678",
    },
    {
      username: "ravi123",
      password: "12345678",
    },
  ]);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...fromData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user sign in");
    userData.forEach((user) => {
        if(user.username === fromData.username)
            if(user.password === fromData.password)
                setUserLoggedIn(true);
    })
    navigate("/");
  };

  return (
    <>
    <h2 className="login">Login</h2>
    <form onSubmit={handleSubmit} className="form">
      Username: <input
        type="text"
        name="username"
        className="username"
        value={fromData.email}
        onChange={handleChange}
      />
      Password: <input
        type="text"
        name="password"
        className="password"
        value={fromData.password}
        onChange={handleChange}
      />
      <input type="submit" className="submit"/>
    </form>
    </>
    
  );
}

export default Login;
