import React from "react";
import { useNavigate } from "react-router-dom";

// Service card component
const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-desc">{description}</p>
  </div>
);

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "🏛️",
      title: "Architecture Design",
      description:
        "We create functional, innovative, and aesthetically pleasing architectural solutions.",
    },
    {
      icon: "🛋️",
      title: "Interior Design",
      description:
        "Our interior designs focus on comfort, style, and personalization for every client.",
    },
    {
      icon: "📋",
      title: "Project Management",
      description:
        "Professional project management ensuring timely and efficient execution of designs.",
    },
    {
      icon: "🌳",
      title: "Renovation & Landscaping",
      description:
        "Transforming spaces and outdoor areas to be visually appealing and functional.",
    },
  ];

  return (
    <div className="services-page">
      <section className="services-header">
        <h2>Our Services</h2>
        <p>
          We offer a range of professional services to bring your vision to life.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>

      <section className="services-cta">
        <button
          onClick={() => navigate("/ourworks")}
          className="cta-button"
        >
          View Our Works
        </button>
      </section>
    </div>
  );
};

export default Services;
