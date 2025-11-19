import React from "react";
import "./Aboutus.css"
import { Helmet } from "react-helmet-async";

function Aboutus() {
  return (
    <div className="landing-main text-center">
      <Helmet>
        <title>About Us - AGT</title>
        <meta name="description" content="Learn more about our company, mission, and values." />
        <meta name="keywords" content="About Us, Company, Mission, Vision, Values" />
        <meta name="author" content="Your Company Name" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="About Us - Your Company Name" />
        <meta property="og:description" content="Discover our company's mission and values." />
        <meta property="og:image" content="https://yourwebsite.com/aboutus-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Your Company Name" />
        <meta name="twitter:description" content="Learn more about our mission, vision, and values." />
        <meta name="twitter:image" content="https://yourwebsite.com/aboutus-image.jpg" />
      </Helmet>

      <div className="mb-5">
        <h1 className="headline">
          <span>About Us</span> - Page Under Progress
        </h1>
        <p className="sub-text">
          We are working hard to bring you more information about our company. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}

export default Aboutus;

