import { useMediaQuery } from "react-responsive";
import logo from "../assets/images/Logo-OxiSerrano-Transparente.png";

function Footer() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  if (isSmallScreen) {
    return (
      <div className="footer">
        <div className="logo-info-footer-small">
          <img src={logo} alt="logo" width="150vw" />
          <div className="contactanos">
            <h4>Contáctanos</h4>
            <h5>098 666 0840</h5>
            <h5>oxiserrano@gmail.com</h5>
          </div>
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/oxigeno_quito/">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/OxigenoQuito/?view_public_for=230621731091303">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <div>
          <img src={logo} alt="logo" width="200vw" />
        </div>
        <div>
          <h4>Contáctanos</h4>
          <h5>098 666 0840</h5>
          <h5>oxiserrano@gmail.com</h5>
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/oxigeno_quito/">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/OxigenoQuito/?view_public_for=230621731091303">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
