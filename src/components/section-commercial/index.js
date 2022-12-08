import "./index.scss";
import {
  machine2,
  country,
  installation,
  BackgroundImage10,
  reduce,
  noiseless,
  odorless,
} from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";
import SectionHighlightsV2 from "components/highlights-section-v2";

function SectionCommercial() {
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
        backgroundImage: `url(${BackgroundImage10})`,
        // backgroundRepeat: "round",
        backgroundSize: "cover",
      }}
    >
      <Section id={"section-commercial"} className="section-commercial-main">
        <div className="top-container">
          <Fade left>
            <div className="right-section">
              <p className="title1">
                World’s best Commercial Composting Machine
              </p>
              <p className="title2">
                {" "}
                We produce world’s best Commercial Composting Machines for
                onsite waste management
                <br />
                <Fade left>
                  <a href="#section-products">
                    <button className="view-btn">VIEW OUR PRODUCTS</button>
                  </a>
                </Fade>
              </p>
            </div>
          </Fade>
          <Fade left>
            <img src={machine2} className="img-machine" alt="Machine" />
          </Fade>
        </div>
        <div className="bottom-container">
          <SectionHighlightsV2 data={data} />
        </div>
      </Section>
    </div>
  );
}

export default SectionCommercial;
