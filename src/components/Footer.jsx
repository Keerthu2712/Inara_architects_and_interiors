import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Column 1: Brand Info --- */}
        <div className="footer-section brand">
          <h3>Inara Architects & Interiors</h3>
          <p>Designing Dreams. Building Realities.</p>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/ourworks">Portfolio</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* --- Column 3: Contact Info --- */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>📍 Chennai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@inaraarchitects.com</p>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="footer-bottom">
        <p>© 2025 Inara Architects & Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
