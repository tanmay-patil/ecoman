import "./index.scss";
import {
  installation,
  BackgroundImage11,
  government,
  builder,
  hospital,
  industry,
  institution,
  restaurant,
} from "common/common-imports";
import Section from "components/section";
import { Fade } from "react-reveal";

function Applications() {
  const data = {
    row1: [
      {
        icon: installation,
        label: "Total Waste solutions at your doorstep",
      },
    ],
  };

  const applicationData = [
    {
      text: "Builders",
      icon: builder,
    },
    {
      text: "Hotels",
      icon: restaurant,
    },
    {
      text: "Government",
      icon: government,
    },
    {
      text: "Hospitals",
      icon: hospital,
    },
    {
      text: "Industries",
      icon: industry,
    },
    {
      text: "Institutions",
      icon: institution,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage11})`,
        // backgroundRepeat: "round",
        backgroundSize: "cover",
      }}
    >
      <Section
        id={"section-applications"}
        className="section-applications-main"
      >
        <div className="top-container">
          <Fade left>
            <div className="right-section">
              <p className="title1">APPLICATIONS</p>
              <div className="container">
                {applicationData &&
                  applicationData.map((obj) => (
                    <Fade cascade left>
                      <div className="img-container">
                        <img src={obj.icon} alt="application-icon" />
                        <p>{obj.text}</p>
                      </div>
                    </Fade>
                  ))}
              </div>
            </div>
          </Fade>
        </div>
        <div className="bottom-container">
          {/* <SectionHighlightsV2 data={data} /> */}
          <p className="single-highlight-text">
            Total Waste solution at your doorstep
          </p>
        </div>
      </Section>
    </div>
  );
}

export default Applications;
