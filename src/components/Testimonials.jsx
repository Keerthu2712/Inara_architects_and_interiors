import React, { useState } from "react";
import client1 from "../../src/assests/icons/Logo.png";
import client2 from "../../src/assests/icons/Logo.png";
import client3 from "../../src/assests/icons/Logo.png";

function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      text: "Inara Architects completely transformed our living space! Their attention to detail and creativity are unmatched.",
      image: client1,
      position: "Homeowner",
    },
    {
      name: "Priya Mehta",
      text: "Professional, innovative, and always on time. They designed our office interiors beautifully!",
      image: client2,
      position: "Business Owner",
    },
    {
      name: "Rahul Verma",
      text: "Their architectural vision exceeded our expectations. Highly recommended for premium projects.",
      image: client3,
      position: "Developer",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Clients Say</h2>
      <p className="section-subtitle">
        Real stories from our satisfied clients.
      </p>

      <div className="testimonial-card">
        <img
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="client-image"
        />
        <p className="client-text">"{testimonials[index].text}"</p>
        <h3 className="client-name">{testimonials[index].name}</h3>
        <span className="client-position">{testimonials[index].position}</span>
      </div>

      <div className="testimonial-controls">
        <button onClick={prevSlide}>&#8592;</button>
        <button onClick={nextSlide}>&#8594;</button>
      </div>
    </section>
  );
}

export default Testimonials;
