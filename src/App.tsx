import FacebookMockup from "./components/FacebookMockup/FacebookMockup.";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css";

import SettingsMenu from "./components/Settings/Settings";
import { useMockupContext } from "./hooks/useMockupContext";

function App() {
  const { mainRef, downloading } = useMockupContext();

  return (
    <>
      {downloading && (
        <div id="loading">
          <div />
        </div>
      )}
      <Header />
      <main ref={mainRef}>
        <FacebookMockup />
      </main>
      <SettingsMenu />
      <Footer />
    </>
  );
}

export default App;
