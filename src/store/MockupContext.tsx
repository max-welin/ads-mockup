import {
  createContext,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { CarouselCardData, Device, Format } from "../models/mockup.models";

interface MockupContextValue {
  mainRef: React.RefObject<HTMLElement | null>;
  headerTitle: string;
  headerImg: string;
  mainImg: string;
  carouselCardData: CarouselCardData[];
  headerDescription: string;
  ctaCopy: string;
  ctaTitle: string;
  url: string;
  ctaSectionDescription: string;
  showImageButton: boolean;
  device: Device;
  format: Format;
  setHeaderTitle: Dispatch<SetStateAction<string>>;
  setHeaderImg: Dispatch<SetStateAction<string>>;
  setMainImg: Dispatch<SetStateAction<string>>;
  setCarouselCardData: Dispatch<SetStateAction<CarouselCardData[]>>;
  setHeaderDescription: Dispatch<SetStateAction<string>>;
  setCtaCopy: Dispatch<SetStateAction<string>>;
  setCtaTitle: Dispatch<SetStateAction<string>>;
  setUrl: Dispatch<SetStateAction<string>>;
  setCtaSectionDescription: Dispatch<SetStateAction<string>>;
  setShowImageButton: Dispatch<SetStateAction<boolean>>;
  setDevice: Dispatch<SetStateAction<Device>>;
  setFormat: Dispatch<SetStateAction<Format>>;
}

interface MockupProviderProps {
  children: ReactNode;
}

export const MockupContext = createContext<MockupContextValue | null>(null);

const MockupProvider = ({ children }: MockupProviderProps) => {
  const [headerImg, setHeaderImg] = useState<string>(
    "/src/assets/land-rover-logo.jpg"
  );
  const [mainImg, setMainImg] = useState<string>("/src/assets/land_rover.jpg");
  const [ctaTitle, setCtaTitle] = useState<string>("Land Rover Velar");
  const [headerTitle, setHeaderTitle] = useState<string>("Land Rover");
  const [headerDescription, setHeaderDescription] = useState<string>(
    "Discover Land Rover's luxurious SUVs. Ready for adventure."
  );
  const [ctaSectionDescription, setCtaSectionDescription] =
    useState<string>("Book a test drive");
  const [ctaCopy, setCtaCopy] = useState<string>("learn more");
  const [url, setUrl] = useState<string>("www.landrover.com");
  const [device, setDevice] = useState<Device>("desktop");
  const [format, setFormat] = useState<Format>("native");
  const [carouselCardData, setCarouselCardData] = useState<CarouselCardData[]>([
    {
      title: headerTitle,
      img: mainImg,
      description: ctaSectionDescription,
      ctaCopy: ctaCopy,
    },
    {
      title: headerTitle,
      img: mainImg,
      description: ctaSectionDescription,
      ctaCopy: ctaCopy,
    },
    {
      title: headerTitle,
      img: mainImg,
      description: ctaSectionDescription,
      ctaCopy: ctaCopy,
    },
  ]);

  const [showImageButton, setShowImageButton] = useState<boolean>(false);

  const mainRef = useRef<HTMLElement>(null);

  const value: MockupContextValue = {
    mainRef,
    headerTitle,
    headerImg,
    mainImg,
    carouselCardData,
    headerDescription,
    ctaCopy,
    ctaTitle,
    url,
    ctaSectionDescription,
    showImageButton,
    device,
    format,
    setHeaderTitle,
    setHeaderImg,
    setMainImg,
    setCarouselCardData,
    setHeaderDescription,
    setCtaCopy,
    setCtaTitle,
    setUrl,
    setCtaSectionDescription,
    setShowImageButton,
    setDevice,
    setFormat,
  };

  return (
    <MockupContext.Provider value={value}>{children}</MockupContext.Provider>
  );
};

export default MockupProvider;
