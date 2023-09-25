import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../src/Page/Home";
// import About from "../src/Page/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Bookdemo from "./components/Bookyourslot";
// import Index from "../src/index";
const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        {/* <Index /> */}
        <Routes>
          {/* Define your routes here */}
          
          <Route path="/" element={<Home />} />?
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Book" element={<Bookdemo />} />
          {/* Add more routes as needed */}
        </Routes>
      </>
    </Router>
  );
};

export default App;
