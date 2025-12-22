import React from "react";

// Import team images
import team1Img from "../../src/assests/images/bharath img.png";
import team2Img from "../../src/assests/images/Civil head Mr Munusamy.png";
import team3Img from "../../src/assests/images/keets.png";


// Reusable TeamCard component
const TeamCard = ({ image, name, role, socials }) => (
  <div className="team-card">
    <img src={image} alt={name} className="team-img" />
    <h4 className="team-name">{name}</h4>
    <p className="team-role" style={{ whiteSpace: "pre-line" }}>{role}</p>
    
  </div>
);

const OurTeam = () => {
  // Sample social icons (replace with actual icon paths)
  

  return (
    <div className="ourteam-page pop-in">

      {/* Team Grid */}
      <section className="team-grid-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <TeamCard image={team1Img} name="Ar Bharath Munusamy" role="Principal Architect and Founder"  />
          <TeamCard image={team2Img} name="Mr Munusamy " role={`Director - Civil Execution
                                                                        (MS Constructions)`} />
          <TeamCard image={team3Img} name="Ms Keerthana" role="IT Head" />
        
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
