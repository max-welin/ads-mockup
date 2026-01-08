import { useContext } from "react";
import { MockupContext } from "../store/MockupContext";

export const useMockupContext = () => {
  const context = useContext(MockupContext);
  if (!context) {
    throw new Error("useMockupContext must be used within MockupProvider");
  }
  return context;
};
