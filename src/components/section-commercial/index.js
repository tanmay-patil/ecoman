import "./index.scss";
import Section from "components/section";
import { machine2 } from "common/common-imports";
import { Fade } from "react-reveal";

function SectionCommercial() {
  const data = [
    {
      text1: "24",
      text2: "HOURS",
      text3: "Food waste to compost",
    },
    {
      text1: "24",
      text2: "HOURS",
      text3: "Reduction rate",
    },
    {
      text1: "100%",
      text2: "FULLY",
      text3: "Automatic",
    },
  ];

  return (
    <Section id={"section-commercial"} className="section-commercial-main">
      <div className="content">
        <div className="inner-content">
          <div className="left-section">
            <Fade left>
              <p className="title">COMMERCIAL</p>
            </Fade>
            <Fade top>
              <p className="text">
                We produce a range of composting solutions for on-site waste
                reduction in commercial applications. They offer many advantages
                over other traditional waste management:
              </p>
              <ul>
                <li>Turns food waste to compost in just 24 hours</li>
                <li>Reduce garbage volume and disposal costs</li>
                <li>Odourless and pest deterrent</li>
                <li>Sustainable and socially responsible</li>
              </ul>
            </Fade>
            <Fade top>
              <button className="view-btn">VIEW OUR PRODUCTS</button>
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
