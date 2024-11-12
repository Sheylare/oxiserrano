import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo-OxiSerrano-Transparente.png";
import "../App.css";
import { useState } from "react";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      id="navbar"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="mr-5"
          onClick={handleLinkClick}
        >
          <img className="logo" src={logo} alt="logo" width="200vw" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse>
          <Nav className="w-100 ml-auto nav-links">
            <Nav.Link
              as={Link}
              to="/about"
              className="nav-item"
              onClick={handleLinkClick}
            >
              Quién Somos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className="nav-item"
              onClick={handleLinkClick}
            >
              Servicios
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              className="nav-item"
              onClick={handleLinkClick}
            >
              Productos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-item"
              onClick={handleLinkClick}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
