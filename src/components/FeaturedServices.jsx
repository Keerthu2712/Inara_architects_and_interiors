import React from "react";

import designIcon from "../../src/assests/images/feat-int.jpg";
import architectureIcon from "../../src/assests/images/hero-img.jpg";
import renovationIcon from "../../src/assests/images/img.jpg";
import landscapeIcon from "../../src/assests/images/img.jpg";

function FeaturedServices() {
  const services = [
    { icon: designIcon, title: "Interior Design", text: "Creative and functional interiors that reflect your style." },
    { icon: architectureIcon, title: "Architecture", text: "Innovative and sustainable architectural designs." },
    { icon: renovationIcon, title: "Renovation", text: "Transforming spaces while preserving their essence." },
    { icon: landscapeIcon, title: "Landscape Design", text: "Designing outdoor spaces that blend beauty and nature." },
  ];

  return (
    <section className="featured-services">
      <h2 className="section-title">Our Featured Services</h2>
      <p className="section-subtitle">Designs that redefine spaces with creativity and precision.</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card">
            <img src={service.icon} alt={service.title} className="service-bg" />

            <div className="service-overlay">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </div>


        ))}
      </div>
    </section>
  );
}

export default FeaturedServices;
