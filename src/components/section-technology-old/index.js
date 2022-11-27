import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";
import { technical_video } from "common/common-imports";
import HighlightSection from "components/highlights-section";

function SectionTechnology() {
  const sectionName = "technology";

  const data = [
    {
      text1: "",
      text2: "Perfect blend of Biotechnology & Engineering",
      text3: "",
    },
    {
      text1: "",
      text2: "Stable and pathogenic free Compost",
      text3: "",
    },
    {
      text1: "",
      text2: "Consortium of Proprietary Bacteria",
      text3: "",
    },
    {
      text1: "",
      text2: "Sensors monitoring smallest details",
      text3: "",
    },
  ];

  return (
    <Section
      id={`section-${sectionName}`}
      className={`section-${sectionName}-main`}
      center
    >
      <Fade left>
        <p className="title">Technology</p>
      </Fade>

      <video width="950" height="600" controls>
        <source src={technical_video} type="video/mp4" />
      </video>
      <Fade top>
        <a href={"#section-video"}>
          <button className="view-btn">Actual Working video</button>
        </a>
      </Fade>

      <HighlightSection data={data} />
    </Section>
  );
}

export default SectionTechnology;
