// React
import React from "react";

// React DOM
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components
import Home from "./Components/Home";
import Basket from "./Components/Basket";

// Layour
import Header from "./Layout/Header";

// React Router

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  );
};

export default App;
