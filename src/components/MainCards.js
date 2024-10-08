import "../sass/MainCards.scss";
import donneesCards from "../data.json";
import { NavLink } from "react-router-dom";

function MainCards() {
  return (
    <main className="cards">
      {/* Boucle sur les donées des cartes pour générer une carte pour chaque logement */}
      {donneesCards.map((card) => (
        //Création du lien vers la page de chaque logement grâce à NavLink
        //Utilisation de l'id du logement pour construire un url dynamique
        <NavLink key={card.id} to={`/flat/${card.id}`} className="card">
          <div className="card__div">
            <img className="card__img" src={card.cover} alt={card.title} />
            <p className="card__title">{card.title}</p>
          </div>
        </NavLink>
      ))}
    </main>
  );
}

export default MainCards;
