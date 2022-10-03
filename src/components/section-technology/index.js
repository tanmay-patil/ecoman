import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";
import { technical_video } from "common/common-imports";
import { leaf } from "common/common-imports";

function SectionTechnology() {
  const sectionName = "video";

  const handleOnClick = () => {};

  return (
    <Section
      id={`section-${sectionName}`}
      className={`section-${sectionName}-main`}
      center
    >
      <video width="950" height="600" controls>
        <source src={technical_video} type="video/mp4" />
      </video>
      <Fade top>
        <a href={"#section-video"}>
          <button onClick={handleOnClick} className="view-btn">
            Go to Actual Video
          </button>
        </a>
      </Fade>
      <div className="highlights-container">
        <p className="highlights-title">HIGHLIGHTS</p>
        <div className="highlights-subtitle-container">
          <p>
            <img className="img-leaf" src={leaf} alt="Leaf" />
            Perfect blend of Biotechnology &amp; Engineering
          </p>
          <p>
            <img className="img-leaf" src={leaf} alt="Leaf" />
            Stable and pathogenic free Compost
          </p>
          <p>
            <img className="img-leaf" src={leaf} alt="Leaf" />
            Consortium of Proprietary Bacteria
          </p>
          <p>
            <img className="img-leaf" src={leaf} alt="Leaf" />
            Sensors monitoring smallest details
          </p>
        </div>
      </div>
    </Section>
  );
}

export default SectionTechnology;
