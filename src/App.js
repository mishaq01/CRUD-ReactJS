import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./screens/login-screeen";
import HomePage from "./screens/home-screen";
import ContactPage from "./screens/contact-screen";
import LandingPage from "./screens/landing-screen";
import SignInPage from "./screens/sign-screen";
import UserPage from "./screens/user-profile";
import NodeGetApiPage from "./screens/node-get-api";
import CrudOperationPage from "./screens/crud-operations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="" element={<LandingPage></LandingPage>}></Route>
        <Route path="signup" element={<SignInPage></SignInPage>}></Route>
        <Route path="user" element={<UserPage></UserPage>}></Route>
        <Route
          path="node-api"
          element={<NodeGetApiPage></NodeGetApiPage>}
        ></Route>
        <Route
          path="crud"
          element={<CrudOperationPage></CrudOperationPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
