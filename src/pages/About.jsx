import React from "react";
import { Link } from "react-router-dom";

// Import images from src/assets/images folder
import bannerImg from "../../src/assests/images/aboutfirm.png";
import team1Img from "../../src/assests/images/bharath img.png";
import team2Img from "../../src/assests/images/Civil head Mr Munusamy.png";
import team3Img from "../../src/assests/images/keets.png";

// Reusable Card component for Vision & Mission
const Card = ({ icon, title, description }) => (
  <div className="about-card">
    <div className="card-icon">{icon}</div>
    <h3 className="card-title">{title}</h3>
    <p className="card-desc">{description}</p>
  </div>
);

// Reusable TeamCard component for team members
const TeamCard = ({ image, name, role }) => (
  <div className="team-card">
    <img src={image} alt={name} className="team-img" />
    <h4 className="team-name">{name}</h4>
    <p className="team-role" style={{ whiteSpace: "pre-line" }}>{role}</p>
  </div>
);

const About = () => {
  return (
    <div className="about-page slide-left">

      {/* 1️⃣ Intro Banner */}
      <section
        className="intro-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="banner-title">Who We Are</h1>
      </section>

      {/* 2️⃣ Company Story */}
      <section className="company-story">
        <h2>Our Story</h2>
        <p>
          Founded on June 10, 2024, Inara Architects began with a clear vision — to design meaningful spaces shaped by light, balance, and purpose. 
          From a small start, we steadily grew into a practice handling diverse projects in residential, interior, commercial, and hospital design, taking responsibility for both concept development and execution. 
          Each project strengthened our commitment to precision, creativity, and client trust. Today, Inara Architects continues to evolve as a young, dedicated firm — creating spaces that inspire, function beautifully, and stand the test of time.
        </p>
      </section>

      {/* 3️⃣ Vision & Mission */}
      <section className="vision-mission">
        <Card
          icon="🌟"
          title="Vision"
          description="To create environmentally responsible designs that harmonize with nature and foster a strong, meaningful connection between people and the spaces they inhabit."
        />
        <Card
          icon="🎯"
          title="Mission"
          description="To create functional, sustainable, and human-centred spaces through thoughtful design and precise execution."
        />
      </section>

      {/* 4️⃣ Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">🎨 Creativity</div>
          <div className="value-item">🤝 Integrity</div>
          <div className="value-item">🏆 Excellence</div>
          <div className="value-item">👥 Collaboration</div>
        </div>
      </section>

      {/* 5️⃣ Team Preview */}
      <section className="team-preview">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <TeamCard image={team1Img} name="Ar Bharath Munusamy" role="Principal Architect and Founder" />
          <TeamCard image={team2Img} name="Mr Munusamy " role={`Director - Civil Execution
                                                                        (MS Constructions)`} />
          <TeamCard image={team3Img} name="Ms Keerthana" role="IT Head" />
        </div>
        <Link to="/team" className="team-btn">Meet Full Team</Link>
      </section>

    </div>
  );
};

export default About;
