import { loader, logo } from "common/common-imports";
import { Fade, Zoom } from "react-reveal";
import { useEffect, useState } from "react";
import "./index.scss";

const Loader = () => {
  const [showLeaves, setShowLeaves] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLeaves(false);
    }, 1500);
  }, []);

  return (
    <div className="loader-container">
      {showLeaves && (
        <Fade duration={2000}>
          <img src={loader} className="img-loader" alt="Machine" />
        </Fade>
      )}
      <Zoom duration={1500}>
        <img src={logo} className="img-logo" alt="Machine" />
      </Zoom>
    </div>
  );
};

export default Loader;
