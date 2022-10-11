import "./index.scss";
import Section from "components/section";
import { machine2 } from "common/common-imports";
import { Fade } from "react-reveal";
import HighlightSection from "components/highlights-section";

function SectionCommercial() {
  const dataRow1 = [
    {
      text1: "100%",
      text2: "FULLY Automatic",
      text3: "",
    },
    {
      text1: "24",
      text2: "HOURS Composting",
      text3: "",
    },
    {
      text1: "90%",
      text2: "Volume reduction",
      text3: "",
    },
  ];
  const dataRow2 = [
    {
      text1: "",
      text2: "NOISELESS",
      text3: "",
    },
    {
      text1: "",
      text2: "ODORLESS",
      text3: "",
    },
    {
      text1: "",
      text2: "MAINTENANCE FREE",
      text3: "",
    },
  ];

  return (
    <Section id={"section-commercial"} className="section-commercial-main">
      <div className="content">
        <div className="inner-content">
          <div className="left-section">
            <Fade left>
              <p className="title">
                World’s best Commercial Composting Machine
              </p>
            </Fade>
            <Fade top>
              <p className="text">
                We produce world’s best Commercial Composting Machines for
                onsite waste management
              </p>
            </Fade>
            <Fade top>
              <a href="#section-products">
                <button className="view-btn">VIEW OUR PRODUCTS</button>
              </a>
            </Fade>
          </div>
          <div className="right-section">
            <Fade top>
              <img src={machine2} className="img-machine2" alt="Leaves" />
            </Fade>
          </div>
        </div>
        <div style={{ marginTop: "-166px", width: "100%" }}>
          <HighlightSection data={dataRow1} dataRow2={dataRow2} />
        </div>
      </div>
    </Section>
  );
}

export default SectionCommercial;
