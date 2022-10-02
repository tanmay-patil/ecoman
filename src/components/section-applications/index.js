import "./index.scss";
import Section from "components/section";
import {
  government,
  builder,
  hospital,
  industry,
  institution,
  restaurant,
} from "common/common-imports";
import { leaf } from "common/common-imports";
import { Fade } from "react-reveal";

function SectionApplications() {
  const data = [
    {
      text: "Builders",
      icon: builder,
    },
    {
      text: "Hotels",
      icon: restaurant,
    },
    {
      text: "Government",
      icon: government,
    },
    {
      text: "Hospitals",
      icon: hospital,
    },
    {
      text: "Industries",
      icon: industry,
    },
    {
      text: "Institutions",
      icon: institution,
    },
  ];

  return (
    <Section
      id={"section-applications"}
      className="section-applications-main"
      center
    >
      <Fade left>
        <p className="title">Applications</p>
      </Fade>

      <div className="container">
        {data &&
          data.map((obj) => (
            <Fade cascade left>
              <div className="img-container">
                <img src={obj.icon} alt="application-icon" />
                <p>{obj.text}</p>
              </div>
            </Fade>
          ))}
      </div>

      <div className="highlights-container">
        <p className="highlights-title">HIGHLIGHTS</p>
        <div className="highlights-subtitle-container">
          <p>
            <img className="img-leaf" src={leaf} alt="Leaf" />
            Total Waste solutions at your doorstep
          </p>
        </div>
      </div>
    </Section>
  );
}

export default SectionApplications;
