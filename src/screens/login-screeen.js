import React from "react";
import { NavLink } from "react-router-dom";

import "../css/login.css";

const LoginPage = () => {
  const pringMessage = () => {
    alert("Welcome to ReactJS...");
  };

  const captureEvent = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1 className="heading">Login Page</h1>
      <NavLink to="/home">go to home page</NavLink>
      <button onClick={() => pringMessage()}>Print</button>
      <label>Enter Message : </label>
      <input
        type="text"
        placeholder="Enter your message"
        onChange={captureEvent}
      ></input>
    </div>
  );
};

export default LoginPage;
