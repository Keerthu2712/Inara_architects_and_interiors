import React from "react";

// Import team images
import team1Img from "../../src/assests/icons/Logo.png";
import team2Img from "../../src/assests/icons/Logo.png";
import team3Img from "../../src/assests/icons/Logo.png";
import team4Img from "../../src/assests/icons/Logo.png";

// Reusable TeamCard component
const TeamCard = ({ image, name, role, socials }) => (
  <div className="team-card">
    <img src={image} alt={name} className="team-img" />
    <h4 className="team-name">{name}</h4>
    <p className="team-role">{role}</p>
    <div className="social-icons">
      {socials.map((icon, index) => (
        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
          <img src={icon.icon} alt="social" className="social-icon" />
        </a>
      ))}
    </div>
  </div>
);

const OurTeam = () => {
  // Sample social icons (replace with actual icon paths)
  const socialExample = [
    { icon: "/images/facebook.png", link: "" },
    { icon: "/images/linkedin.png", link: "" },
    { icon: "/images/twitter.png", link: "" },
  ];

  return (
    <div className="ourteam-page">

      {/* Team Grid */}
      <section className="team-grid-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <TeamCard image={team1Img} name="Alice Johnson" role="Lead Architect" socials={socialExample} />
          <TeamCard image={team2Img} name="Bob Smith" role="Interior Designer" socials={socialExample} />
          <TeamCard image={team3Img} name="Clara Lee" role="Project Manager" socials={socialExample} />
          <TeamCard image={team4Img} name="David Brown" role="Senior Designer" socials={socialExample} />
        </div>
      </section>

      {/* About Team Culture */}
      <section className="team-culture">
        <h2>Our Culture</h2>
        <p>
          Our team blends innovation with precision to deliver timeless designs.
          Collaboration, creativity, and dedication define the way we work together.
        </p>
      </section>

    </div>
  );
};

export default OurTeam;
