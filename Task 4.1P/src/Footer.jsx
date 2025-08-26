// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          {/* Uncomment and update the src if you have a logo */}
          {/* <img src="/logo.png" alt="Site Logo" className="footer-logo" style={{ width: "80px", marginBottom: "1rem" }} /> */}
          <h2>Explore</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#questions">Questions</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
          </ul>
        </div>
        <div>
          <h2>Support</h2>
          <ul>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#help">Help</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h2>Stay connected</h2>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon fb" aria-label="Facebook"></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon tw" aria-label="Twitter"></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon ig" aria-label="Instagram"></a>
          </div>
        </div>
      </div>
      <div className="footer-mid">
        <span><b>DEV@Deakin 2025</b></span>
      </div>
      <div className="footer-bottom">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms</a>
        <a href="#code">Code of Conduct</a>
      </div>
    </footer>
  );
}

export default Footer;