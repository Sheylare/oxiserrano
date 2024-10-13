import React from "react";

function WhatsappButton() {
  const phoneNumber = "+593986660840"; // Reemplaza esto con el número de WhatsApp de la empresa

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <img
        className="whatsapp-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </div>
  );
}

export default WhatsappButton;
