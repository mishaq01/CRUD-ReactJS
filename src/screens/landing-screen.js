import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page.</h1>
      <NavLink to={"/crud"}>Goto crud page</NavLink>
    </div>
  );
};

export default LandingPage;
