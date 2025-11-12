import React, { useState } from "react";
import "./CustomerQuery.css";
import { Helmet } from "react-helmet-async";
// import logo from "./images/AGTlogo-white.png";

function CustomerQuery() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    mobileNumber: "",
    companyName: "",
    companySize: "",
    queryType: "Request Demo",
    comments: ""
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
    alert("Thank you for your query! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      workEmail: "",
      mobileNumber: "",
      companyName: "",
      companySize: "",
      queryType: "Request Demo",
      comments: ""
    });
  };

  return (
    <div className="customer-query-container">
      <Helmet>
        <title>Customer Query - Timesheet App | Contact Us for Solutions</title>
        <meta name="description" content="Have questions about our timesheet management solution? Contact us to learn how we simplify workforce management, enhance productivity, and ensure compliance." />
        <meta name="keywords" content="timesheet app, customer query, contact timesheet, workforce management, time tracking support, timesheet solution inquiry" />
        <meta name="author" content="Timesheet App" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Customer Query - Timesheet App" />
        <meta property="og:description" content="Discover how our timesheet solution simplifies workforce management and enhances productivity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/customer-query" />
        <meta property="og:image" content="https://yourwebsite.com/images/customer-query-og.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Query - Timesheet App" />
        <meta name="twitter:description" content="Get in touch with us to learn about our timesheet management solution." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/customer-query-twitter.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/customer-query" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Timesheet App",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "availableLanguage": "English"
            }
          })}
        </script>
      </Helmet>

      <main className="query-main-content">
        <div className="contactus-header">
        <header className="query-header">
          <h1 className="query-title">Customer Query</h1>
          <p className="query-subtitle">
            Discover how our timesheet solution simplifies workforce management, enhances productivity, and ensures compliance with ease.
          </p>
        </header>
        </div>

        <section className="query-content">
          {/* Left Section - What we offer */}
          <article className="offer-section">
            <p className="offer-label">DISCOVER OUR EDGE</p>
            <h2 className="offer-title">What we offer?</h2>

            <div className="offer-items">
              <div className="offer-item">
                <div className="offer-icon clock-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="offer-content">
                  <h3 className="offer-item-title">Seamless Time Tracking</h3>
                  <p className="offer-item-description">
                    Effortlessly log and manage work hours with an intuitive interface designed for accuracy and ease. Whether on desktop or mobile, track time in real-time or input past hours with just a few clicks.
                  </p>
                </div>
              </div>

              <div className="offer-item">
                <div className="offer-icon analytics-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <div className="offer-content">
                  <h3 className="offer-item-title">Detailed Analytics</h3>
                  <p className="offer-item-description">
                    Gain actionable insights with comprehensive reports and dashboards. Monitor team performance, track project progress, and analyze time utilization—all in one place, with data visualization that simplify decision-making.
                  </p>
                </div>
              </div>

              <div className="offer-item">
                <div className="offer-icon compliance-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="offer-content">
                  <h3 className="offer-item-title">Compliance Guaranteed</h3>
                  <p className="offer-item-description">
                    Ensure your timesheets meet industry standards and regulatory requirements effortlessly. Our platform is designed to align with compliance protocols, BI reducing risk and ensuring audit readiness.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Right Section - Form */}
          <aside className="form-section">
            <form onSubmit={handleSubmit} className="query-form" aria-label="Customer Query Form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Oliver"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="workEmail">Work Email</label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    placeholder="john@gmail.com"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Apple INC."
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Software Engineer"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companySize">Company Size</label>
                  <input
                    type="text"
                    id="companySize"
                    name="companySize"
                    placeholder="Chicago"
                    value={formData.companySize}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="queryType">Query Type</label>
                <select
                  id="queryType"
                  name="queryType"
                  value={formData.queryType}
                  onChange={handleChange}
                  required
                  aria-required="true"
                >
                  <option value="Request Demo">Request Demo</option>
                  <option value="Sales Inquiry">Sales Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  placeholder=""
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  aria-label="Enter your comments or questions"
                />
              </div>

              <button type="submit" className="submit-button" aria-label="Submit Query">
                Submit
              </button>
            </form>
          </aside>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer" role="contentinfo">
        <div className="footer-wrapper">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="footer-image">
                {/* <img className="footer-image1 mb-2" src={logo} alt="Arthur Grand Technologies Logo" /> */}
              </div>
              <p>
                Thirno s an IT services firm specializing in Digital Transformation initiatives for Federal, Commercial, State & local customers.
              </p>
              <nav className="social-links" aria-label="Social Media Links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Visit our Facebook page">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Visit our Instagram page">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="Visit our LinkedIn page">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter" aria-label="Visit our Twitter page">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="Visit our YouTube channel">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </nav>
            </div>

            <nav className="footer-links" aria-label="Footer Navigation">
              <div className="menu-column">
                <h3>Company</h3>
                <ul>
                  <li><a href="" target="_blank" rel="noopener noreferrer">About Us</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="footer-bottom">
            <p>Copyright © 2024 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CustomerQuery;