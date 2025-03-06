import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Information */}
        <div className="footer-brand">
          <h2 className="footer-header">DAY PILOT</h2>
          <p>
          Plan your day, own your goals
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/program" className="footer-link">Program</a></li>
            <li><a href="/about" className="footer-link">About Us</a></li>
           <li><a href="/login" className="footer-link">Login</a></li>
            <li><a href="/signin" className="footer-link">Sign In</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@daypilot.com</p>
          <p>Phone: +94 768350180</p>
          <p>Address: No.77, Flower Avenue, Colombo, Sri Lanka </p>
          <div className="footer-socials">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
         
          <p>&copy; 2025 DayPilot. © All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
