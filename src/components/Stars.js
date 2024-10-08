import "../sass/Stars.scss";

//Le composant Stars reçoit ses données grâce à la prop "count"
function Stars({ count }) {
  //Création d'un tableau vide pour stocker les étoiles
  const stars = [];

  //Boucle pour générer les 5 étoiles
  for (let i = 0; i < 5; i++) {
    //Si l'indice de l'étoile est inférieur à "count", l'étoile est remplie, sinon elle est vide
    stars.push(
      <i
        key={i}
        className={`fa-star fa-solid ${i < count ? "filled" : "empty"}`}
      ></i>
    );
  }
  return <div className="stars">{stars}</div>;
}

export default Stars;
