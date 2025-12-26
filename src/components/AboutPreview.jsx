import React from "react";
import aboutImg from "../../src/assests/images/aboutfirm.png";


const AboutPreview = () => {
  return (
    <section className="about-preview-section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="about-image">
          <img src={aboutImg} alt="About our firm" />
        </div>
        <div className="about-text">
          <h2>About Our Firm</h2>
          <p>
            To us, architecture is an act of illumination — not just of space, but of spirit.
            Every project is a dialogue between light and material, human and nature, idea and impact. 
            At Inara Architects, we design spaces that radiate purpose, clarity, and emotion, leaving an impression that lingers beyond walls.

          </p>
          <button onClick={() => (window.location.href = "/about")}>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
