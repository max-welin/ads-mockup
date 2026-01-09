import FacebookMockup from "./components/FacebookMockup/FacebookMockup.";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MockupProvider from "./store/MockupContext";

function App() {
  return (
    <MockupProvider>
      <Header />
      <main style={{ padding: "16px", height: "100dvh" }}>
        <FacebookMockup />
      </main>
      <Footer />
    </MockupProvider>
  );
}

export default App;
