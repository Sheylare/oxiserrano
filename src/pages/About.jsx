import img1 from "../assets/images/concentrador-oxigeno.png";

function About() {
  return (
    <div className="about-card">
      <div>
        <img src={img1} alt="persona utilizando oxígeno" />
      </div>
      <div className="about-text">
        <p>
          En <b>Oxiserrano</b>, llevamos 13 años dedicados a la venta y alquiler de
          oxígeno medicinal, brindando soluciones confiables y de calidad a la
          ciudad de Quito. Nuestro compromiso es mejorar la calidad de vida de
          nuestros clientes, ofreciendo equipos y servicios técnicos
          especializados que cumplen con los más altos estándares de seguridad.
        </p>
        <p>
          Nuestro equipo altamente capacitado se enfoca en satisfacer las
          necesidades específicas de cada paciente e institución, garantizando
          un servicio rápido, profesional y humano. Gracias a la confianza de
          familias y profesionales de la salud, hemos construido una sólida
          reputación en el cuidado respiratorio.
        </p>
      </div>
    </div>
  );
}

export default About;
