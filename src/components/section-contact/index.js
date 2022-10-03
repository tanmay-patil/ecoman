import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";

function SectionContact() {
  return (
    <Section id={"section-contact"} className="section-contact-main" center>
      <Fade left>
        <p className="main-title">Contact US</p>
      </Fade>

      <div className="container">
        <div className="sub-container">
          <div className="title">HEAD OFFICE</div>
          <p>Ecoman Enviro Solutions Pvt. Ltd.</p>
          <p>Gat No. 189, Bhalekar Chowk, Jyotiba Nagar,</p>
          <p>Talawade, Pune - 412114</p>
        </div>
        <div className="sub-container">
          <div className="title">CONTACT</div>
          <p>+91 7720999222</p>
        </div>
      </div>
    </Section>
  );
}

export default SectionContact;
