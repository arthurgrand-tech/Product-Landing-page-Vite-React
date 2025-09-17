import React, { useState, useEffect } from "react";
import "./Home.css"
import { ProjectCostIcon, BillingIcon, AnalysisIcon, EmployeeManagementIcon, ProjectManagementIcon, ResourceIcon } from './Icons/Icons';
import orangeimage from "./images/orange-png-landing.png"
import productimagetop from "./images/product-image1.png"
import featureimage from "./images/product-image2.png"
import demoVideo from "./Video/Timesheet-Demo.mp4"
import logo from "./images/AGTlogo-white.png"
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
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            rating: 5,
            name: "Daniel Janis",
            date: "10 Oct 2024",
            image: "../images/AGTlogo"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            rating: 5,
            name: "Christian Bendel",
            date: "20 Nov 2024",
            image: "/api/placeholder/50/50"
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
            rating: 5,
            name: "Daniel Janis",
            date: "10 Oct 2024",
            image: "/api/placeholder/50/50"
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
        // {
        //     name: "FREE",
        //     monthlyPrice: 0,
        //     yearlyPrice: 0,
        //     features: [
        //         "3 users (limited)",
        //         "1 projects (limited)",
        //         "Dashboard & quick links",
        //         "Personal & team timesheets",
        //         "Timesheet approvals",
        //         "My reports & team reports",
        //         "Project & task management",
        //         "Customer management",
        //         "Resource & group management",
        //         "Vendor management",
        //         "Leave policy management",
        //         "Audit logs",
        //         "In-app & email notifications",
        //         "Data export (Excel/PDF)",
        //         "Priority support (limited)",

        //     ]
        // },
        {
            name: "STANDARD",
            monthlyPrice: 5.99,
            yearlyPrice: 4.79,
            features: [
                "Unlimited users (3 users free)",
                "Dashboard & quick links",
                "Personal & team timesheets",
                "Timesheet approvals",
                "Timestamp based tracking",
                "My reports & team reports",
                "Project & task management",
                "Customer management",
                "Resource & group management",
                "Vendor management",
                "Leave policy management",
                "Audit logs",
                "In-app & email notifications",
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
            <section className="whychooseus-main">
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
            Our Pricing <span className="text-indigo-600">Plans</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
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
                        <span className="dollar">$</span>
                        <span className="amount">
                            {isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
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
            {/* <section className="pricing-container">
                <div className="pricing-header">
                    <h2 className="pricing-title text-2xl md:text-3xl font-semibold mb-3">
                        Our Pricing <span className="text-indigo-600">Plans</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
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
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="price">
                                <span className='dollar'>$</span>{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                            </div>
                            <div className="period">
                                {isYearly ? 'Per user / Month' : 'Per user / Month'}
                            </div>
                            <ul className="pricing-features-list">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Features Section */}
                <section className="features-section">
                <div className="features-header">
                    <h2>
                        Our <span className="text-primary">Features</span>
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



            {/* Success Stories Section */}
            <section className="success-section mb-5">
                <div className="success-header">
                    <h2>Our Success <span className="highlight">Stories</span></h2>
                </div>

                <div className="position-relative">
                    <div className="success-container">
                        <div className="d-flex navigation-buttons">
                            <button
                                className="navigation-btn prev"
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                className="navigation-btn next"
                                onClick={handleNext}
                                disabled={currentIndex >= testimonials.length - 3}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="cards-container">
                            <div
                                className="cards-slider"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`review-card ${index === currentIndex ? 'purple-bg' : 'white-bg'}`}
                                    >
                                        <p className="review-text">{testimonial.text}</p>

                                        <div className="rating">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <StarDisplay key={star} filled={star <= testimonial.rating} />
                                            ))}
                                        </div>

                                        <div className="reviewer-info">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="reviewer-img"
                                            />
                                            <div>
                                                <h4 className="reviewer-name">{testimonial.name}</h4>
                                                <p className="review-date">{testimonial.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        className="write-review-btn"
                        onClick={() => setShowReviewForm(true)}
                    >
                        Write Review
                    </button>
                </div>

                {showReviewForm && (
                    <div className="review-modal">
                        <div className="review-modal-content">
                            <form onSubmit={handleSubmitReview}>
                                <div className="modal-header">
                                    <h3>Write Your Review</h3>
                                    <button
                                        type="button"
                                        className="close-btn"
                                        onClick={() => setShowReviewForm(false)}
                                    >×</button>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name-input">Your Name</label>
                                    <input
                                        id="name-input"
                                        type="text"
                                        value={newReview.name}
                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="review-input">Your Review</label>
                                    <textarea
                                        id="review-input"
                                        rows="4"
                                        value={newReview.text}
                                        onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                                        required
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Rating</label>
                                    <RatingInput
                                        value={newReview.rating}
                                        onChange={(rating) => setNewReview({ ...newReview, rating: rating })}
                                    />
                                    {newReview.rating === 0 && (
                                        <small className="rating-hint">Please select a rating</small>
                                    )}
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="submit-btn">Submit Review</button>
                                    <button
                                        type="button"
                                        className="cancel-btn"
                                        onClick={() => setShowReviewForm(false)}
                                    >Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className='mt-4'>
                    <div className="footer-content">
                        <div className="footer-logo">
                            <div className="footer-image">
                                <img className="footer-image1 mb-2" src={logo} alt="Logo" />
                            </div>
                            <p>
                                Arthur Grand (AG) is an IT services firm specializing in Digital Transformation initiatives for Federal, Commercial, State & local customers.
                            </p>
                            <div className="social-links">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                                    <i className="fab fa-x-twitter"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>

                        <div className="footer-links">
                            <div className="menu-column">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="https://arthurgrand.com" target="_blank" rel="noopener noreferrer">Home</a></li>
                                    <li><a href="https://arthurgrand.com/products" target="_blank" rel="noopener noreferrer">Products</a></li>
                                    <li><a href="https://arthurgrand.com/features" target="_blank" rel="noopener noreferrer">Features</a></li>
                                    <li><a href="https://arthurgrand.com/resources" target="_blank" rel="noopener noreferrer">Resources</a></li>
                                </ul>
                            </div>

                            <div className="menu-column">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="https://arthurgrand.com/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
                                    <li><a href="https://arthurgrand.com/services" target="_blank" rel="noopener noreferrer">Services</a></li>
                                    <li><a href="https://arthurgrand.com/contact" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="menu-column">
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
                            </div>
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