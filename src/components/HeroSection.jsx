import { Link } from "react-router-dom";
import heroImage from "C:/Users/Admin/Desktop/inara_architects_and_interiors/src/assests/images/img.jpg";


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
        <h1 className="hero-title">Designing Dreams. Building Realities.</h1>
        <p className="hero-subtitle">
          Bringing modern architecture and interior excellence to life.
        </p>
        <Link to="/ourworks" className="hero-button">
          Explore Our Works
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
