import "./index.scss";
import { machine, leaves2, leaves3 } from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";
import { isMobile, MobileView } from "react-device-detect";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function SectionTagline() {
  return (
    <Section id={"section-tagline"} className="section-tagline-main">
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
        <p className="title1">INDIA'S LEADING</p>
        <p className="title2">WASTE MANAGER</p>
      </div>

      <MobileView>
        <a href="#section-vision">
          <div className="arrow-container">
            <ArrowDownwardIcon />
          </div>
        </a>
      </MobileView>
    </Section>
  );
}

export default SectionTagline;
