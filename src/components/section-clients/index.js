import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
  client17,
  client18,
  client19,
  client20,
} from "common/industrial-clients";
import { isMobile } from "react-device-detect";
import {
  govt_client1,
  govt_client2,
  govt_client3,
  govt_client4,
  govt_client5,
  govt_client6,
  govt_client7,
  govt_client8,
  govt_client9,
  govt_client10,
  govt_client11,
  govt_client12,
  govt_client13,
} from "common/govt-clients";
import {
  builder_client1,
  builder_client2,
  builder_client3,
  builder_client4,
  builder_client5,
  builder_client6,
  builder_client7,
  builder_client8,
  builder_client9,
  builder_client10,
  builder_client11,
  builder_client12,
  builder_client13,
  builder_client14,
  builder_client15,
  builder_client16,
  builder_client17,
  builder_client18,
} from "common/builder-clients";
import {
  hotels_client1,
  hotels_client2,
  hotels_client3,
  hotels_client4,
  hotels_client5,
  hotels_client6,
  hotels_client7,
  hotels_client8,
  hotels_client9,
  hotels_client10,
  hotels_client11,
  hotels_client12,
  hotels_client13,
  hotels_client14,
  hotels_client15,
  hotels_client16,
  hotels_client17,
  hotels_client18,
  hotels_client19,
} from "common/hotel-clients";

function SectionClients() {
  const industrialClients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
    client14,
    client15,
    client16,
    client17,
    client18,
    client19,
    client20,
  ];

  const govtClients = [
    govt_client1,
    govt_client2,
    govt_client3,
    govt_client4,
    govt_client5,
    govt_client6,
    govt_client7,
    govt_client8,
    govt_client9,
    govt_client10,
    govt_client11,
    govt_client12,
    govt_client13,
  ];

  const builderClients = [
    builder_client1,
    builder_client2,
    builder_client3,
    builder_client4,
    builder_client5,
    builder_client6,
    builder_client7,
    builder_client8,
    builder_client9,
    builder_client10,
    builder_client11,
    builder_client12,
    builder_client13,
    builder_client14,
    builder_client15,
    builder_client16,
    builder_client17,
    builder_client18,
  ];

  const hotelsClients = [
    hotels_client1,
    hotels_client2,
    hotels_client3,
    hotels_client4,
    hotels_client5,
    hotels_client6,
    hotels_client7,
    hotels_client8,
    hotels_client9,
    hotels_client10,
    hotels_client11,
    hotels_client12,
    hotels_client13,
    hotels_client14,
    hotels_client15,
    hotels_client16,
    hotels_client17,
    hotels_client18,
    hotels_client19,
  ];

  return (
    <>
      <Section
        id={"section-clients"}
        className="section-clients-main"
        center={!isMobile}
      >
        <Fade left>
          <p className="title">INDUSTRIAL CLIENTELE</p>
        </Fade>
        <div className="clients-container">
          {industrialClients.map((client, index) => {
            return (
              <Fade left duration={500 + (index + 1) * 100}>
                <div className="img-container">
                  <img
                    key={index}
                    className="img-client"
                    src={client}
                    alt="Client"
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      </Section>

      <Section
        id="section-builderClients"
        className="section-clients-main"
        center={!isMobile}
      >
        <Fade left>
          <p className="title">BUILDER CLIENTELE</p>
        </Fade>
        <div className="clients-container">
          {builderClients.map((client, index) => {
            return (
              <Fade right duration={500 + (index + 1) * 100}>
                <div className="img-container">
                  <img
                    key={index}
                    className="img-client"
                    src={client}
                    alt="Client"
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      </Section>

      <Section
        id="section-hotelClients"
        className="section-clients-main"
        center={!isMobile}
      >
        <Fade left>
          <p className="title">HOTEL CLIENTELE</p>
        </Fade>
        <div className="clients-container">
          {hotelsClients.map((client, index) => {
            return (
              <Fade right duration={500 + (index + 1) * 100}>
                <div className="img-container">
                  <img
                    key={index}
                    className="img-client"
                    src={client}
                    alt="Client"
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      </Section>

      <Section
        id="section-govtClients"
        className="section-clients-main"
        center={!isMobile}
      >
        <Fade left>
          <p className="title">GOVERNMENT CLIENTELE</p>
        </Fade>
        <div className="clients-container">
          {govtClients.map((client, index) => {
            return (
              <Fade right duration={500 + (index + 1) * 100}>
                <div className="img-container">
                  <img
                    key={index}
                    className="img-client"
                    src={client}
                    alt="Client"
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      </Section>
    </>
  );
}

export default SectionClients;
