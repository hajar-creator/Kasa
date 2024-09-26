import AboutBanner from "../components/AboutBanner";
import aboutData from "../aboutData.json";
import Collapse from "../components/Collapse";

function About() {
  return (
    <div>
      <AboutBanner />
      {aboutData.map((item, index) => (
        <Collapse key={index} data={item} />
      ))}
    </div>
  );
}

export default About;
