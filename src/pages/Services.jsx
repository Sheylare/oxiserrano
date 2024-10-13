import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className="services-card">
      <Card className="service-card-one">
        <Card.Body>
          <motion.h2
            className="service-text"
            initial={{ opacity: 0, y: -50 }} // Posición inicial de la animación
            animate={{ opacity: 1, y: 0 }} // Estado final de la animación
            transition={{ duration: 1.2 }} // Duración de la animación
          >
            Alquiler
          </motion.h2>
          <Card.Text className="service-text">
            Ofrecemos un servicio especializado de alquiler de equipos de
            oxígeno medicinal diseñado para satisfacer las necesidades
            respiratorias de nuestros clientes de manera rápida y confiable.
            Contamos con una amplia gama de equipos de última tecnología, desde
            concentradores de oxígeno hasta cilindros portátiles, que se adaptan
            a tratamientos tanto a corto como a largo plazo.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="service-card-two">
        <Card.Body>
          <motion.h2
            className="service-text"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }} 
          >
            Venta
          </motion.h2>
          <Card.Text className="service-text">
            Ofrecemos una completa línea de equipos de oxígeno medicinal para la
            venta, garantizando soluciones permanentes y de alta calidad para
            quienes necesitan cuidado respiratorio. Nuestros productos incluyen
            concentradores de oxígeno, cilindros, y accesorios de última
            generación, todos certificados bajo estrictas normas de seguridad.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="service-card-three">
        <Card.Body>
          <motion.h2
            className="service-text"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }} 
          >
            Soporte Técnico
          </motion.h2>

          <Card.Text className="service-text">
            Nuestro equipo de técnicos especializados está capacitado para
            realizar revisiones periódicas, reparaciones y ajustes necesarios,
            minimizando cualquier interrupción en el suministro de oxígeno.
            Además, brindamos asesoría técnica personalizada para garantizar el
            uso correcto de los equipos
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Services;
