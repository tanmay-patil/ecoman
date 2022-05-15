import "./index.scss";
import Section from "components/section";
import { leaves1, leaves3 } from "common/common-imports";
import { Fade } from "react-reveal";
import { isMobile } from "react-device-detect";

function SectionVision() {
  return (
    <Section className="section-vision-main" center>
      <Fade left>
        <p className="title">VISION</p>
      </Fade>
      <Fade bottom>
        <p className="subtitle">“Total Waste Solutions at Your Doorstep”</p>
      </Fade>
      <Fade top>
        <img
          src={isMobile ? leaves1 : leaves3}
          className="img-leaves"
          alt="Leaves"
        />
      </Fade>
    </Section>
  );
}

export default SectionVision;
