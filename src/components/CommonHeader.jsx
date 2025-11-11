import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./CommonHeader.css";
import timesheetlogo from "./images/timesheet-logo.png";

function CommonHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/home") {
      navigate("/home");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleContactUs = () => {
    navigate("/CustomerQuery");
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
          
          <button 
            onClick={() => scrollToSection("whychooseus-section")} 
            className="nav-link-button"
          >
            Why Choose Us
          </button>
          
          <button 
            onClick={() => scrollToSection("features-section")} 
            className="nav-link-button"
          >
            Product Features
          </button>
          
          <button 
            onClick={handleContactUs}
            className={`contact-us-btn ${location.pathname === "/CustomerQuery" ? "active" : ""}`}
          >
            Contact Us
          </button>
          
          <div className="top-right-btn">
            <a className="login-btn" href="http://192.168.1.4/home" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonHeader;