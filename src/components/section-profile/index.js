import "./index.scss";
import {
  leaf,
  country,
  flag,
  installation,
  background2,
} from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";
import SectionHighlightsV2 from "components/highlights-section-v2";
import { PARA_DATA_DESKTOP } from "./constants";

function SectionProfile() {
  const data = {
    row1: [
      {
        href: "#section-clients",
        icon: installation,
        label: "Industries",
      },
      {
        href: "#section-builderClients",
        icon: country,
        label: "Builders",
      },
      {
        href: "#section-hotelClients",
        icon: flag,
        label: "Hotels",
      },
      {
        href: "#section-govtClients",
        icon: flag,
        label: "Government",
      },
    ],
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background2})`,
        backgroundRepeat: "round",
        backgroundSize: "cover",
      }}
    >
      <Section id={"section-profile"} className="section-profile-main">
        <div className="top-container">
          <Fade left>
            <div className="right-section">
              <p className="title1">ABOUT US</p>
              <p className="title2">
                <p className="text-container">
                  {PARA_DATA_DESKTOP.map((obj, index) => (
                    <Fade left duration={500 + (index + 1) * 200}>
                      <p className="para">
                        <img className="img-leaf" src={leaf} alt="Leaf" />
                        {obj.text}
                      </p>
                    </Fade>
                  ))}
                </p>
              </p>
            </div>
          </Fade>
        </div>
        <div className="bottom-container">
          <SectionHighlightsV2 data={data} />
        </div>
      </Section>
    </div>
  );
}

export default SectionProfile;
