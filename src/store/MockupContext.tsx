import { createContext } from "react";
import type { MockupContextValue } from "./mockup.model";

export const MockupContext = createContext<MockupContextValue | null>(null);
