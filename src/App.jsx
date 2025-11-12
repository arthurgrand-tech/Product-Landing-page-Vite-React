
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Home"
import CommonHeader from "./components/CommonHeader"
import Features from "./components/Features"
import Aboutus from "./components/Aboutus"
import Contactus from "./components/CustomerQuery"



function App() {
  return (
    <Router>
      <CommonHeader />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/CustomerQuery" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;