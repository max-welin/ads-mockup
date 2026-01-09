import FacebookMockup from "./components/FacebookMockup/FacebookMockup.";
import MockupProvider from "./store/MockupContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { useCallback, useRef } from "react";
import { toPng } from "html-to-image";

function App() {
  const mainRef = useRef<HTMLElement>(null);

  const handleClick = useCallback(() => {
    if (!mainRef.current) return;

    toPng(mainRef.current, { cacheBust: true, pixelRatio: 2, fontEmbedCSS: "" })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "mockup.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  }, [mainRef]);

  return (
    <MockupProvider>
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
      <button onClick={handleClick}>hej</button>
      <Footer />
    </MockupProvider>
  );
}

export default App;
