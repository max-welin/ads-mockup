import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MockupProvider from "./store/MockupProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MockupProvider>
      <App />
    </MockupProvider>
  </StrictMode>,
);
