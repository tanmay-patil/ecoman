import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";
import { leaf } from "common/common-imports";
import { PARA_DATA_DESKTOP, PARA_DATA_MOBILE } from "./constants";
import { isMobile } from "react-device-detect";

function SectionProfile() {
  const sectionName = "profile";

  const data = isMobile ? PARA_DATA_MOBILE : PARA_DATA_DESKTOP;

  return (
    <Section
      id={`section-${sectionName}`}
      className={`section-${sectionName}-main`}
      center
    >
      <Fade right opposite>
        <p className="title">PROFILE</p>
      </Fade>
      <Fade right opposite>
        <div className="container">
          <p className="text-container">
            {data.map((obj) => (
              <p className="para">
                <img className="img-leaf" src={leaf} alt="Leaf" />
                {obj.text}
              </p>
            ))}
          </p>
        </div>
      </Fade>
    </Section>
  );
}

export default SectionProfile;
