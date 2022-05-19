import "fonts.css";
import "App.scss";
import FooterBar from "components/footber-bar";
import HeaderBar from "components/header-bar";
import SectionTagline from "components/section-tagline";
import { useEffect, useState } from "react";
import SectionVision from "components/section-vision";
import SectionClients from "components/section-clients";
import Loader from "components/loader";
import SectionProcess from "components/section-process";
import SectionProfile from "components/section-profile";
import SectionContribution from "components/section-contribution";

function App() {
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
        <SectionTagline />
        <SectionVision />
        <SectionProcess />
        <SectionProfile />
        <SectionContribution />
        <SectionClients />
      </div>

      <FooterBar />
    </>
  );
}

export default App;
