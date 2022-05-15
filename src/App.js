import "fonts.css";
import "App.scss";
import FooterBar from "components/footber-bar";
import HeaderBar from "components/header-bar";
import SectionTagline from "components/section-tagline";
import SectionHeadline from "components/section-headline";
import { useEffect, useRef } from "react";

function App() {
  const taglineSectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      executeScroll();
    }, 2000);
  }, []);

  const executeScroll = () => {
    taglineSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeaderBar />
      <div className="app-main">
        <SectionHeadline />
        <div ref={taglineSectionRef}></div>
        <SectionTagline ref={taglineSectionRef} />
      </div>

      <FooterBar />
    </>
  );
}

export default App;
