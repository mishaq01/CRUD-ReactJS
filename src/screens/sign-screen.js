import React, { useState } from "react";

import "../css/signin.css";

const SignInPage = () => {
  const [formValue, updateFormvalue] = useState({
    mail: "",
    pass: "",
    gender: "",
    fav: [],
  });

  const inputValue = (event) => {
    if (event.target.id === "fav") {
      if (event.target.checked) {
        formValue.fav.push(event.target.value);
      } else {
        const idx = formValue.fav.indexOf(event.target.value);
        formValue.fav.splice(idx, 1);
      }
    } else {
      updateFormvalue({ ...formValue, [event.target.id]: event.target.value });
    }
  };

  const submitValue = () => {
    console.log(formValue);
  };

  return (
    <div>
      <h2>Sign In Page</h2>
      <div className="spaceDown">
        <label className="labelField">Email :</label>
        <input
          id="mail"
          type="text"
          placeholder="Enter email"
          onChange={inputValue}
        ></input>
      </div>
      <div className="spaceDown">
        <label className="labelField">Password :</label>
        <input
          id="pass"
          type="password"
          placeholder="Enter password"
          onChange={inputValue}
        ></input>
      </div>
      <div className="spaceDown">
        <label className="labelField">Gender :</label>
        <input
          id="gender"
          type="radio"
          name="gen"
          value="male"
          onChange={inputValue}
        />
        Male
        <input
          id="gender"
          type="radio"
          name="gen"
          value="female"
          onChange={inputValue}
        />
        Female
      </div>
      <div className="spaceDown">
        <label className="labelField">Hobbies :</label>
        <input id="fav" type="checkbox" value="cricket" onChange={inputValue} />
        Cricket
        <input
          id="fav"
          type="checkbox"
          value="football"
          onChange={inputValue}
        />
        Football
        <input
          id="fav"
          type="checkbox"
          value="volleyball"
          onChange={inputValue}
        />
        Volleyball
      </div>
      <div>
        <button onClick={() => submitValue()}>Login</button>
      </div>
    </div>
  );
};

export default SignInPage;
