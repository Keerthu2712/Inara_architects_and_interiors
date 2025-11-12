import React, { useState } from "react";

// Contact info component
const ContactInfoCard = ({ icon, title, info }) => (
  <div className="contact-info-card">
    <div className="contact-icon">{icon}</div>
    <h4>{title}</h4>
    <p>{info}</p>
  </div>
);

// Contact form component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is just a demo)");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
};

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <ContactInfoCard icon="📍" title="Address" info="123 Main Street, City, Country" />
        <ContactInfoCard icon="📞" title="Phone" info="+91 98765 43210" />
        <ContactInfoCard icon="✉️" title="Email" info="info@architects.com" />
        <ContactInfoCard icon="⏰" title="Hours" info="Mon - Fri: 9am - 6pm" />
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <ContactForm />
      </section>

      {/* Optional Google Map */}
      <section className="contact-map">
        <h2>Our Location</h2>
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2351318221417!2d80.13460997484228!3d13.020693187299223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261006b5b530b%3A0xfc62fb63164d6cdb!2sINARA%20Architects%20and%20Interiors!5e0!3m2!1sen!2sin!4v1762969700054!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
};

export default Contact;
