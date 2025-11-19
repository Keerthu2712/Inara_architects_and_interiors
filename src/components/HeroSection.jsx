import { Link } from "react-router-dom";
import heroImage from "../../src/assests/images/hero-img.jpg";


function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Image */}
        <div className="hero-background">
        <img
            src={heroImage}
            alt="Modern architecture design"
            className="hero-image"
        />
        </div>

      {/* Overlay Content */}
      <div className="hero-overlay">
        <h1 class="hero-title">
        <span class="brand-name">INARA</span>
        <span class="brand-sub">ARCHITECTS AND INTERIORS</span>
        </h1>

        <p className="hero-subtitle">
          Illuminating Space. Inspiring Soul.
        </p>
        <Link to="/ourworks" className="hero-button">
          Explore Our Works
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
