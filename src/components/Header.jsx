import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-card">
      <div className="header-info">
        <h2>
          <i className="bi bi-geo-alt-fill"> </i> Calle Pesantesco Nº36-12 y
          Mañosca, Quito - Ecuador
        </h2>

        <h2>
          <i className="bi bi-telephone-fill"></i> 098 666 0840{" "}
        </h2>
      </div>
      <div className="header-button">
        <Link to={"/contact"}>
          <button>¿Necesita Alquilar?</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

