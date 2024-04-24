import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./screens/landing-screen";
import CrudOperationPage from "./screens/crud-operations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage></LandingPage>}></Route>
        <Route
          path="crud"
          element={<CrudOperationPage></CrudOperationPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
