import "./index.scss";
import Section from "components/section";
import { Fade } from "react-reveal";

function SectionContact() {
  return (
    <Section id={"section-contact"} className="section-contact-main" center>
      <Fade left>
        <p className="main-title">Contact Us</p>
      </Fade>

      <div className="container">
        <div className="sub-container">
          <div className="title">INQUIRIES</div>
          <p>inquiries@ecoman.in</p>
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
