import React from "react";
import HomePage from "./pages/HomePage";
import Predict from "./pages/Predict";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </>
  );
};

export default App;
