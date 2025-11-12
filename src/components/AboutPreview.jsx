import React from "react";
import aboutImg from "../../src/assests/images/img.jpg";


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
            We are a team of passionate architects and interior designers
            dedicated to creating spaces that are both functional and beautiful.
            Our mission is to transform your vision into reality.
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
