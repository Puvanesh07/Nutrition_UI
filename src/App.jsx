// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Page/Home';
import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import Bookyourslot from "./components/Bookyourslot";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Redirect to login page if user tries to access /google-login */}
          <Route path="/google-login" element={<Navigate to="/login" />} />
          <Route path="/bookyourslot" element={<Bookyourslot />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
