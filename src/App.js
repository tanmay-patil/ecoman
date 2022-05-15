import "App.css";
import "App.scss";
import { logo } from "common/common-imports";
import FooterBar from "components/footber-bar";
import HeaderBar from "components/header-bar";
import { Fade } from "react-reveal";

function App() {
  return (
    <>
      <HeaderBar />

      <div className="App">
        <header className="App-header">
          <Fade bottom>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Website under construction</p>
          </Fade>
        </header>
      </div>

      <FooterBar />
    </>
  );
}

export default App;
