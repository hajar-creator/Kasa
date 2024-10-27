import { useState } from "react";
import "../sass/Carrousel.scss";
import arrow_right from "../assets/arrow__right.png";
import arrow_left from "../assets/arrow__left.png";

function Carrousel({ carrouselImgs }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  //Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentSlide((index) => (index + 1) % carrouselImgs.length);
  };

  //Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    setCurrentSlide(
      (index) => (index - 1 + carrouselImgs.length) % carrouselImgs.length
    );
  };

  //Sélection de l'image actuelle
  const currentImg = carrouselImgs[currentSlide];

  //Nombre total d'images
  const slideCount = carrouselImgs.length;

  //Si aucune image n'est présente
  if (slideCount === 0) {
    return <p>Aucune image n'est disponible</p>;
  }

  //Si une seule image est présente
  if (slideCount === 1) {
    return (
      <div className="carrousel">
        <img
          className="carrousel__img"
          src={currentImg}
          alt={`${currentSlide + 1}`}
        />
      </div>
    );
  }

  //Compteur d'images
  const imgCount = `${currentSlide + 1}/${slideCount}`;

  return (
    <div className="carrousel">
      <img
        className="carrousel__img"
        src={currentImg}
        alt={`${currentSlide + 1}`}
      ></img>
      <div className="carrousel__counter">{imgCount}</div>
      {slideCount > 1 && (
        <>
          <img
            className="carrousel__left"
            src={arrow_left}
            alt="flèche de gauche"
            onClick={nextSlide}
          />
          <img
            className="carrousel__right"
            src={arrow_right}
            alt="flèche de droite"
            onClick={prevSlide}
          />
        </>
      )}
    </div>
  );
}
export default Carrousel;
