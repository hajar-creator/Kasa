import { useState } from "react";
import "../sass/Collapse.scss";
import arrowIcon from "../assets/arrowCollapse.png";

const Collapse = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse">
      <div className={`collapse-container ${isOpen ? "open" : "closed"}`}>
        <div className="collapse-header" onClick={toggleCollapse}>
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
            <ul className="equipements">
              {data.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            data.content
          )}
        </div>
      </div>
    </div>
  );
};
export default Collapse;
