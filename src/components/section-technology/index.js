import "./index.scss";
import {
  technical_video,
  country,
  installation,
  background4,
  BackgroundImage14,
  reduce,
  noiseless,
  odorless,
} from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";

function SectionTechnology() {
  const data = {
    row1: [
      {
        icon: installation,
        label: "100% Fully Automatic",
      },
      {
        icon: country,
        label: "24 Hours Composting",
      },
      {
        icon: reduce,
        label: "90% Volume Reduction",
      },
      {
        icon: noiseless,
        label: "Noiseless",
      },
      {
        icon: odorless,
        label: "Odorless",
      },
      {
        icon: installation,
        label: "Maintenance Free",
      },
    ],
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage14})`,
        backgroundSize: "cover",
      }}
    >
      <Section id={"section-technology"} className="section-technology-main">
        <div className="top-container">
          <Fade left>
            <div className="right-section">
              <p className="title1">TECHNOLOGY</p>
            </div>
          </Fade>

          <video width="600" height="400" controls>
            <source src={technical_video} type="video/mp4" />
          </video>
        </div>
        {/* <div className="bottom-container">
          <SectionHighlightsV2 data={data} />
        </div> */}
      </Section>
    </div>
  );
}

export default SectionTechnology;
