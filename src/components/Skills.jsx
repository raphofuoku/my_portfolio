import data from "../data/index.json";
import productChain from "../assets/frontendicon.png";
import tag1 from "../assets/reacticon.png";
import featherPen2 from "../assets/uiuxicon.png";
import featherPen1 from "../assets/wordpressicon.png";

const Skills = () => {
  const images = {
    "1": productChain,
    "2": tag1,
    "3": featherPen2,
    "4": featherPen1,
  };

  return (
    <section className="skills--section" id="Skills">
      <div className="portfolio--container">
        <h4 className="skills--section--heading">My Expertise</h4>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={images[item.id]} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <ul className="skills--section--description">
                 {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                 ))}
             </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;