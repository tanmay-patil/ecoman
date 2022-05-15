import "./index.scss";
import Section from "components/section";
import { leaves1, leaves3 } from "common/common-imports";
import { Fade } from "react-reveal";
import { isMobile, MobileView } from "react-device-detect";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function SectionVision() {
  return (
    <Section id={"section-vision"} className="section-vision-main" center>
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
      <MobileView>
        <a href="#section-clients">
          <div className="arrow-container">
            <ArrowDownwardIcon />
          </div>
        </a>
      </MobileView>
    </Section>
  );
}

export default SectionVision;
