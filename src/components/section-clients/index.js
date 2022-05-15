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

  return (
    <>
      <Section className="section-clients-main" center={!isMobile}>
        <Fade left>
          <p className="title">INDUSTRIAL CLIENTELE</p>
        </Fade>
        <div className="clients-container">
          {industrialClients.map((client, index) => {
            return (
              <img
                key={index}
                className="img-client"
                src={client}
                alt="Client"
              />
            );
          })}
        </div>
      </Section>

      <Section className="section-clients-main" center={!isMobile}>
        <Fade left>
          <p className="title">GOVERNMENT CLIENTELE</p>
        </Fade>
        <div className="clients-container">
          {govtClients.map((client, index) => {
            return (
              <img
                key={index}
                className="img-client"
                src={client}
                alt="Client"
              />
            );
          })}
        </div>
      </Section>
    </>
  );
}

export default SectionClients;
