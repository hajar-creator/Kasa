import "../sass/MainCards.scss";
import donneesCards from "../donnes.json";

function MainCards() {
  return (
    <main className="cards">
      {donneesCards.map((card) => (
        <div key={card.id} className="card">
          <img className="card__img" src={card.cover} alt={card.title} />
          <p className="card__title">{card.title}</p>
        </div>
      ))}
    </main>
  );
}

export default MainCards;
