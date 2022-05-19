import "./index.scss";
import Section from "components/section";
import { process } from "common/common-imports";
import { Fade } from "react-reveal";

function SectionProcess() {
  const sectionName = "process";

  return (
    <Section
      id={`section-${sectionName}`}
      className={`section-${sectionName}-main`}
      center
    >
      <Fade right opposite>
        <p className="title">PROCESS</p>
      </Fade>
      <Fade bottom opposite>
        <img src={process} className="img-process" alt="Process" />
      </Fade>
    </Section>
  );
}

export default SectionProcess;
