import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css";

import SettingsMenu from "./components/Settings/Settings";
import { useMockupContext } from "./hooks/useMockupContext";
import FacebookMockup from "./components/FacebookMockup/FacebookMockup";
import PlatformMenu from "./components/PlatformMenu/PlatformMenu";
import InstagramMockup from "./components/InstagramMockup/InstagramMockup";

function App() {
  const { mainRef, downloading, platform } = useMockupContext();

  return (
    <>
      {downloading && (
        <div id="loading">
          <div />
        </div>
      )}
      <Header />
      <main ref={mainRef}>
        {platform === "facebook" ? (
          <FacebookMockup />
        ) : platform === "instagram" ? (
          <InstagramMockup />
        ) : (
          <FacebookMockup />
        )}
      </main>
      <SettingsMenu />
      <PlatformMenu />
      <Footer />
    </>
  );
}

export default App;
