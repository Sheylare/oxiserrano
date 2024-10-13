import logo from "../assets/images/Logo-OxiSerrano-Transparente.png";

function Footer() {
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
        
        <a href="#">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i class="bi bi-twitter-x"></i>
          </a>
      </div>
    </div>
  );
}

export default Footer;
