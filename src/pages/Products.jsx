import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import regulador from "../assets/images/regulador.png";
import reguladorVaso from "../assets/images/regulador-vaso.png";
import reguladorCGA from "../assets/images/regulador-CGA.png";
import cilindros from "../assets/images/cilindros.png";
import cilindro from "../assets/images/cilindro-6m3.jpg";
import filtroHepa from "../assets/images/filtroH.jpg";
import filtroRespironics from "../assets/images/filtro-respironics.jpg";
import filtroInvacare from "../assets/images/filtroInvacare.jpg";
import filtroHepaD from "../assets/images/filtroHD.jpg";
import filtroInogen from "../assets/images/filtro-inogen.jpg";
import filtroInogens from "../assets/images/filtroInogenS.jpg";
import filtroBacteria from "../assets/images/filtroBacterias.jpg";
import respironics from "../assets/images/RespironicsE.jpg";
import oxypure from "../assets/images/oxypure.jpg";
import inogeng5 from "../assets/images/inogen-g5.jpg";
import mascarilla from "../assets/images/mascarilla-oxg.png";
import bigotera from "../assets/images/bigotera-oxg.jpg";
import vaso from "../assets/images/vasoHumidificador.jpg";
import extension from "../assets/images/extension-manguera.jpg";
import espiga from "../assets/images/espiga.jpg";
import trampa from "../assets/images/trampa-agua.jpg";
import nebulizador from "../assets/images/mascarilla_nebulizador.jpg";
import niple from "../assets/images/niple-conector.jpg";
import nebulPediatrico from "../assets/images/Nebulizador-ped.jpg";
import nebul from "../assets/images/nebulizador.png";
import lata from "../assets/images/lata.jpg";
import oximetro from "../assets/images/oximetro.jpg";
import espirometro from "../assets/images/espirometro.jpg";
import coche from "../assets/images/coche.jpg";
import silla from "../assets/images/silla.jpg";
import mochila from "../assets/images/mochila.jpg";
import agua from "../assets/images/agua.jpg";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const location = useLocation();
  const productData = location.state;
  const [cardSeleccionada, setCardSeleccionada] = useState("");

  useEffect(() => {
    if (productData) {
      setCardSeleccionada(productData);
    }
  }, [productData]);

  const manejarClickCard = (nombre) => {
    setCardSeleccionada(cardSeleccionada === nombre ? "" : nombre);
  };

  if (isSmallScreen) {
    return (
      <div className="products">
        <h1 onClick={() => manejarClickCard("")}>Categorías</h1>{" "}
        <div className="products-section">
          {cardSeleccionada === "" || cardSeleccionada === "reguladores" ? (
            <Card
              className={`product-card1 ${
                cardSeleccionada === "reguladores" ? "seleccionada" : ""
              }`}
              onClick={() => manejarClickCard("reguladores")}
            >
              <Card.Body>
                <motion.h2
                  className="products-text"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  Reguladores
                </motion.h2>
              </Card.Body>
            </Card>
          ) : null}

          {cardSeleccionada === "" || cardSeleccionada === "cilindros" ? (
            <Card
              className={`product-card2 ${
                cardSeleccionada === "cilindros" ? "seleccionada" : ""
              }`}
              onClick={() => manejarClickCard("cilindros")}
            >
              <Card.Body>
                <motion.h2
                  className="products-text"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  Tanques
                </motion.h2>
              </Card.Body>
            </Card>
          ) : null}

          {cardSeleccionada === "" ||
          cardSeleccionada === "concentradoresFiltros" ? (
            <Card
              className={`product-card3 ${
                cardSeleccionada === "concentradoresFiltros"
                  ? "seleccionada"
                  : ""
              }`}
              onClick={() => manejarClickCard("concentradoresFiltros")}
            >
              <Card.Body>
                <motion.h2
                  className="products-text"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  Concentradores y Filtros
                </motion.h2>
              </Card.Body>
            </Card>
          ) : null}

          {cardSeleccionada === "" || cardSeleccionada === "descartables" ? (
            <Card
              className={`product-card4 ${
                cardSeleccionada === "descartables" ? "seleccionada" : ""
              }`}
              onClick={() => manejarClickCard("descartables")}
            >
              <Card.Body>
                <motion.h2
                  className="products-text"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  Desechables
                </motion.h2>
              </Card.Body>
            </Card>
          ) : null}

          {cardSeleccionada === "" || cardSeleccionada === "otros" ? (
            <Card
              className={`product-card5 ${
                cardSeleccionada === "otros" ? "seleccionada" : ""
              }`}
              onClick={() => manejarClickCard("otros")}
            >
              <Card.Body>
                <motion.h2
                  className="products-text"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  Otros Equipos
                </motion.h2>
              </Card.Body>
            </Card>
          ) : null}
        </div>
        {cardSeleccionada === "reguladores" && (
          <div className="reguladores-section">
            <Card className="card-content">
              <Card.Img src={regulador} className="card-images img-fluid" />

              <Card.Title>Regulador CGA 870 adulto toma directa</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={reguladorVaso}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>
                Regulador CGA 870 toma vaso para adulto PEDIÁTRICO/NEONATAL
              </Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={reguladorCGA}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>
                Regulador CGA 850 toma vaso para adulto PEDIÁTRICO/NEONATAL
              </Card.Title>
            </Card>
          </div>
        )}
        {cardSeleccionada === "cilindros" && (
          <div className="cilindros-section">
            <Card className="card-content">
              <div>
                <Card.Img src={cilindros} className="card-images img-fluid" />
              </div>
              <Card.Title>
                Tanque de oxígeno medicial tipo D, E, M60, M122
              </Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={cilindro} className="card-images img-fluid" />
              </div>
              <Card.Title>Tanque de oxígeno medicial de 6M3</Card.Title>
            </Card>
          </div>
        )}
        {cardSeleccionada === "concentradoresFiltros" && (
          <div className="concentradores-section">
            <Card className="card-content">
              <div>
                <Card.Img src={respironics} className="card-images img-fluid" />
              </div>
              <Card.Title>Respironics Everflo</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={oxypure} className="card-images img-fluid" />
              </div>
              <Card.Title>Oxypure</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={inogeng5} className="card-images img-fluid" />
              </div>
              <Card.Title>Inogen G5</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={filtroHepa} className="card-images img-fluid" />
              </div>
              <Card.Title>Filtro Hepa Nuvo</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroRespironics}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro Hepa Respironics</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroInvacare}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro Invacare</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={filtroHepaD} className="card-images img-fluid" />
              </div>
              <Card.Title>Filtro Hepa drive</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroInogen}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro entrada Inogen</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroInogens}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro salida Inogen</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroBacteria}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro salida Inogen</Card.Title>
            </Card>
          </div>
        )}
        {cardSeleccionada === "descartables" && (
          <div className="descartables-section">
            <Card className="card-content">
              <div>
                <Card.Img src={mascarilla} className="card-images img-fluid" />
              </div>
              <Card.Title>Mascarilla de oxígeno</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={bigotera} className="card-images img-fluid" />
              </div>
              <Card.Title>Bigotera de oxigeno</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={vaso} className="card-images img-fluid" />
              </div>
              <Card.Title>Vaso Humidificador</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={extension} className="card-images img-fluid" />
              </div>
              <Card.Title>Extensión de Manguera de Oxígeno</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={espiga} className="card-images img-fluid" />
              </div>
              <Card.Title>Conector tipo Espiga</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={trampa} className="card-images img-fluid" />
              </div>
              <Card.Title>Trampa de agua</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={nebulizador} className="card-images img-fluid" />
              </div>
              <Card.Title>Mascarilla Nebulizador</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={niple} className="card-images img-fluid" />
              </div>
              <Card.Title>Conector Niple</Card.Title>
            </Card>
          </div>
        )}
        {cardSeleccionada === "otros" && (
          <div className="otros-section">
            <Card className="card-content">
              <div>
                <Card.Img
                  src={nebulPediatrico}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Nebulizador Pediátrico</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={nebul} className="card-images img-fluid" />
              </div>
              <Card.Title>Nebulizador adulto Salter</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={lata} className="card-images img-fluid" />
              </div>
              <Card.Title>Oxígeno portátil en Lata</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={oximetro} className="card-images img-fluid" />
              </div>
              <Card.Title>Oxímetro de pulso</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={espirometro} className="card-images img-fluid" />
              </div>
              <Card.Title>Espirómetro</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={agua} className="card-images img-fluid" />
              </div>
              <Card.Title>Agua Destilada</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={coche} className="card-images img-fluid" />
              </div>
              <Card.Title>Coche cilindro 1M3</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={silla} className="card-images img-fluid" />
              </div>
              <Card.Title>Mochila cilindro 1M3 para silla de ruedas</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={mochila} className="card-images img-fluid" />
              </div>
              <Card.Title>Mochila cilindro M3</Card.Title>
            </Card>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="products">
        <h1>Categorias</h1>
        <div className="products-section">
          <Card
            className={`product-card1 ${
              cardSeleccionada === "reguladores" ? "seleccionada" : ""
            }`}
            onClick={() => manejarClickCard("reguladores")}
          >
            <Card.Body>
              <motion.h2
                className="products-text"
                initial={{ opacity: 0, y: -50 }} // Posición inicial de la animación
                animate={{ opacity: 1, y: 0 }} // Estado final de la animación
                transition={{ duration: 1.2 }} // Duración de la animación
              >
                Reguladores
              </motion.h2>
            </Card.Body>
          </Card>
          <Card
            className={`product-card2 ${
              cardSeleccionada === "cilindros" ? "seleccionada" : ""
            }`}
            onClick={() => manejarClickCard("cilindros")}
          >
            <Card.Body>
              <motion.h2
                className="products-text"
                initial={{ opacity: 0, y: -50 }} // Posición inicial de la animación
                animate={{ opacity: 1, y: 0 }} // Estado final de la animación
                transition={{ duration: 1.2 }} // Duración de la animación
              >
                Tanques
              </motion.h2>
            </Card.Body>
          </Card>
          <Card
            className={`product-card3 ${
              cardSeleccionada === "concentradoresFiltros" ? "seleccionada" : ""
            }`}
            onClick={() => manejarClickCard("concentradoresFiltros")}
          >
            <Card.Body>
              <motion.h2
                className="products-text"
                initial={{ opacity: 0, y: -50 }} // Posición inicial de la animación
                animate={{ opacity: 1, y: 0 }} // Estado final de la animación
                transition={{ duration: 1.2 }} // Duración de la animación
              >
                Concentradores y Filtros
              </motion.h2>
            </Card.Body>
          </Card>
          <Card
            className={`product-card4 ${
              cardSeleccionada === "descartables" && "seleccionada"
            }`}
            onClick={() => manejarClickCard("descartables")}
          >
            <Card.Body>
              <motion.h2
                className="products-text"
                initial={{ opacity: 0, y: -50 }} // Posición inicial de la animación
                animate={{ opacity: 1, y: 0 }} // Estado final de la animación
                transition={{ duration: 1.2 }} // Duración de la animación
              >
                Descartables
              </motion.h2>
            </Card.Body>
          </Card>
          <Card
            className={`product-card5 ${
              cardSeleccionada === "otros" ? "seleccionada" : ""
            }`}
            onClick={() => manejarClickCard("otros")}
          >
            <Card.Body>
              <motion.h2
                className="products-text"
                initial={{ opacity: 0, y: -50 }} // Posición inicial de la animación
                animate={{ opacity: 1, y: 0 }} // Estado final de la animación
                transition={{ duration: 1.2 }} // Duración de la animación
              >
                Otros Equipos
              </motion.h2>
            </Card.Body>
          </Card>
        </div>
        {cardSeleccionada === "reguladores" && (
          <div className="reguladores-section">
            <Card className="card-content">
              <Card.Img src={regulador} className="card-images img-fluid" />

              <Card.Title>Regulador CGA 870 adulto toma directa</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={reguladorVaso}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>
                Regulador CGA 870 toma vaso para adulto PEDIÁTRICO/NEONATAL
              </Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={reguladorCGA}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>
                Regulador CGA 850 toma vaso para adulto PEDIÁTRICO/NEONATAL
              </Card.Title>
            </Card>
          </div>
        )}

        {cardSeleccionada === "cilindros" && (
          <div className="cilindros-section">
            <Card className="card-content">
              <div>
                <Card.Img src={cilindros} className="card-images img-fluid" />
              </div>
              <Card.Title>
                Tanque de oxígeno medicial tipo D, E, M60, M122
              </Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={cilindro} className="card-images img-fluid" />
              </div>
              <Card.Title>Tanque de oxígeno medicial de 6M3</Card.Title>
            </Card>
          </div>
        )}

        {cardSeleccionada === "concentradoresFiltros" && (
          <div className="concentradores-section">
            <Card className="card-content">
              <div>
                <Card.Img src={respironics} className="card-images img-fluid" />
              </div>
              <Card.Title>Respironics Everflo</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={oxypure} className="card-images img-fluid" />
              </div>
              <Card.Title>Oxypure</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={inogeng5} className="card-images img-fluid" />
              </div>
              <Card.Title>Inogen G5</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={filtroHepa} className="card-images img-fluid" />
              </div>
              <Card.Title>Filtro Hepa Nuvo</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroRespironics}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro Hepa Respironics</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroInvacare}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro Invacare</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={filtroHepaD} className="card-images img-fluid" />
              </div>
              <Card.Title>Filtro Hepa drive</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroInogen}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro entrada Inogen</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroInogens}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro salida Inogen</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img
                  src={filtroBacteria}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Filtro salida Inogen</Card.Title>
            </Card>
          </div>
        )}
        {cardSeleccionada === "descartables" && (
          <div className="descartables-section">
            <Card className="card-content">
              <div>
                <Card.Img src={mascarilla} className="card-images img-fluid" />
              </div>
              <Card.Title>Mascarilla de oxígeno</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={bigotera} className="card-images img-fluid" />
              </div>
              <Card.Title>Bigotera de oxigeno</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={vaso} className="card-images img-fluid" />
              </div>
              <Card.Title>Vaso Humidificador</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={extension} className="card-images img-fluid" />
              </div>
              <Card.Title>Extensión de Manguera de Oxígeno</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={espiga} className="card-images img-fluid" />
              </div>
              <Card.Title>Conector tipo Espiga</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={trampa} className="card-images img-fluid" />
              </div>
              <Card.Title>Trampa de agua</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={nebulizador} className="card-images img-fluid" />
              </div>
              <Card.Title>Mascarilla Nebulizador</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={niple} className="card-images img-fluid" />
              </div>
              <Card.Title>Conector Niple</Card.Title>
            </Card>
          </div>
        )}

        {cardSeleccionada === "otros" && (
          <div className="otros-section">
            <Card className="card-content">
              <div>
                <Card.Img
                  src={nebulPediatrico}
                  className="card-images img-fluid"
                />
              </div>
              <Card.Title>Nebulizador Pediátrico</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={nebul} className="card-images img-fluid" />
              </div>
              <Card.Title>Nebulizador adulto Salter</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={lata} className="card-images img-fluid" />
              </div>
              <Card.Title>Oxígeno portátil en Lata</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={oximetro} className="card-images img-fluid" />
              </div>
              <Card.Title>Oxímetro de pulso</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={espirometro} className="card-images img-fluid" />
              </div>
              <Card.Title>Espirómetro</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={agua} className="card-images img-fluid" />
              </div>
              <Card.Title>Agua Destilada</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={coche} className="card-images img-fluid" />
              </div>
              <Card.Title>Coche cilindro 1M3</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={silla} className="card-images img-fluid" />
              </div>
              <Card.Title>Mochila cilindro 1M3 para silla de ruedas</Card.Title>
            </Card>
            <Card className="card-content">
              <div>
                <Card.Img src={mochila} className="card-images img-fluid" />
              </div>
              <Card.Title>Mochila cilindro M3</Card.Title>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default Products;
