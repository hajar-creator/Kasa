import "../sass/MainCards.scss";
import donneesCards from "../data.json";
import { NavLink } from "react-router-dom";

function MainCards() {
  return (
    <main className="cards">
      {donneesCards.map((card) => (
        <NavLink to={`/flat/${card.id}`} className="card">
          <div key={card.id} className="card__div">
            <img className="card__img" src={card.cover} alt={card.title} />
            <p className="card__title">{card.title}</p>
          </div>
        </NavLink>
      ))}
    </main>
  );
}

export default MainCards;
