import AboutBanner from "../components/AboutBanner";
import aboutData from "../aboutData.json";
import Collapse from "../components/Collapse";
import "../sass/About.scss";

function About() {
  return (
    <div>
      <AboutBanner />
      <div className="collapseAbout">
        {aboutData.map((item, index) => (
          <Collapse key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default About;
