import React from "react";

function WhatsAppButton() {
  const message = "Hello, I want to discuss a project with Inara Architects.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/919840874319?text=${encodedMessage}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
