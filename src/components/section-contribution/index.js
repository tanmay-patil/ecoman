import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";
import { leaf_circle, leaf } from "common/common-imports";
import { CONTRIBUTION_DATA } from "./constants";

function SectionContribution() {
  const sectionName = "contribution";

  return (
    <Section
      id={`section-${sectionName}`}
      className={`section-${sectionName}-main`}
      center
    >
      <Fade right opposite>
        <p className="title">CONTRIBUTION TO ENVIRONMENT</p>
      </Fade>
      <Fade right opposite>
        <div className="inner-container">
          {CONTRIBUTION_DATA.map((obj, index) => (
            <Fade right duration={500 + (index + 1) * 400}>
              <span className="leaf-container">
                <img className="img-leaf-circle" src={leaf_circle} alt="Leaf" />
                <p>{obj.text}</p>
              </span>
            </Fade>
          ))}
        </div>
      </Fade>
    </Section>
  );
}

export default SectionContribution;
