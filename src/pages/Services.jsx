// import { Card } from "react-bootstrap";
// import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Services() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  if (isSmallScreen) {
    return (
      <div className="services-new">
        <h2>Servicios</h2>
        <div className="service-container">
          <div className="service-img-one"></div>
          <div className="service-cardText">
            <h4>Alquiler</h4>
            <p>
              Ofrecemos un servicio especializado de alquiler de equipos de
              oxígeno medicinal diseñado para satisfacer las necesidades
              respiratorias de nuestros clientes de manera rápida y confiable.
            </p>
            <p>
              Contamos con una amplia gama de equipos de alta tecnología, desde
              concentradores de oxígeno fijos y portátiles hasta tanques de
              todos los tamaños, que se adaptan a tratamientos tanto a corto
              como a largo plazo.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-img-two"></div>

          <div className="service-cardText">
            <h4>Venta</h4>
            <p>
              Contamos con una completa línea de equipos de oxígeno medicinal e
              implementos complementarios para la venta, que garantizan
              soluciones permanentes y de alta calidad para quienes necesitan
              cuidado respiratorio.
            </p>
            <p>
              Nuestros productos incluyen concentradores de oxígeno fijos y
              portátiles que brindan suministro contínuo de oxígeno medicinal y
              mayor movilidad, tanques de todos los tamaños, y accesorios de
              última generación para Oxigenoterapia, todos certificados bajo
              estrictas normas de seguridad.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-img-three"></div>
          <div className="service-cardText">
            <h4>Soporte Técnico</h4>
            <p>
              Nuestro equipo de técnicos especializados está capacitado para
              realizar los mantenimientos preventivos periódicos, así como
              reparaciones y ajustes necesarios, para minimizar cualquier
              interrupción en el suministro de oxígeno. Además, brindamos
              asesoría técnica personalizada para garantizar el uso correcto de
              los equipos.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-img-four"></div>
          <div className="service-cardText">
            <h4>Instalación de Centrales de Gases Medicinales</h4>
            <p>
              Nos encargamos del diseño, instalación y mantenimiento de sistemas
              de distribución de gases medicinales que son fundamentales para el
              funcionamineto de hospitales, consultorios médicos o centros de
              salud, nosotros garantizamos un sistema seguro, eficaz y rentable.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-img-five"></div>
          <div className="service-cardText">
            <h4>Distribución de Oxígeno Medicinal</h4>
            <p>
              Recargamos todos los tamaños de tanques de oxígeno medicinal que
              usted necesite en su domicilio, oficina o cualquier centro de
              salud. Contamos con atención personalizada según sus necesidades.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-img-six"></div>
          <div className="service-cardText">
            <h4>Pruebas Hidrostáticas para Tanques de Oxígeno.</h4>
            <p>
              Realizamos las pruebas hidrostáticas indispensables para el uso
              correcto de tanques de oxígeno, que se deben realizar cada 5 años,
              según lo establece el Ministerio de Salud. En este proceso de
              seguridad industrial se verfica la resistencia de presión y la
              hermeticidad del equipo para evitar cualquier tipo de accidentes.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="services-new">
        <h2>Servicios</h2>
        <div className="service-container">
          <div className="service-img-one"></div>
          <div className="service-cardText">
            <h4>Alquiler</h4>
            <p>
              Ofrecemos un servicio especializado de alquiler de equipos de
              oxígeno medicinal diseñado para satisfacer las necesidades
              respiratorias de nuestros clientes de manera rápida y confiable.
            </p>
            <p>
              Contamos con una amplia gama de equipos de alta tecnología, desde
              concentradores de oxígeno fijos y portátiles hasta tanques de
              todos los tamaños, que se adaptan a tratamientos tanto a corto
              como a largo plazo.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-cardText">
            <h4>Venta</h4>
            <p>
              Contamos con una completa línea de equipos de oxígeno medicinal e
              implementos complementarios para la venta, que garantizan
              soluciones permanentes y de alta calidad para quienes necesitan
              cuidado respiratorio.
            </p>
            <p>
              Nuestros productos incluyen concentradores de oxígeno fijos y
              portátiles que brindan suministro contínuo de oxígeno medicinal y
              mayor movilidad, tanques de todos los tamaños, y accesorios de
              última generación para Oxigenoterapia, todos certificados bajo
              estrictas normas de seguridad.
            </p>
          </div>
          <div className="service-img-two"></div>
        </div>
        <div className="service-container">
          <div className="service-img-three"></div>
          <div className="service-cardText">
            <h4>Soporte Técnico</h4>
            <p>
              Nuestro equipo de técnicos especializados está capacitado para
              realizar los mantenimientos preventivos periódicos, así como
              reparaciones y ajustes necesarios, para minimizar cualquier
              interrupción en el suministro de oxígeno. Además, brindamos
              asesoría técnica personalizada para garantizar el uso correcto de
              los equipos.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-cardText">
            <h4>Instalación de Centrales de Gases Medicinales</h4>
            <p>
              Nos encargamos del diseño, instalación y mantenimiento de sistemas
              de distribución de gases medicinales que son fundamentales para el
              funcionamineto de hospitales, consultorios médicos o centros de
              salud, nosotros garantizamos un sistema seguro, eficaz y rentable.
            </p>
          </div>
          <div className="service-img-four"></div>
        </div>
        <div className="service-container">
          <div className="service-img-five"></div>
          <div className="service-cardText">
            <h4>Distribución de Oxigeno Medicinal</h4>
            <p>
              Recargamos todos los tamaños de tanques de oxígeno medicinal que
              usted necesite en su domicilio, oficina o cualquier centro de
              salud. Contamos con atención personalizada según sus necesidades.
            </p>
          </div>
        </div>
        <div className="service-container">
          <div className="service-cardText">
            <h4>Pruebas Hidrostáticas para Tanques de Oxígeno.</h4>
            <p>
              Realizamos las pruebas hidrostáticas indispensables para el uso
              correcto de tanques de oxígeno, que se deben realizar cada 5 años,
              según lo establece el Ministerio de Salud. En este proceso de
              seguridad industrial se verfica la resistencia de presión y la
              hermeticidad del equipo para evitar cualquier tipo de accidentes.
            </p>
          </div>
          <div className="service-img-six"></div>
        </div>
      </div>
    );
  }
}

export default Services;
