import "fonts.css";
import "App.scss";
import FooterBar from "components/footber-bar";
import HeaderBar from "components/header-bar";
import SectionTagline from "components/section-tagline";
import { useEffect, useState } from "react";
import SectionClients from "components/section-clients";
import Loader from "components/loader";
import SectionProfile from "components/section-profile";
import SectionContribution from "components/section-contribution";
import SectionVideo from "components/section-video";
import SectionCommercial from "components/section-commercial";
import SectionApplications from "components/section-applications";

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
        {/* Home sections */}
        <SectionTagline />
        {/* <SectionHighlights /> */}
        <SectionCommercial />
        <SectionVideo />
        <SectionApplications />

        {/* About Us sections */}
        {/* <SectionVision /> */}
        <SectionProfile />
        <SectionContribution />
        <SectionClients />
      </div>

      <FooterBar />
    </>
  );
}

export default App;
