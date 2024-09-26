import { useParams, NavLink } from "react-router-dom";
import data from "../data.json";
import Carrousel from "./Carrousel";
import "../sass/FlatContent.scss";

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
        </div>
        <div className="flatContent__info--rating"></div>
      </div>
    </div>
  );
}

export default FlatContent;
