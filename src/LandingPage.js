import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPageStyle';

function LandingPage() {
    return (
        <div className="landing-page">
            <nav className="navbar">
                <Link to="/" className="navbar-brand">Company Name</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <div className="jumbotron">
                <h1>Welcome to Company Name</h1>
                <p>We are a company that specializes in making awesome products.</p>
                <button className="button button-primary">Learn More</button>
            </div>
            <div className="features">
                <div className="feature">
                    <h2>Feature 1</h2>
                    <p>Our products are known for their quality and reliability.</p>
                </div>
                <div className="feature">
                    <h2>Feature 2</h2>
                    <p>We offer excellent customer support and a 30-day money-back guarantee.</p>
                </div>
                <div className="feature">
                    <h2>Feature 3</h2>
                    <p>Our products are affordable and we offer financing options.</p>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2023 Company Name</p>
            </footer>
        </div>
    );
}

export default LandingPage;
