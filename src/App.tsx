import FacebookMockup from "./components/FacebookMockup/FacebookMockup.";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import SettingsMenu from "./components/Settings/Settings";
import { useMockupContext } from "./hooks/useMockupContext";

function App() {
  const { mainRef } = useMockupContext();

  return (
    <>
      <Header />
      <main
        ref={mainRef}
        style={{
          padding: "20px",
          backgroundColor: "#f2f0f5",
        }}
      >
        <FacebookMockup />
      </main>
      <SettingsMenu />
      <Footer />
    </>
  );
}

export default App;
