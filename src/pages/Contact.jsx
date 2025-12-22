
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
  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/inaraarchitectsandinteriors@gmail.com"
      method="POST"
    >
      {/* Disable captcha */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Email subject */}
      <input
        type="hidden"
        name="_subject"
        value="New Contact Enquiry from Website"
      />

      {/* Success redirect (optional) */}
      <input
        type="hidden"
        name="_next"
        value="https://yourusername.github.io/your-repo-name/#/contact"
      />

      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="text" name="phone" placeholder="Your Phone" />
      <textarea name="message" placeholder="Your Message" required />

      <button type="submit">Send Message</button>


    </form>
  );
};


const Contact = () => {
  return (
    <div className="contact-page zoom-in">

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <ContactInfoCard icon="📍" title="Address" info="24, Mangadu Main Road, Moulivakkam, Chennai, India, 600125" />
        <ContactInfoCard icon="📞" title="Phone" info="+91 9840874319" />
        <ContactInfoCard icon="✉️" title="Email" info="inaraarchitectsandinteriors@gmail.com" />
        <ContactInfoCard icon="⏰" title="Hours" info="Mon - Fri: 9.30am - 5.30pm" />
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
