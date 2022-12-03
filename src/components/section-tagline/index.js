import "./index.scss";
import {
  machine,
  country,
  flag,
  installation,
  background,
  BackgroundImage8,
} from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";
import SectionHighlightsV2 from "components/highlights-section-v2";

function SectionTagline() {
  const data = {
    row1: [
      {
        icon: installation,
        label: "1150+ Installations",
      },
      {
        icon: country,
        label: "20+ Countries",
      },
      {
        icon: flag,
        label: "Pioneers since 2009",
      },
    ],
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage8})`,
        backgroundRepeat: "round",
        backgroundSize: "cover",
      }}
    >
      <Section id={"section-tagline"} className="section-tagline-main">
        <div className="top-container">
          <Fade left>
            <img src={machine} className="img-machine" alt="Machine" />
          </Fade>
          <Fade left>
            <div className="right-section">
              <p className="title1">INDIA KA</p>
              <p className="title2">WASTE MANAGER</p>
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

export default SectionTagline;
