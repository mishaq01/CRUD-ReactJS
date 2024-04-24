import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const [myEmail, updateMyEmail] = useState("");
  const [emailList, updateEmailList] = useState([]);

  const handleEmail = (event) => {
    updateMyEmail(event.target.value);
  };

  const addEmail = () => {
    updateEmailList([...emailList, myEmail]);
  };

  const email = emailList.map((value, index) => {
    return <h1 key={index}>{value}</h1>;
  });

  return (
    <div>
      <h1>Landing Page.</h1>
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={handleEmail}
      ></input>
      <button onClick={() => addEmail()}>Add</button>
      {email}

      <NavLink to={"/signup"}>SignUp</NavLink>
      <NavLink to={"/user"}>Go to User screen</NavLink>
      <NavLink to={"/node-api"}>Go to api page</NavLink>
      <NavLink to={"/crud"}>Goto crud page</NavLink>
    </div>
  );
};

export default LandingPage;
