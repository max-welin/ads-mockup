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
  mainImg: string;
  headerDescription: string;
  ctaCopy: string;
  ctaTitle: string;
  url: string;
  ctaSectionDescription: string;
  showImageButton: boolean;
  setHeaderTitle: Dispatch<SetStateAction<string>>;
  setHeaderImg: Dispatch<SetStateAction<string>>;
  setMainImg: Dispatch<SetStateAction<string>>;
  setHeaderDescription: Dispatch<SetStateAction<string>>;
  setCtaCopy: Dispatch<SetStateAction<string>>;
  setCtaTitle: Dispatch<SetStateAction<string>>;
  setUrl: Dispatch<SetStateAction<string>>;
  setCtaSectionDescription: Dispatch<SetStateAction<string>>;
  setShowImageButton: Dispatch<SetStateAction<boolean>>;
}

interface MockupProviderProps {
  children: ReactNode;
}

export const MockupContext = createContext<MockupContextValue | null>(null);

const MockupProvider = ({ children }: MockupProviderProps) => {
  const [headerTitle, setHeaderTitle] = useState("Land Rover");
  const [headerImg, setHeaderImg] = useState("/src/assets/land-rover-logo.jpg");
  const [mainImg, setMainImg] = useState("/src/assets/land_rover.jpg");
  const [headerDescription, setHeaderDescription] = useState(
    "Discover Land Rover's luxurious SUVs. Ready for adventure."
  );
  const [ctaCopy, setCtaCopy] = useState("learn more");
  const [ctaTitle, setCtaTitle] = useState("Land Rover Velar");
  const [url, setUrl] = useState("www.landrover.com");
  const [ctaSectionDescription, setCtaSectionDescription] =
    useState("Book a test drive");
  const [showImageButton, setShowImageButton] = useState(false);

  const value: MockupContextValue = {
    headerTitle,
    headerImg,
    mainImg,
    headerDescription,
    ctaCopy,
    ctaTitle,
    url,
    ctaSectionDescription,
    showImageButton,
    setHeaderTitle,
    setHeaderImg,
    setMainImg,
    setHeaderDescription,
    setCtaCopy,
    setCtaTitle,
    setUrl,
    setCtaSectionDescription,
    setShowImageButton,
  };

  return (
    <MockupContext.Provider value={value}>{children}</MockupContext.Provider>
  );
};

export default MockupProvider;
