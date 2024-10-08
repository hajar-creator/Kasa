import { useParams, Navigate } from "react-router-dom";
import data from "../data.json";
import Carrousel from "./Carrousel";
import "../sass/FlatContent.scss";
import Tags from "./Tags";
import Host from "./Host";
import Collapse from "./Collapse";
import Stars from "./Stars";

function FlatContent() {
  //Récupération de l'id du logement depuis les paramètres de l'url
  const { id } = useParams();
  //Recherche du logement correspondant à l'id dans les données importées
  const flat = data.find((flat) => flat.id === id);

  //Si aucun logement ne correspond à l'id, redirection vers la page d'erreur
  if (!flat) {
    console.log(flat);
    return <Navigate to="*" />;
  }

  //Si le logement est trouvé, affichage de son contenu
  return (
    <div className="flatContent">
      <Carrousel carrouselImgs={flat.pictures} />

      <div className="flatContent__info">
        <div className="flatContent__info--text">
          <h1>{flat.title}</h1>
          <p>{flat.location}</p>
          <Tags tags={flat.tags} />
        </div>
        <div className="flatContent__info--host">
          <Host host={flat.host} />
          <Stars count={flat.rating} />
        </div>
      </div>
      <div className="flatContent__info--collapse">
        <Collapse data={{ title: "Description", content: flat.description }} />
        <Collapse data={{ title: "Équipements", content: flat.equipments }} />
      </div>
    </div>
  );
}

export default FlatContent;
