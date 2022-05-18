import { loader, logo } from "common/common-imports";
import { Fade, Zoom } from "react-reveal";
import "./index.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <Fade duration={2000}>
        <img src={loader} className="img-loader" alt="Machine" />
      </Fade>
      <Zoom duration={2500}>
        <img src={logo} className="img-logo" alt="Machine" />
      </Zoom>
    </div>
  );
};

export default Loader;
