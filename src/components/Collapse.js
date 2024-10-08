import { useState } from "react";
import "../sass/Collapse.scss";
import arrowIcon from "../assets/arrowCollapse.png";

//Définition du composant Collapse qui reçoit ses données grâce à la prop "data"
const Collapse = ({ data }) => {
  //Déclaration de l'état "isOpen" pour gérér si le contenu est ouvert ou fermé
  //Par défault, le contenu est fermé
  const [isOpen, setIsOpen] = useState(false);

  //Fonction permettant de basculer entre états ouvert et fermé
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse">
      {/* Conteneur avec une classe dynamique qui change en fonction de son état (open ou closed) */}
      <div className={`collapse-container ${isOpen ? "open" : "closed"}`}>
        {/* En-tête du composant, cliquable pour ouvrir ou fermer le composant */}
        <div className="collapse-header" onClick={toggleCollapse}>
          {/* Titre affiché grâce aux données passés en prop */}
          <h3 className="collapse-title">{data.title}</h3>
          <span
            className="collapse-icon"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <img src={arrowIcon} alt="Arrow Icon" />
          </span>
        </div>
        <div className="collapse-content">
          {data.title === "Équipements" ? (
            //Si le titre des données est "Equipements", le contenu sera affiché sous forme de liste
            <ul className="equipements">
              {data.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            //Sinon, on affiche simplement le contenu (ici, c'est du texte)
            data.content
          )}
        </div>
      </div>
    </div>
  );
};
export default Collapse;
