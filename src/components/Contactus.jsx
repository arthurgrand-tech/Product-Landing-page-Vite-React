// import React from "react";
// import "./Contactus.css";
// import { Helmet } from "react-helmet-async";
// import logo from "./images/AGTlogo.png";
// import { NavLink } from "react-router-dom";

// function Contactus() {
//   return (
//     <div className="landing-main text-center">
//       <Helmet>
//         <title>Contact Us - AGT</title>
//         <meta name="description" content="Get in touch with AGT. Contact us for inquiries and support." />
//         <meta name="keywords" content="Contact, Support, Help, AGT, Customer Service" />
//         <meta name="author" content="AGT" />

//         {/* Open Graph Meta Tags for Social Sharing */}
//         <meta property="og:title" content="Contact Us - AGT" />
//         <meta property="og:description" content="Reach out to AGT for any questions or support needs." />
//         <meta property="og:image" content="https://yourwebsite.com/contactus-image.jpg" />
//         <meta property="og:url" content="https://yourwebsite.com/contact-us" />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Contact Us - AGT" />
//         <meta name="twitter:description" content="Need assistance? Contact AGT for support and inquiries." />
//         <meta name="twitter:image" content="https://yourwebsite.com/contactus-image.jpg" />
//       </Helmet>

//       <div className="mb-5">
//         <h1 className="headline">
//           <span>Contact Us</span> - Page Under Progress
//         </h1>
//         <p className="sub-text">
//           We are working on this page. Stay tuned for updates!
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Contactus;

import React, { useState } from "react";
import "./Contactus.css";
import { Helmet } from "react-helmet-async";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for contacting us! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      message: ""
    });
  };

  return (
    <div className="contactus-container">
      <Helmet>
        <title>Talk To Sales - Timesheet App</title>
        <meta name="description" content="Get in touch with our team. Contact us for inquiries and support." />
        <meta name="keywords" content="Contact, Support, Sales, Timesheet, Customer Service" />
        <meta name="author" content="Timesheet App" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Talk To Sales - Timesheet App" />
        <meta property="og:description" content="Reach out to us for any questions or support needs." />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Talk To Sales - Timesheet App" />
        <meta name="twitter:description" content="Need assistance? Contact us for support and inquiries." />
      </Helmet>

      <div className="contactus-content">
        <h1 className="contactus-title">Talk To Sales</h1>
        <p className="contactus-subtitle">
          Have questions or need support? Get in touch with our team — we're here to help you anytime!
        </p>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter Your Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message / Optional</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message / Optional"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="footer-content-contact">
          <div className="footer-logo-section">
            <div className="footer-logo-contact">
              <span className="logo-icon">⏱️</span>
              <span className="logo-text">Timesheet App</span>
            </div>
            <p className="footer-description">
              Arthur Grand (AG) is an IT services firm specializing in Digital Transformation 
              initiatives for Federal, Commercial, State & local customers.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links-contact">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Contactus;
