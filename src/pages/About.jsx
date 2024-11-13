import img1 from "../assets/images/concentrador-oxigeno.png";

function About() {
  return (
    <div className="about-card">
      <div>
        <img src={img1} alt="persona utilizando oxígeno" />
      </div>
      <div className="about-text">
        <p>
          En Oxiserrano, llevamos 13 años dedicados a la venta, alquiler y
          distribución de oxígeno medicinal, brindamos asesoramiento y
          soluciones confiables a nuestros clientes en la ciudad de Quito.
        </p>
        <p>
          Nuestro compromiso es mejorar la calidad de vida de nuestros clientes,
          ofreciendo una amplia gama de equipos y servicios técnicos
          especializados para Oxigenoterapia que cumplen con los más altos
          estándares de seguridad.
        </p>
        <p>
          Contamos con un equipo altamente capacitado que se enfoca en
          satisfacer las necesidades específicas de cada paciente e institución,
          garantizando un servicio rápido, profesional y humano. Gracias a la
          confianza de familias y profesionales de la salud, hemos construido
          una sólida reputación en el cuidado respiratorio.
        </p>
      </div>
    </div>
  );
}

export default About;
