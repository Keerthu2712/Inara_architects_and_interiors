import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assests/icons/Logo.png"; // update path if needed

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Inara Architects & Interiors" />
        </Link>
        <div className="company-name">INARA ARCHITECTS AND INTERIORS</div>
      </div>

      

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation Menu */}
      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Our Services</Link></li>
          <li><Link to="/ourworks" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
          <li><Link to="/team" onClick={() => setMenuOpen(false)}>Our Team</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
