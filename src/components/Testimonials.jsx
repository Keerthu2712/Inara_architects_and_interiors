import React, { useState } from "react";
import client1 from "../../src/assests/icons/Logo.png";
import client2 from "../../src/assests/icons/Logo.png";
import client3 from "../../src/assests/icons/Logo.png";

function Testimonials() {
  const testimonials = [
    {
      name: "Mr Mohanraj",
      text: "Working with the team was a smooth and well-organized experience. They took the time to understand our requirements and translated them into a practical and aesthetic design. The quality of execution and attention to detail were impressive.",
      image: client1,
      position: "SM Land Developers - Vanagaram ",
    },
    {
      name: "Mr Gopi ",
      text: "A professional and reliable team that cares about details. We are very satisfied with the work and happy to recommend them.",
      image: client2,
      position: "Thiruverkadu Residence",
    },
    {
      name: "Mr Manikandan ",
      text: "From initial design discussions to final handover, the project was handled professionally. The team maintained clarity in design, cost, and timelines, and the final outcome met our expectations in every aspect.",
      image: client3,
      position: "Singaperumal Kovil Residence",
    },
    {
      name: "Mrs Gunasundari ",
      text: "The renovation design brought a fresh, contemporary look while improving functionality. The space now feels more practical and thoughtfully planned. We are very satisfied with the outcome.",
      image: client1,
      position: "Moulivakkam Residence",
    },
    {
      name: "Mr Anand Balasubramaniyam ",
      text: "On our 35’ × 80’ Mannargudi site, the team transformed a large 4,000 sq.ft. built-up home into a contemporary, clean, and welcoming space. Every area feels open, functional, and designed to create meaningful memories for our family.",
      image: client2,
      position: "Mannargudi Residence",
    },
    {
      name: "Mr Karunagaran (Tamil Nadu fisherman association president) ",
      text: "For my residence developed on a 1,200 sq.ft. plot, the team delivered a refined contemporary design that maximizes space while maintaining a strong architectural identity. The planning is thoughtful, the detailing is precise, and the overall composition reflects a balance of elegance and functionality. The result is a home that feels modern, comfortable, and timeless. We are extremely satisfied with the design quality and the professionalism demonstrated throughout.",
      image: client3,
      position: "Residence at siruseri ",
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
