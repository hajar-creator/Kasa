import { useParams, NavLink } from "react-router-dom";
import data from "../data.json";
import Carrousel from "./Carrousel";
import "../sass/FlatContent.scss";
import Tags from "./Tags";
import Host from "./Host";
import Collapse from "./Collapse";
function FlatContent() {
  const { id } = useParams();
  const flat = data.find((flat) => flat.id === id);

  if (!flat) {
    return <NavLink to="*"></NavLink>;
  }
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
