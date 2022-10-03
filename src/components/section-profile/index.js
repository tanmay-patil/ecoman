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
        <p className="title">ABOUT US</p>
      </Fade>
      <div className="container">
        <p className="text-container">
          {data.map((obj, index) => (
            <Fade right duration={500 + (index + 1) * 200}>
              <p className="para">
                <img className="img-leaf" src={leaf} alt="Leaf" />
                {obj.text}
              </p>
            </Fade>
          ))}
        </p>
      </div>

      <div className="highlights-container">
        <p className="highlights-title">CLIENT LINKS</p>
        <div className="highlights-subtitle-container">
          <p>
            <a href="#section-clients">
              <img className="img-leaf" src={leaf} alt="Leaf" />
              Industries
            </a>
          </p>
          <p>
            <a href="#section-builderClients">
              <img className="img-leaf" src={leaf} alt="Leaf" />
              Builders
            </a>
          </p>
          <p>
            <a href="#section-hotelClients">
              <img className="img-leaf" src={leaf} alt="Leaf" />
              Hotels
            </a>
          </p>
          <p>
            <a href="#section-govtClients">
              <img className="img-leaf" src={leaf} alt="Leaf" />
              Government
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}

export default SectionProfile;
