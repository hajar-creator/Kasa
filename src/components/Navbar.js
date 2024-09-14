import "../sass/Navbar.scss";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>Accueil</li>
        <li>A propos</li>
      </ul>
    </nav>
  );
}

export default Navbar;
