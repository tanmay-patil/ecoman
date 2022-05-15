import "./index.scss";
import { logo } from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";

function SectionHeadline() {
  return (
    <Section id={"section-headline"} className="section-headline-main" center>
      <div className="left-section">
        <Fade>
          <img src={logo} className="img-logo" alt="Machine" />
        </Fade>
      </div>
    </Section>
  );
}

export default SectionHeadline;
