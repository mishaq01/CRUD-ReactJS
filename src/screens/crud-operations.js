import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/crud.css";

const CrudOperationPage = () => {
  useEffect(() => {
    loadRecord();
  }, []);

  const [recordList, updateRecordList] = useState([]);

  const [formData, updateFormData] = useState({
    username: "",
    email: "",
    age: "",
    location: "",
  });

  const getInputValue = (event) => {
    updateFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const createProfile = () => {
    const url = "http://localhost:5000/api/create/record";

    axios
      .post(url, formData)
      .then((response) => {
        console.log(response);
        alert("Profile has been created.");
        updateFormData({
          ...formData,
          username: "",
          email: "",
          age: "",
          location: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
    loadRecord();
  };

  const loadRecord = () => {
    const url = "http://localhost:5000/api/read/record";

    axios
      .get(url)
      .then((response) => {
        updateRecordList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateData = (value) => {
    updateFormData({
      ...formData,
      username: value.username,
      email: value.email,
      age: value.age,
      location: value.location,
      id: value.id,
    });
  };

  const updateProfile = () => {
    const url = "http://localhost:5000/api/update/record/" + formData.id;

    axios
      .put(url, formData)
      .then((response) => {
        console.log(response);
        alert("Update has been completed.");
        updateFormData({
          ...formData,
          username: "",
          email: "",
          age: "",
          location: "",
        });
        loadRecord();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteData = (id) => {
    const url = "http://localhost:5000/api/delete/record/" + id;

    axios
      .delete(url)
      .then((response) => {
        console.log(response);
        alert("Record has been deleted.");
        loadRecord();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const recordMap = recordList.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.username}</td>
        <td>{value.email}</td>
        <td>{value.age}</td>
        <td>{value.location}</td>
        <td>
          <button onClick={() => updateData(value)}>update</button>
          <button onClick={() => deleteData(value.id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>CRUD OPERATION PAGE.</h2>

      <div>
        <label className="profile">Enter your username</label>
        <input
          id="username"
          value={formData.username}
          type="text"
          placeholder="Enter Username"
          onChange={getInputValue}
        ></input>
      </div>
      <div>
        <label className="profile">Enter your email</label>
        <input
          id="email"
          value={formData.email}
          type="text"
          placeholder="Enter Email"
          onChange={getInputValue}
        ></input>
      </div>
      <div>
        <label className="profile">Enter your age</label>
        <input
          id="age"
          value={formData.age}
          type="text"
          placeholder="Enter Age"
          onChange={getInputValue}
        ></input>
      </div>
      <div>
        <label className="profile">Enter your location</label>
        <input
          id="location"
          value={formData.location}
          type="text"
          placeholder="Enter Location"
          onChange={getInputValue}
        ></input>
      </div>
      <button onClick={() => createProfile()}>Create User</button>
      <button onClick={() => updateProfile()}>Update User</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordMap}</tbody>
      </table>
    </div>
  );
};

export default CrudOperationPage;
