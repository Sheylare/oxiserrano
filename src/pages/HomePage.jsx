import { Carousel, Button, Card } from "react-bootstrap";
import heroImg1 from "../assets/images/heroImg1.webp";
import heroImg2 from "../assets/images/heroImg2.webp";
import heroImg3 from "../assets/images/heroImg3.webp";

import cardImg1 from "../assets/images/Reguladores.png";
import cardImg2 from "../assets/images/descartables.webp";
import cardImg3 from "../assets/images/cilindros-oxigeno.png";
import cardImg4 from "../assets/images/concentrador.webp";
import cardImg5 from "../assets/images/portatil.png";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const carouselItems = [
    {
      image: heroImg1,
      title: "¿Necesita Oxígeno?",
      description: "Trabajamos sin respiro para que usted respire ",
    },
    {
      image: heroImg2,
      title: "¡Contáctenos hoy!",
      description:
        "Ofrecemos SERVICIO A DOMICILIO en el centro norte de Quito para su mayor comodidad. ",
    },
    {
      image: heroImg3,
      title: "Alquiler de Equipos",
      description: "Ver más información",
    },
  ];

  const navigate = useNavigate();

  const handleGoToProducts = (product) => {
    navigate("/products", { state: product });
  };

  return (
    <div className="home-section">
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-carousel-image"
              style={{
                backgroundImage: `linear-gradient(#2e384275, rgba(171, 197, 207, 0.3)), url(${item.image})`,
              }}
            >
              <Carousel.Caption>
                <h3>{item.title}</h3>
                {index === 2 ? (
                  <p>
                    <Link to={"/contact"}>
                      <Button variant="light">{item.description}</Button>
                    </Link>
                  </p>
                ) : (
                  <p>{item.description}</p>
                )}
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="products-card">
        <Card
          className="card-content"
          onClick={() => handleGoToProducts("cilindros")}
        >
          <Card.Body>
            <Card.Title>Tanques</Card.Title>
            <div className="image-container">
              <Card.Img src={cardImg3} className="card-image img-fluid" />
            </div>
          </Card.Body>
        </Card>
         <Card
          className="card-content"
          onClick={() => handleGoToProducts("concentradoresFiltros")}
        >
          <Card.Body>
            <Card.Title>Concentradores Fijos</Card.Title>
            <div className="image-container">
              <Card.Img src={cardImg4} className="card-image img-fluid" />
            </div>
          </Card.Body>
        </Card>
        <Card
          className="card-content"
          onClick={() => handleGoToProducts("concentradoresFiltros")}
        >
          <Card.Body>
            <Card.Title>Concentradores Portátiles</Card.Title>
            <div className="image-container">
              <Card.Img src={cardImg5} className="card-image img-fluid" />
            </div>
          </Card.Body>
        </Card>
        <Card
          className="card-content"
          onClick={() => handleGoToProducts("reguladores")}
        >
          <Card.Body>
            <Card.Title>Reguladores</Card.Title>
            <Card.Img src={cardImg1} className="card-image img-fluid" />
          </Card.Body>
        </Card>
        <Card
          className="card-content"
          onClick={() => handleGoToProducts("descartables")}
        >
          <Card.Body>
            <Card.Title>Desechables</Card.Title>
            <div className="image-container">
              <Card.Img src={cardImg2} className="card-image img-fluid" />
            </div>
          </Card.Body>
        </Card>

       

      </div>

      <div className="info-section">
        <h1>¿Por qué Elegirnos?</h1>
        <div className="services-info">
          <Card className="card-info">
            <Card.Body>
              <Card.Title>Compromiso</Card.Title>
              <div className="image-container">
                <i className="bi bi-lungs"></i>
              </div>
              <Card.Text>
                Nos enfocamos en hacer de la salud de nuestros clientes nuestra
                máxima prioridad. Somos más que un proveedor de oxígeno, somos
                un aliado en tu bienestar.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-info">
            <Card.Body>
              <Card.Title>Atención Personalizada</Card.Title>
              <div className="image-container">
                <i className="bi bi-person-check"></i>
              </div>
              <Card.Text>
                No eres un cliente más. En Oxiserrano, nos tomamos el tiempo
                para brindarte soluciones adaptadas a tu situación particular,
                ya sea para el alquiler o la compra de equipos de oxígeno.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-info">
            <Card.Body>
              <Card.Title>Mantenimiento y soporte técnico</Card.Title>
              <div className="image-container">
                <i className="bi bi-tools"></i>
              </div>
              <Card.Text>
                Además de suministrar oxígeno, ofrecemos soporte técnico
                especializado y mantenimiento preventivo, asegurando que tus
                equipos estén siempre en óptimas condiciones.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-info">
            <Card.Body>
              <Card.Title>Experiencia</Card.Title>
              <div className="image-container">
                <i className="bi bi-hand-thumbs-up"></i>
              </div>
              <Card.Text>
                Durante más de una década, hemos atendido a cientos de familias
                e instituciones en Quito, adaptándonos a las necesidades
                específicas de cada paciente.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="map-location">
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

export default HomePage;
