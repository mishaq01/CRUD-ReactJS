import React from "react";
import axios from "axios";

const UserPage = () => {
  const loadUser = () => {
    const url = "https://reqres.in/api/users?page=2";

    axios
      .get(url)
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong");
      });
  };

  return (
    <div>
      <h1>Hello User</h1>
      <button onClick={() => loadUser()}>Click Me</button>
    </div>
  );
};

export default UserPage;
