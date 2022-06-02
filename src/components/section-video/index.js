import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";
import { actual_video } from "common/common-imports";

function SectionVideo() {
  const sectionName = "video";

  return (
    <Section
      id={`section-${sectionName}`}
      className={`section-${sectionName}-main`}
      center
    >
      <Fade right opposite>
        <p className="title">ACTUAL WORKING</p>
      </Fade>
      <video width="950" height="600" controls autoPlay>
        <source src={actual_video} type="video/mp4" />
      </video>
    </Section>
  );
}

export default SectionVideo;
