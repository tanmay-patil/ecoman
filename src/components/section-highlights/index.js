import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";
import { leaf } from "common/common-imports";

function SectionHighlights() {
  const sectionName = "highlights";

  const data = [
    {
      text: "1150+ Installations",
    },
    {
      text: "20+ Countries",
    },
    {
      text: "Pioneers since 2009",
    },
  ];

  return (
    <Section
      id={`section-${sectionName}`}
      className={`section-${sectionName}-main`}
      center
    >
      <Fade right opposite>
        <p className="title">HIGHLIGHTS</p>
      </Fade>
      <div className="container">
        <p className="text-container">
          {data.map((obj, index) => (
            <Fade right duration={500 + (index + 1) * 200}>
              <p className="para">
                <img className="img-leaf" src={leaf} alt="Leaf" />
                {obj.text}
              </p>
            </Fade>
          ))}
        </p>
      </div>
    </Section>
  );
}

export default SectionHighlights;
