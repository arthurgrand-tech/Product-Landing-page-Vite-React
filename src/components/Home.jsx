import React, { useState, useEffect } from "react";
import "./Home.css"
import { ProjectCostIcon, BillingIcon, AnalysisIcon, EmployeeManagementIcon, ProjectManagementIcon, ResourceIcon } from './Icons/Icons';
import orangeimage from "./images/orange-png-landing.png"
import productimagetop from "./images/product-image1.png"
import featureimage from "./images/product-image2.png"
import demoVideo from "./Video/Timesheet-Demo.mp4"
// import logo from "./images/AGTlogo-white.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    // Header state
    const [showVideo, setShowVideo] = useState(false);

    // Pricing state
    const [isYearly, setIsYearly] = useState(false);

    // Success stories state
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [newReview, setNewReview] = useState({
        text: '',
        rating: 0,
        name: '',
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        image: "/api/placeholder/50/50"
    });

const defaultTestimonials = [
  {
    text: "The platform has completely changed the way our team tracks time. Approvals are quick, and I can finally see where projects are really spending hours.",
    rating: 5,
    name: "Sarah Mitchell",
    date: "02 Aug 2024",
    image: "./images/reviewer-1.PNG"
  },
  {
    text: "Very easy to use! I was able to onboard my small team in less than a day. Reports are clear, and billing clients is so much smoother now.",
    rating: 5,
    name: "David Chen",
    date: "15 Sep 2024",
    image: "./images/reviewer-2.PNG"
  },
  {
    text: "I like the dashboard—it gives me a snapshot of everything without having to dig through multiple menus. Simple, clean, and reliable.",
    rating: 4,
    name: "Maria Gonzalez",
    date: "28 Sep 2024",
    image: "./images/reviewer-3.PNG"
  },
  {
    text: "Customer support is excellent! I had an issue with timesheet approvals, and they solved it within an hour. That gave me confidence to roll it out to the whole company.",
    rating: 5,
    name: "James Patel",
    date: "05 Oct 2024",
    image: "./images/reviewer-4.PNG"
  },
  {
    text: "We’ve tried a few time-tracking tools before, but this one is by far the most flexible. Projects and tasks are easy to manage, and my team actually likes using it.",
    rating: 5,
    name: "Emma Robinson",
    date: "12 Oct 2024",
    image: "./images/reviewer-5.PNG"
  }
];


    useEffect(() => {
        setTestimonials(defaultTestimonials);
    }, []);



    // Data arrays
    const whyChooseUsFeatures = [
        {
            icon: <ProjectCostIcon />,
            title: "Project Cost Control",
            description: "Timesheet tracking helps in controlling costs associated with a project by keeping track of the time spent."
        },
        {
            icon: <BillingIcon />,
            title: "Billing and Invoicing",
            description: "For businesses that bill clients based on hourly rates or project milestones, timesheet tracking provides accurate records of time."
        },
        {
            icon: <AnalysisIcon />,
            title: "Productivity Analysis",
            description: "Timesheet tracking helps identify how time is being spent across different tasks and projects."
        },
        {
            icon: <EmployeeManagementIcon />,
            title: "Employee Management",
            description: "Timesheet tracking can help managers monitor employee workload and performance."
        },
        {
            icon: <ProjectManagementIcon />,
            title: "Project Management",
            description: "Timesheet tracking allows project managers to monitor the time spent on different tasks and projects."
        },
        {
            icon: <ResourceIcon />,
            title: "Resource Allocation",
            description: "Understanding how time is spent can help in making better decisions about where to allocate staff and resources."
        }
    ];

    const featuresData = [
        {
            icon: "bi-shield-lock",
            title: "User Authentication",
            description: "A robust timesheet management system should start with secure user authentication and authorization features.",
            bgColor: "bg-danger-subtle"
        },
        {
            icon: "bi-people",
            title: "Timesheet Management",
            description: "The system should facilitate the creation and management of timesheets for various periods, such as daily, weekly, or monthly.",
            bgColor: "bg-warning-subtle"
        },
        {
            icon: "bi-list-task",
            title: "Project and Task Tracking",
            description: "To enhance productivity and project management, the timesheet system should allow for the tracking of time spent on specific projects.",
            bgColor: "bg-purple-subtle"
        }
    ];

    const pricingPlans = [
        {
            name: "FREE",
            monthlyPrice: 0.00,
            yearlyPrice: 0.00,
            features: [
                "Only 3 users free",
                "Dashboard & quick links",
                "Personal & team timesheets",
                "Timesheet approvals",
                "Timestamp based tracking",
                "My reports & team reports",
                "Project & task management",
                "Customer management",
                "Resource management",
                "Resource group management",
                "Vendor management",
                // "Leave policy management",
                "Audit logs",
                // "In-app & email notifications",
                "Data export (Excel/PDF)",
                "Priority support",
            ]
        },
                {
            name: "STANDARD",
            monthlyPrice: 2.99,
            yearlyPrice: 2.39,
            features: [
                "Unlimited users (3 users free)",
                "Dashboard & quick links",
                "Personal & team timesheets",
                "Timesheet approvals",
                "Timestamp based tracking",
                "My reports & team reports",
                "Project & task management",
                "Customer management",
                "Resource management",
                "Resource group management",
                "Vendor management",
                // "Leave policy management",
                "Audit logs",
                // "In-app & email notifications",
                "Data export (Excel/PDF)",
                "Priority support",
            ]
        }
    ];

    // Handlers for testimonials
    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (newReview.rating === 0) {
            alert('Please select a rating');
            return;
        }

        const updatedTestimonials = [...testimonials, newReview];
        setTestimonials(updatedTestimonials);
        setShowReviewForm(false);
        setNewReview({
            text: '',
            rating: 0,
            name: '',
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            image: "/api/placeholder/50/50"
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? 0 : prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex >= testimonials.length - 3 ? prevIndex : prevIndex + 1);
    };

    const StarDisplay = ({ filled }) => (
        <span className={`star ${filled ? 'active' : ''}`}>★</span>
    );

    const RatingInput = ({ value, onChange }) => {
        const handleStarClick = (rating) => {
            onChange(rating);
        };

        return (
            <div className="rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= value ? 'active' : ''}`}
                        onClick={() => handleStarClick(star)}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="home-container">
            {/* Header Section */}
            <section className="header-section">
                <div className="content-container">
                    <div className="leftright">
                        <div className="left-column mb-5">
                            <p className="subtitle">Track Time Effectively</p>
                            <h1 className="headline">
                                Simplify <span>Time Management</span> & Tracking
                            </h1>
                            <p className="description">
                                This modern software offers a comprehensive time management feature.
                                Employing effective time management strategies enables one to attain
                                remarkable results.
                            </p>
                            <button className="watch-demo-btn" onClick={() => setShowVideo(true)}>
                                Watch Demo
                            </button>
                        </div>

                        <div className="right-column d-flex justify-content-between">
                            <div>
                                <img className="product-img" src={productimagetop} alt="product image" />
                            </div>
                        </div>
                    </div>

                    <div className="orange-img">
                        <img className="" height={240} width={120} src={orangeimage} alt="" />
                    </div>

                    {showVideo && (
                        <div className="video-overlay" onClick={() => setShowVideo(false)}>
                            <div
                                className="video-modal"
                                role="dialog"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="close-video"
                                    onClick={() => setShowVideo(false)}
                                >
                                    ×
                                </button>
                                <video width="100%" controls autoPlay>
                                    <source src={demoVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                </div>
            </section>


            {/* Why Choose Us Section */}
            <section id="whychooseus-section" className="whychooseus-main">
                <div className="whychooseus-1">
                    <div className="why-choose-us-section">
                        <h2 className="section-title">
                            Why Choose <span className="highlight">Us</span>
                        </h2>
                        <p className="section-description">
                            Discover why our solution stands out from the rest and why it is the
                            ideal choice for your needs. Here are the key reasons why you should
                            select our platform:
                        </p>
                    </div>
                </div>

                <div className="whychooseus-2 mb-5">
                    <div className="features-grid">
                        {whyChooseUsFeatures.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}


            {/* Pricing Section */}
            <section className="pricing-container">
                <div className="pricing-header">
                    <h2 className="pricing-title text-2xl md:text-3xl font-semibold mb-3">
                        Our Pricing <span className="pricing-plan-text">Plans</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-5">
                        Choose a plan that works best for you. <br />
                        <span className="font-medium text-gray-800">Pay monthly for flexibility</span>
                        or <span className="font-semibold text-green-600">go yearly and save 20% every month</span> —
                        enjoy more value while unlocking all features.
                    </p>

                    <div className="toggle-container flex items-center justify-center gap-6 mt-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={!isYearly}
                                onChange={() => setIsYearly(false)}
                                className="accent-red-500 w-4 h-4"
                            />
                            <span className="text-gray-700 font-medium">Monthly</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isYearly}
                                onChange={() => setIsYearly(true)}
                                className="accent-indigo-600 w-4 h-4"
                            />
                            <span className="text-gray-700 font-medium">
                                Yearly <span className="ml-1 text-green-600 font-semibold">(Save 20%)</span>
                            </span>
                        </label>
                    </div>
                </div>

                <div className="plans-grid">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="plan-card">
                            <div className="plan-header">
                                <h3 className="plan-name">{plan.name}</h3>
                            </div>
                            <div className="plan-pricing">
                                <div className="price">
                                    <span className="price-amount">
                                        $ {isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                                    </span>
                                </div>
                                <div className="period">PER USER / MONTH</div>
                            </div>
                            <div className="plan-features">
                                <ul className="pricing-features-list">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
   
            {/* Features Section */}
            <section id="features-section" className="features-section">
                <div className="features-header">
                    <h2>
                        Our <span className="feature-text-primary">Features</span>
                    </h2>
                    <p>
                        Our timesheet solution is designed to streamline time tracking, improve accuracy, and enhance productivity across your organization.
                        Discover the comprehensive features that make managing time and attendance effortless.
                    </p>
                </div>

                <div className="features-container">
                    <div className="features-list">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className={`feature-icon ${feature.bgColor}`}>
                                    <i className={`bi ${feature.icon}`}></i>
                                </div>
                                <div className="feature-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="features-image">
                        <div className="image-placeholder">
                            <img className="feature-img" src={featureimage} alt="feature image" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer Section */}
            <footer className="footer">
                <div className='mt-4'>
                    <div className="footer-content">
                        <div className="footer-logo">
                            <div className="footer-image">
                                {/* <img className="footer-image1 mb-2" src={logo} alt="Logo" /> */}
                            </div>
                            <p>
                                Thirno is an IT services firm specializing in Digital Transformation initiatives for Federal, Commercial, State & local customers.
                            </p>
                            <div className="social-links">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter" aria-label="Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-links">
                            {/* <div className="menu-column">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="https://arthurgrand.com" target="_blank" rel="noopener noreferrer">Home</a></li>
                                    <li><a href="https://arthurgrand.com/products" target="_blank" rel="noopener noreferrer">Products</a></li>
                                    <li><a href="https://arthurgrand.com/features" target="_blank" rel="noopener noreferrer">Features</a></li>
                                    <li><a href="https://arthurgrand.com/resources" target="_blank" rel="noopener noreferrer">Resources</a></li>
                                </ul>
                            </div> */}

                            <div className="menu-column">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="" target="_blank" rel="noopener noreferrer">About Us</a></li>
                                    {/* <li><a href="https://arthurgrand.com/services" target="_blank" rel="noopener noreferrer">Services</a></li>
                                    <li><a href="https://arthurgrand.com/contact" target="_blank" rel="noopener noreferrer">Contact Us</a></li> */}
                                </ul>
                            </div>

                            {/* <div className="menu-column">
                                <h3>Legal</h3>
                                <ul>
                                    <li><a href="https://arthurgrand.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                                    <li><a href="https://arthurgrand.com/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                                    <li><a href="https://arthurgrand.com/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
                                </ul>
                            </div>

                            <div className="menu-column">
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="https://arthurgrand.com/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
                                    <li><a href="https://arthurgrand.com/faq" target="_blank" rel="noopener noreferrer">FAQ</a></li>
                                    <li><a href="https://arthurgrand.com/support" target="_blank" rel="noopener noreferrer">Support</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>Copyright © 2024 All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;




// import React, { useState, useEffect } from "react";
// import "./Home.css"
// import { ProjectCostIcon, BillingIcon, AnalysisIcon, EmployeeManagementIcon, ProjectManagementIcon, ResourceIcon } from './Icons/Icons';
// import orangeimage from "./images/orange-png-landing.png"
// import productimagetop from "./images/product-image1.png"
// import featureimage from "./images/product-image2.png"
// import demoVideo from "./Video/Timesheet-Demo.mp4"
// import logo from "./images/AGTlogo-white.png"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// function Home() {
//     // Header state
//     const [showVideo, setShowVideo] = useState(false);

//     // Pricing state
//     const [isYearly, setIsYearly] = useState(false);

//     // Success stories state
//     const [showReviewForm, setShowReviewForm] = useState(false);
//     const [testimonials, setTestimonials] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [newReview, setNewReview] = useState({
//         text: '',
//         rating: 0,
//         name: '',
//         date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
//         image: "/api/placeholder/50/50"
//     });

// const defaultTestimonials = [
//   {
//     text: "The platform has completely changed the way our team tracks time. Approvals are quick, and I can finally see where projects are really spending hours.",
//     rating: 5,
//     name: "Sarah Mitchell",
//     date: "02 Aug 2024",
//     image: "./images/reviewer-1.PNG"
//   },
//   {
//     text: "Very easy to use! I was able to onboard my small team in less than a day. Reports are clear, and billing clients is so much smoother now.",
//     rating: 5,
//     name: "David Chen",
//     date: "15 Sep 2024",
//     image: "./images/reviewer-2.PNG"
//   },
//   {
//     text: "I like the dashboard—it gives me a snapshot of everything without having to dig through multiple menus. Simple, clean, and reliable.",
//     rating: 4,
//     name: "Maria Gonzalez",
//     date: "28 Sep 2024",
//     image: "./images/reviewer-3.PNG"
//   },
//   {
//     text: "Customer support is excellent! I had an issue with timesheet approvals, and they solved it within an hour. That gave me confidence to roll it out to the whole company.",
//     rating: 5,
//     name: "James Patel",
//     date: "05 Oct 2024",
//     image: "./images/reviewer-4.PNG"
//   },
//   {
//     text: "We've tried a few time-tracking tools before, but this one is by far the most flexible. Projects and tasks are easy to manage, and my team actually likes using it.",
//     rating: 5,
//     name: "Emma Robinson",
//     date: "12 Oct 2024",
//     image: "./images/reviewer-5.PNG"
//   }
// ];


//     useEffect(() => {
//         setTestimonials(defaultTestimonials);
//     }, []);



//     // Data arrays
//     const whyChooseUsFeatures = [
//         {
//             icon: "bi-clipboard-data",
//             title: "Project Cost Control",
//             description: "Timesheet tracking helps in controlling costs associated with a project by keeping track of the time spent.",
//             bgColor: "#FF6B3D"
//         },
//         {
//             icon: "bi-receipt",
//             title: "Billing and Invoicing",
//             description: "For businesses that bill clients based on hourly rates or project milestones, timesheet tracking provides accurate records of time.",
//             bgColor: "#FFD93D"
//         },
//         {
//             icon: "bi-graph-up-arrow",
//             title: "Productivity Analysis",
//             description: "Timesheet tracking helps identify how time is being spent across different tasks and projects.",
//             bgColor: "#4ECDC4"
//         },
//         {
//             icon: "bi-people-fill",
//             title: "Employee Management",
//             description: "Timesheet tracking can help managers monitor employee workload and performance.",
//             bgColor: "#8B7FC4"
//         },
//         {
//             icon: "bi-kanban",
//             title: "Project Management",
//             description: "Timesheet tracking allows project managers to monitor the time spent on different tasks and projects.",
//             bgColor: "#95D5A7"
//         },
//         {
//             icon: "bi-diagram-3",
//             title: "Resource Allocation",
//             description: "Understanding how time is spent can help in making better decisions about where to allocate staff and resources.",
//             bgColor: "#FF6B93"
//         }
//     ];

//     const featuresData = [
//         {
//             icon: "bi-shield-lock",
//             title: "User Authentication",
//             description: "A robust timesheet management system should start with secure user authentication and authorization features.",
//             bgColor: "bg-danger-subtle"
//         },
//         {
//             icon: "bi-people",
//             title: "Timesheet Management",
//             description: "The system should facilitate the creation and management of timesheets for various periods, such as daily, weekly, or monthly.",
//             bgColor: "bg-warning-subtle"
//         },
//         {
//             icon: "bi-list-task",
//             title: "Project and Task Tracking",
//             description: "To enhance productivity and project management, the timesheet system should allow for the tracking of time spent on specific projects.",
//             bgColor: "bg-purple-subtle"
//         }
//     ];

//     const pricingPlans = [
//         {
//             name: "FREE",
//             monthlyPrice: 0.00,
//             yearlyPrice: 0.00,
//             features: [
//                 "Only 3 users free",
//                 "Dashboard & quick links",
//                 "Personal & team timesheets",
//                 "Timesheet approvals",
//                 "Timestamp based tracking",
//                 "My reports & team reports",
//                 "Project & task management",
//                 "Customer management",
//                 "Resource management",
//                 "Resource group management",
//                 "Vendor management",
//                 // "Leave policy management",
//                 "Audit logs",
//                 // "In-app & email notifications",
//                 "Data export (Excel/PDF)",
//                 "Priority support",
//             ]
//         },
//                 {
//             name: "STANDARD",
//             monthlyPrice: 2.99,
//             yearlyPrice: 2.39,
//             features: [
//                 "Unlimited users (3 users free)",
//                 "Dashboard & quick links",
//                 "Personal & team timesheets",
//                 "Timesheet approvals",
//                 "Timestamp based tracking",
//                 "My reports & team reports",
//                 "Project & task management",
//                 "Customer management",
//                 "Resource management",
//                 "Resource group management",
//                 "Vendor management",
//                 // "Leave policy management",
//                 "Audit logs",
//                 // "In-app & email notifications",
//                 "Data export (Excel/PDF)",
//                 "Priority support",
//             ]
//         }
//     ];

//     // Handlers for testimonials
//     const handleSubmitReview = (e) => {
//         e.preventDefault();
//         if (newReview.rating === 0) {
//             alert('Please select a rating');
//             return;
//         }

//         const updatedTestimonials = [...testimonials, newReview];
//         setTestimonials(updatedTestimonials);
//         setShowReviewForm(false);
//         setNewReview({
//             text: '',
//             rating: 0,
//             name: '',
//             date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
//             image: "/api/placeholder/50/50"
//         });
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => prevIndex === 0 ? 0 : prevIndex - 1);
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => prevIndex >= testimonials.length - 3 ? prevIndex : prevIndex + 1);
//     };

//     const StarDisplay = ({ filled }) => (
//         <span className={`star ${filled ? 'active' : ''}`}>★</span>
//     );

//     const RatingInput = ({ value, onChange }) => {
//         const handleStarClick = (rating) => {
//             onChange(rating);
//         };

//         return (
//             <div className="rating-input">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                     <span
//                         key={star}
//                         className={`star ${star <= value ? 'active' : ''}`}
//                         onClick={() => handleStarClick(star)}
//                     >
//                         ★
//                     </span>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div className="home-container">
//             {/* Header Section */}
//             <section className="header-section">
//                 <div className="header-content-wrapper">
//                     <div className="header-left">
//                         <div className="tag-badge">
//                             <span>Track Time Effectively</span>
//                         </div>
//                         <h1 className="header-title">
//                             Track time, manage projects, and boost team productivity—all in one platform.
//                         </h1>
//                         <p className="header-description">
//                             This modern software offers a comprehensive time management feature.
//                             Employing effective time management strategies enables one to attain
//                             remarkable results.
//                         </p>
//                         <button className="watch-demo-btn" onClick={() => setShowVideo(true)}>
//                             <i className="bi bi-play-circle-fill me-2"></i>
//                             Watch Demo
//                         </button>
//                     </div>

//                     <div className="header-right">
//                         <img className="header-illustration" src={productimagetop} alt="Timesheet Dashboard" />
//                     </div>

//                     <div className="decorative-shape">
//                         <img src={orangeimage} alt="" />
//                     </div>
//                 </div>

//                 {showVideo && (
//                     <div className="video-overlay" onClick={() => setShowVideo(false)}>
//                         <div
//                             className="video-modal"
//                             role="dialog"
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <button
//                                 className="close-video"
//                                 onClick={() => setShowVideo(false)}
//                             >
//                                 ×
//                             </button>
//                             <video width="100%" controls autoPlay>
//                                 <source src={demoVideo} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         </div>
//                     </div>
//                 )}
//             </section>


//             {/* Why Choose Us Section */}
//             <section id="whychooseus-section" className="whychooseus-section">
//                 <div className="section-header">
//                     <h2 className="section-title-main">Why Choose Us</h2>
//                     <p className="section-subtitle">
//                         Discover why our solution stands out and why it's the ideal choice for your needs.<br />
//                         Here are the key reasons why you should select our platform:
//                     </p>
//                 </div>

//                 <div className="features-grid-container">
//                     {whyChooseUsFeatures.map((feature, index) => (
//                         <div key={index} className="feature-card-new">
//                             <div className="feature-icon-circle" style={{ backgroundColor: feature.bgColor }}>
//                                 <i className={`bi ${feature.icon}`}></i>
//                             </div>
//                             <h3 className="feature-title-new">{feature.title}</h3>
//                             <p className="feature-description-new">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Pricing Section - KEPT UNCHANGED */}
//             <section className="pricing-container">
//                 <div className="pricing-header">
//                     <h2 className="pricing-title text-2xl md:text-3xl font-semibold mb-3">
//                         Our Pricing <span className="pricing-plan-text">Plans</span>
//                     </h2>
//                     <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-5">
//                         Choose a plan that works best for you. <br />
//                         <span className="font-medium text-gray-800">Pay monthly for flexibility</span>
//                         or <span className="font-semibold text-green-600">go yearly and save 20% every month</span> —
//                         enjoy more value while unlocking all features.
//                     </p>

//                     <div className="toggle-container flex items-center justify-center gap-6 mt-6">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input
//                                 type="checkbox"
//                                 checked={!isYearly}
//                                 onChange={() => setIsYearly(false)}
//                                 className="accent-red-500 w-4 h-4"
//                             />
//                             <span className="text-gray-700 font-medium">Monthly</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input
//                                 type="checkbox"
//                                 checked={isYearly}
//                                 onChange={() => setIsYearly(true)}
//                                 className="accent-indigo-600 w-4 h-4"
//                             />
//                             <span className="text-gray-700 font-medium">
//                                 Yearly <span className="ml-1 text-green-600 font-semibold">(Save 20%)</span>
//                             </span>
//                         </label>
//                     </div>
//                 </div>

//                 <div className="plans-grid">
//                     {pricingPlans.map((plan, index) => (
//                         <div key={index} className="plan-card">
//                             <div className="plan-header">
//                                 <h3 className="plan-name">{plan.name}</h3>
//                             </div>
//                             <div className="plan-pricing">
//                                 <div className="price">
//                                     <span className="price-amount">
//                                         $ {isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
//                                     </span>
//                                 </div>
//                                 <div className="period">PER USER / MONTH</div>
//                             </div>
//                             <div className="plan-features">
//                                 <ul className="pricing-features-list">
//                                     {plan.features.map((feature, idx) => (
//                                         <li key={idx}>{feature}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
   
//             {/* Features Section */}
//             <section id="features-section" className="features-section">
//                 <div className="features-header">
//                     <h2>
//                         Our <span className="feature-text-primary">Features</span>
//                     </h2>
//                     <p>
//                         Our timesheet solution is designed to streamline time tracking, improve accuracy, and enhance productivity across your organization.
//                         Discover the comprehensive features that make managing time and attendance effortless.
//                     </p>
//                 </div>

//                 <div className="features-container">
//                     <div className="features-list">
//                         {featuresData.map((feature, index) => (
//                             <div key={index} className="feature-item">
//                                 <div className={`feature-icon ${feature.bgColor}`}>
//                                     <i className={`bi ${feature.icon}`}></i>
//                                 </div>
//                                 <div className="feature-content">
//                                     <h3>{feature.title}</h3>
//                                     <p>{feature.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="features-image">
//                         <div className="image-placeholder">
//                             <img className="feature-img" src={featureimage} alt="feature image" />
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* Footer Section */}
//             <footer className="footer">
//                 <div className='mt-4'>
//                     <div className="footer-content">
//                         <div className="footer-logo">
//                             <div className="footer-image">
//                                 <img className="footer-image1 mb-2" src={logo} alt="Logo" />
//                             </div>
//                             <p>
//                                 Arthur Grand (AG) is an IT services firm specializing in Digital Transformation initiatives for Federal, Commercial, State & local customers.
//                             </p>
//                             <div className="social-links">
//                                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                                     </svg>
//                                 </a>
//                                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                                     </svg>
//                                 </a>
//                                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                                     </svg>
//                                 </a>
//                                 <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter" aria-label="Twitter">
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                                         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                                     </svg>
//                                 </a>
//                                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube">
//                                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                                         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="footer-links">
//                             <div className="menu-column">
//                                 <h3>Company</h3>
//                                 <ul>
//                                     <li><a href="https://arthurgrand.com/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="footer-bottom">
//                         <p>Copyright © 2024 All rights reserved</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default Home;