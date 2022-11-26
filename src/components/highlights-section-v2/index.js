import "./index.scss";
import { machine, leaves2, leaves3 } from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";
import { isMobile } from "react-device-detect";
import { leaf } from "common/common-imports";
import HighlightSection from "components/highlights-section";

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
