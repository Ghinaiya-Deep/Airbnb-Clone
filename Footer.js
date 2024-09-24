import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Airbnb</h2>
                </div>
                <nav className="footer-nav">
                    <ul className="footer-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="footer-copy">
                    <p>&copy; {currentYear} Airbnb. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
