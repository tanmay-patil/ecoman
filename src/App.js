import "fonts.css";
import "App.scss";
import FooterBar from "components/footber-bar";
import HeaderBar from "components/header-bar";
import SectionTagline from "components/section-tagline";
import { useEffect, useState } from "react";
import SectionClients from "components/section-clients";
import Loader from "components/loader";
import SectionProfile from "components/section-profile";
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
        <SectionTagline />
        <SectionCommercial />
        <SectionVideo />
        <SectionApplications />
        <SectionClients />
        <SectionProfile />
      </div>

      <FooterBar />
    </>
  );
}

export default App;
