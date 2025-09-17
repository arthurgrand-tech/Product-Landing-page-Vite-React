import React from "react";
import "./Contactus.css";
import { Helmet } from "react-helmet-async";
import logo from "./images/AGTlogo.png";
import { NavLink } from "react-router-dom";

function Contactus() {
  return (
    <div className="landing-main text-center">
      <Helmet>
        <title>Contact Us - AGT</title>
        <meta name="description" content="Get in touch with AGT. Contact us for inquiries and support." />
        <meta name="keywords" content="Contact, Support, Help, AGT, Customer Service" />
        <meta name="author" content="AGT" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Contact Us - AGT" />
        <meta property="og:description" content="Reach out to AGT for any questions or support needs." />
        <meta property="og:image" content="https://yourwebsite.com/contactus-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/contact-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - AGT" />
        <meta name="twitter:description" content="Need assistance? Contact AGT for support and inquiries." />
        <meta name="twitter:image" content="https://yourwebsite.com/contactus-image.jpg" />
      </Helmet>

      <div className="mb-5">
        <h1 className="headline">
          <span>Contact Us</span> - Page Under Progress
        </h1>
        <p className="sub-text">
          We are working on this page. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}

export default Contactus;
