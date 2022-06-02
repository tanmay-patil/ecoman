import "./index.scss";
import Section from "components/section";
import {
  government,
  home,
  hospital,
  industry,
  institution,
  psu,
  restaurant,
} from "common/common-imports";
import { Fade } from "react-reveal";
import { isMobile } from "react-device-detect";

function SectionApplications() {
  const data = [
    {
      text: "Hotels",
      icon: restaurant,
    },
    {
      text: "Housing Society",
      icon: home,
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
    {
      text: "PSUs",
      icon: psu,
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
    </Section>
  );
}

export default SectionApplications;
