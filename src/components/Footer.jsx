import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* 3 Column Grid */}
      <div className="footer-grid">

        {/* Column 1: Company Info */}
        <div className="footer-col company-info">
          <h3>Inara Architects & Interiors</h3>
          <p>Designing spaces that inspire and elevate your lifestyle. We specialize in architecture, interior design, project management, and landscaping solutions.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col quick-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/ourworks">Portfolio</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col contact-info">
          <h4>Contact</h4>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>24, Mangadu Main Road, Moulivakkam, Chennai, India, 600125</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+91 9840874319</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>inaraarchitectsandinteriors@gmail.com</span>
          </div>
          {/* Social Media Icons at Bottom */}
          <div className="footer-socials-inline">
            <a href="https://wa.me/919840874319" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/inaraarchitectsandinteriors?igsh=MTUxaWFrMDQwM3praA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com/@inaraarchitectsandinteriors?si=3L2e53JIXX2CjLrc" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        
      </div>

      

      {/* Footer Bottom Text */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Inara Architects & Interiors. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
