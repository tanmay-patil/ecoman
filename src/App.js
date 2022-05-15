import "fonts.css";
import "App.scss";
import FooterBar from "components/footber-bar";
import HeaderBar from "components/header-bar";
import SectionTagline from "components/section-tagline";
import SectionHeadline from "components/section-headline";
import { useEffect, useRef } from "react";
import SectionVision from "components/section-vision";

function App() {
  const taglineSectionRef = useRef(null);
  const visionSectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      executeInitialScroll();
    }, 2000);
  }, []);

  const executeInitialScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: taglineSectionRef.current.offsetTop - 80,
    });
  };

  return (
    <>
      <HeaderBar />
      <div className="app-main">
        <section>
          <SectionHeadline />
        </section>
        <div ref={taglineSectionRef} />
        <section>
          <SectionTagline />
        </section>
        <div ref={visionSectionRef} />
        <section>
          <SectionVision />
        </section>
      </div>

      <FooterBar />
    </>
  );
}

export default App;
