import "../sass/Footer.scss";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo" src={logo} alt="logo du site"></img>
      <p className="footer__text">© 2024 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
