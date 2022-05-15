import "./index.scss";
import Fade from "react-reveal/Fade";

function FooterBar() {
  return (
    <Fade bottom>
      <div className="footer-bar-main">
        <div className="text-container">
          Powered by Ecoman, Developed by Tanmay
        </div>
      </div>
    </Fade>
  );
}

export default FooterBar;
