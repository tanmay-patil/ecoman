import "./index.scss";
import Section from "components/section";

function SectionHighlightsV2({ data }) {
  return (
    <Section id={"section-highlights"} className="section-highlights-main">
      {data &&
        data &&
        data.row1 &&
        data.row1.map((obj) => (
          <div className="highlight-element">
            <div className="highlight-icon">
              <img src={obj.icon} className="img-icon" alt="Machine" />
            </div>
            <div className="highlight-label">{obj.label}</div>
          </div>
        ))}
      {data &&
        data &&
        data.row2 &&
        data.row2.map((obj) => (
          <div className="highlight-element">
            <div className="highlight-icon">
              <img src={obj.icon} className="img-icon" alt="Machine" />
            </div>
            <div className="highlight-label">{obj.label}</div>
          </div>
        ))}
    </Section>
  );
}

export default SectionHighlightsV2;
