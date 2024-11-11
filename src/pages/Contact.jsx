import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-page">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }} 
        >
          Información de Contacto
        </motion.h2>
      </div>
      <div className="contact-cards">
        <div className="contact-info">
          <i class="bi bi-geo-alt-fill"></i>
          <h3> Dirección</h3>
          <h5>Calle Pesantesco Nº36-12 y Mañosca</h5>
        </div>
        <div className="contact-info">
          <i class="bi bi-telephone-fill"></i>
          <h3>Teléfono</h3>
          <h5>098 666 0840</h5>
          <h5>099 507 0758</h5>
          <h5>02 2463 994</h5>
        </div>
        <div className="contact-info">
          <i class="bi bi-envelope-at-fill"></i>
          <h3>Email</h3>
          <h5>oxiserrano@gmail.com</h5>
        </div>
      </div>
      <div className="schedule-card">
        <h2>Horario de Atención</h2>
        <i class="bi bi-calendar3"></i>
        <h4>Lunes a viernes</h4>
        <h5>9h30 a 13h30</h5>
        <h5>14h30 a 18h30</h5>
      </div>
      <div className="map">
        <h2>Localízanos</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.4498902041526!2d-78.49739194666842!3d-0.17570016807679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a8d1bcd5fcb%3A0x739fead150cc2f82!2sOXISERRANO%20OX%C3%8DGENO%20MEDICINAL!5e0!3m2!1sca!2ses!4v1691144095645!5m2!1sca!2ses"
          width={"100%"}
          height={"50%"}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
              
      </div>
    </div>
  );
}

export default Contact;
