import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";

function SectionVision() {
  return (
    <Section className="section-vision-main" center>
      <Fade left>
        <p className="title">VISION</p>
      </Fade>
      <Fade bottom>
        <p className="subtitle">“Total Waste Solutions at Your Doorstep”</p>
      </Fade>
    </Section>
  );
}

export default SectionVision;
