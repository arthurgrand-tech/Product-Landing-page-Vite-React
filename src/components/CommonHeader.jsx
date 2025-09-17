import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./CommonHeader.css";
import timesheetlogo from "./images/timesheet-logo.png";

function CommonHeader() {
  const navigate = useNavigate();  // Changed variable name from navi to navigate for clarity

  const changePage = () => {
    navigate("/request-demo");
  };

  return (
    <div className="top-landing-main">
      <div className="top-landing-head-1 d-flex justify-content-between">
        <div className="top-logo-main">
          <img className="top-logo-img" src={timesheetlogo} alt="Logo" />
        </div>

        <div className="navlist">
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/aboutus" className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => (isActive ? "active" : "")}>
            Features
          </NavLink>
          <NavLink to="/contactus" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact Us
          </NavLink>
          <div className="top-right-btn">
            <a className="login-btn" href="http://192.168.1.4/home" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </div>

          <button onClick={changePage} className="request-demo-btn">
            Request Demo
          </button>






        </div>
      </div>
    </div>
  );
}

export default CommonHeader;
