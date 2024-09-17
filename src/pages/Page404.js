import { NavLink } from "react-router-dom";
import "../sass/Page404.scss";

function Page404() {
  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <h2 className="error__sub">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <NavLink to="/" className="error__link">
        Retourner sur la page d'accueil
      </NavLink>
    </main>
  );
}

export default Page404;
