import "App.css";
import "App.scss";
import { logo } from "common/common-imports";
import FooterBar from "components/footber-bar";
import HeaderBar from "components/header-bar";

function App() {
  return (
    <>
      <HeaderBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Website under construction</p>
        </header>
      </div>

      <FooterBar />
    </>
  );
}

export default App;
