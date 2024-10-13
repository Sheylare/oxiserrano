import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo-OxiSerrano-Transparente.png";
import "../App.css";

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg"  id="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mr-5">
          <img className="logo" src={logo} alt="logo" width="200vw" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="w-100 ml-auto nav-links">
            <Nav.Link as={Link} to="/about" className="nav-item">
              Quién Somos
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-item">
              Servicios
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-item">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
