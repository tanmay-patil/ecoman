import "./index.scss";
import { machine, leaves2, leaves3 } from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";
import { isMobile } from "react-device-detect";
import { leaf } from "common/common-imports";
import HighlightSection from "components/highlights-section";

function SectionTagline() {
  const data = [
    {
      text1: "1150+",
      text2: "Installations",
      text3: "",
    },
    {
      text1: "20+",
      text2: "Countries",
      text3: "",
    },
    {
      text1: "",
      text2: "Pioneers since 2009",
      text3: "",
    },
  ];

  return (
    <Section id={"section-tagline"} className="section-tagline-main">
      <div className="parent-container">
        <div className="plain-background"></div>
        <Fade top>
          <img
            src={isMobile ? leaves3 : leaves2}
            className="img-leaves1"
            alt="Leaves"
          />
        </Fade>
        <div className="left-section">
          <Fade left>
            <img src={machine} className="img-machine" alt="Machine" />
          </Fade>
        </div>
        <div className="right-section">
          <p className="title1">INDIA KA</p>
          <p className="title2">WASTE MANAGER</p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          marginTop: "-100px",
        }}
      >
        <HighlightSection data={data} />
      </div>
    </Section>
  );
}

export default SectionTagline;
