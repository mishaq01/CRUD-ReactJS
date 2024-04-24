import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/contact">goto contact page</NavLink>
    </div>
  );
};

export default HomePage;
