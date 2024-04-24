import React, { useState } from "react";
import axios from "axios";

const NodeGetApiPage = () => {
  const [students, updateStudents] = useState([]);
  const [createForm, updateCreateForm] = useState({
    name: "",
  });

  const loadUsers = () => {
    const url = "http://localhost:5000/api/user/list";

    axios
      .get(url)
      .then((response) => {
        updateStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const studentMap = students.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.name}</td>
      </tr>
    );
  });

  const getInputValue = (event) => {
    updateCreateForm({ ...createForm, [event.target.id]: event.target.value });
  };

  const createUserAccount = () => {
    const url = "http://localhost:5000/api/user/create";

    axios
      .post(url, createForm)
      .then((request, response) => {
        alert(response.data);
        updateCreateForm({ ...createForm, name: "" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <label>Enter your name :</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={createForm.name}
          onChange={getInputValue}
        ></input>
      </div>
      <div>
        <button onClick={() => createUserAccount()}>Create User</button>
      </div>
      <button onClick={() => loadUsers()}>Load Users</button>
      <table>
        <h1>{studentMap}</h1>
      </table>
    </div>
  );
};

export default NodeGetApiPage;
