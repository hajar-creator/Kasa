import "../sass/Navbar.scss";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        {/* Lien vers la page d'accueil */}
        <NavLink
          to="/"
          //Ajout de la classe "underline" si le lien est actif
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        {/* Redirige vers la page "A propos" */}
        <NavLink
          to="/about"
          //Ajout de la classe "underline" si le lien est actif
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
