import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface MockupContextValue {
  headerTitle: string;
  headerImg: string;
  headerDescription: string;
  ctaText: string;
  url: string;
  ctaSectionDescription: string;
  setHeaderTitle: Dispatch<SetStateAction<string>>;
  setHeaderImg: Dispatch<SetStateAction<string>>;
  setHeaderDescription: Dispatch<SetStateAction<string>>;
  setCtaText: Dispatch<SetStateAction<string>>;
  setUrl: Dispatch<SetStateAction<string>>;
  setCtaSectionDescription: Dispatch<SetStateAction<string>>;
}

interface MockupProviderProps {
  children: ReactNode;
}

export const MockupContext = createContext<MockupContextValue | null>(null);

const MockupProvider = ({ children }: MockupProviderProps) => {
  const [headerTitle, setHeaderTitle] = useState("Land Rover");
  const [headerImg, setHeaderImg] = useState("/land_rover.jpg");
  const [headerDescription, setHeaderDescription] = useState(
    "Explore uncompromising capability and design."
  );
  const [ctaText, setCtaText] = useState("Discover more");
  const [url, setUrl] = useState("/discover");
  const [ctaSectionDescription, setCtaSectionDescription] = useState(
    "Learn more about our latest models and offers."
  );

  const value: MockupContextValue = {
    headerTitle,
    headerImg,
    headerDescription,
    ctaText,
    url,
    ctaSectionDescription,
    setHeaderTitle,
    setHeaderImg,
    setHeaderDescription,
    setCtaText,
    setUrl,
    setCtaSectionDescription,
  };

  return (
    <MockupContext.Provider value={value}>
      {children}
    </MockupContext.Provider>
  );
};

export default MockupProvider;
