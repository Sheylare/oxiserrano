import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-card">
      <h2> <i class="bi bi-geo-alt-fill"> </i> Calle Pesantesco Nº36-12 y Mañosca, Quito - Ecuador |  <i class="bi bi-telephone-fill"></i> 098 666 0840 </h2>
      <Link to={"/contact"}><button>¿Necesita Alquilar?</button></Link>
    </div>
  );
}

export default Header;
