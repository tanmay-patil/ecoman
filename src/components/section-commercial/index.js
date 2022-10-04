import "./index.scss";
import Section from "components/section";
import { machine2 } from "common/common-imports";
import { Fade } from "react-reveal";

function SectionCommercial() {
  const data = [
    {
      text1: "100%",
      text2: "FULLY",
      text3: "Automatic",
    },
    {
      text1: "24",
      text2: "HOURS",
      text3: "Compost in 24 hours",
    },
    {
      text1: "90%",
      text2: "REDUCTION",
      text3: "Volume reduction",
    },
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
        <div className="bottom-content">
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
        </div>
      </div>
    </Section>
  );
}

export default SectionCommercial;
