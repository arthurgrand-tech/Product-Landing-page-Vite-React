import React from "react";
import { Helmet } from "react-helmet-async";
import "./Features.css";

function Features() {
  return (
    <div className="landing-main text-center">
      <Helmet>
        <title>Features - AGT</title>
        <meta name="description" content="Explore AGT's powerful features designed to enhance your experience." />
        <meta name="keywords" content="AGT, Features, Cloud Solutions, DevOps, Technology" />
        <meta name="author" content="AGT" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Features - AGT" />
        <meta property="og:description" content="Discover the key features of AGT's solutions and how they benefit you." />
        <meta property="og:image" content="https://yourwebsite.com/features-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/features" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Features - AGT" />
        <meta name="twitter:description" content="Check out AGT's advanced features and services." />
        <meta name="twitter:image" content="https://yourwebsite.com/features-image.jpg" />
      </Helmet>

      <div className="mb-5">
        <h1 className="headline">
          <span>Feature</span> - Under Progress !!!
        </h1>
        <p className="sub-text">
          We are working on this page. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}

export default Features;
