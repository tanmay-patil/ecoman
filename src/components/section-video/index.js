import "./index.scss";
import {
  actual_video,
  country,
  installation,
  BackgroundImage12,
  reduce,
  noiseless,
  odorless,
} from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";
import SectionHighlightsV2 from "components/highlights-section-v2";

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
        backgroundImage: `url(${BackgroundImage12})`,
        // backgroundRepeat: "round",
        backgroundSize: "cover",
      }}
    >
      <Section id={"section-actual"} className="section-actual-main">
        <div className="top-container">
          <Fade left>
            <div className="right-section">
              <p className="title1">ACTUAL WORKING</p>
            </div>
          </Fade>

          <video width="650" height="400" controls>
            <source src={actual_video} type="video/mp4" />
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
