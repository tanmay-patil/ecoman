import "./index.scss";
import Fade from "react-reveal/Fade";
import { useState } from "react";

function FooterBar() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Fade bottom>
      <div
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        className="footer-bar-main"
      >
        {isHovering ? (
          <Fade bottom>
            <div className="text-container">Developed by Tanmay Patil</div>
          </Fade>
        ) : (
          <div className="text-container">
            <Fade top>
              &copy; Copyright 2020. All Rights Reserved by Ecoman.
            </Fade>
          </div>
        )}
      </div>
    </Fade>
  );
}

export default FooterBar;
