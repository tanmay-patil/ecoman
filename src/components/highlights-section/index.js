import { Fade } from "react-reveal";
import "./index.scss";

function HighlightSection({ data, dataRow2 }) {
  return (
    <div className="highlights-section">
      <div className="inner-container">
        {data &&
          data.map((obj) => (
            <Fade left cascade>
              <div className="details-block">
                <div className="details-left">{obj.text1}</div>
                <div className="details-right">
                  <p className="details-title">{obj.text2}</p>
                  <p className="details-subtitle">{obj.text3}</p>
                </div>
              </div>
            </Fade>
          ))}
      </div>
      <div className="inner-container row-2">
        {dataRow2 &&
          dataRow2.map((obj) => (
            <Fade left cascade>
              <div className="details-block">
                <div className="details-left">{obj.text1}</div>
                <div className="details-right">
                  <p className="details-title">{obj.text2}</p>
                  <p className="details-subtitle">{obj.text3}</p>
                </div>
              </div>
            </Fade>
          ))}
      </div>
    </div>
  );
}

export default HighlightSection;
