import "fonts.css";
import "App.scss";
import FooterBar from "components/footber-bar";
import HeaderBar from "components/header-bar";
import SectionTagline from "components/section-tagline";
import { useEffect, useRef, useState } from "react";
import SectionVision from "components/section-vision";
import SectionClients from "components/section-clients";
import Loader from "components/loader";

function App() {
  const taglineSectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2500);
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <>
      <HeaderBar />
      <div className="app-main">
        <div ref={taglineSectionRef} />
        <SectionTagline />
        <div ref={visionSectionRef} />
        <SectionVision />
        <SectionClients />
      </div>

      <FooterBar />
    </>
  );
}

export default App;
