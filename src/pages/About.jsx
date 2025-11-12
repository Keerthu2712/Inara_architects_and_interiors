import React from "react";
import { Link } from "react-router-dom";

// Import images from src/assets/images folder
import bannerImg from "../../src/assests/images/img.jpg";
import team1Img from "../../src/assests/icons/Logo.png";
import team2Img from "../../src/assests/icons/Logo.png";
import team3Img from "../../src/assests/icons/Logo.png";

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
    <p className="team-role">{role}</p>
  </div>
);

const About = () => {
  return (
    <div className="about-page">

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
          We started in 2010 with a passion for creating spaces that inspire.
          Our team of architects and designers delivers innovative and functional
          designs that stand the test of time.
        </p>
      </section>

      {/* 3️⃣ Vision & Mission */}
      <section className="vision-mission">
        <Card
          icon="🌟"
          title="Vision"
          description="To redefine modern architecture with sustainable and innovative designs."
        />
        <Card
          icon="🎯"
          title="Mission"
          description="To deliver exceptional design solutions that reflect our client’s dreams."
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
          <TeamCard image={team1Img} name="Alice Johnson" role="Lead Architect" />
          <TeamCard image={team2Img} name="Bob Smith" role="Interior Designer" />
          <TeamCard image={team3Img} name="Clara Lee" role="Project Manager" />
        </div>
        <Link to="/team" className="team-btn">Meet Full Team</Link>
      </section>

    </div>
  );
};

export default About;
