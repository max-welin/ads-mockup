import {
  createContext,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { CarouselCardData, Device, Format } from "../models/mockup.models";
import type Slider from "react-slick";

interface MockupContextValue {
  url: string;
  device: Device;
  format: Format;
  mainRef: React.RefObject<HTMLElement | null>;
  ctaCopy: string;
  mainImg: string;
  slickRef: React.RefObject<Slider | null>;
  ctaTitle: string;
  headerImg: string;
  carouselRef: React.RefObject<HTMLDivElement | null>;
  headerTitle: string;
  downloading: boolean;
  showImageButton: boolean;
  carouselCardData: CarouselCardData[];
  currentSlideIndex: number;
  headerDescription: string;
  ctaSectionDescription: string;
  setUrl: Dispatch<SetStateAction<string>>;
  setDevice: Dispatch<SetStateAction<Device>>;
  setFormat: Dispatch<SetStateAction<Format>>;
  setMainImg: Dispatch<SetStateAction<string>>;
  setCtaCopy: Dispatch<SetStateAction<string>>;
  setCtaTitle: Dispatch<SetStateAction<string>>;
  setHeaderImg: Dispatch<SetStateAction<string>>;
  setDownloading: Dispatch<SetStateAction<boolean>>;
  setHeaderTitle: Dispatch<SetStateAction<string>>;
  setShowImageButton: Dispatch<SetStateAction<boolean>>;
  setCarouselCardData: Dispatch<SetStateAction<CarouselCardData[]>>;
  setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
  setHeaderDescription: Dispatch<SetStateAction<string>>;
  setCtaSectionDescription: Dispatch<SetStateAction<string>>;
}

interface MockupProviderProps {
  children: ReactNode;
}

export const MockupContext = createContext<MockupContextValue | null>(null);

const MockupProvider = ({ children }: MockupProviderProps) => {
  const [url, setUrl] = useState<string>("www.landrover.com");
  const [device, setDevice] = useState<Device>("desktop");
  const [format, setFormat] = useState<Format>("native");
  const [mainImg, setMainImg] = useState<string>("/src/assets/land_rover.jpg");
  const [ctaCopy, setCtaCopy] = useState<string>("learn more");
  const [ctaTitle, setCtaTitle] = useState<string>("Land Rover Velar");
  const [headerImg, setHeaderImg] = useState<string>(
    "/src/assets/land-rover-logo.jpg"
  );
  const [headerTitle, setHeaderTitle] = useState<string>("Land Rover");
  const [downloading, setDownloading] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [headerDescription, setHeaderDescription] = useState<string>(
    "Discover Land Rover's luxurious SUVs. Ready for adventure."
  );
  const [ctaSectionDescription, setCtaSectionDescription] =
    useState<string>("Book a test drive");
  const [showImageButton, setShowImageButton] = useState<boolean>(false);

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

  const mainRef = useRef<HTMLElement>(null);
  const slickRef = useRef<Slider | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const value: MockupContextValue = {
    url,
    device,
    format,
    ctaCopy,
    mainImg,
    mainRef,
    slickRef,
    ctaTitle,
    headerImg,
    carouselRef,
    downloading,
    headerTitle,
    showImageButton,
    carouselCardData,
    currentSlideIndex,
    headerDescription,
    ctaSectionDescription,
    setUrl,
    setDevice,
    setFormat,
    setCtaCopy,
    setMainImg,
    setCtaTitle,
    setHeaderImg,
    setHeaderTitle,
    setDownloading,
    setShowImageButton,
    setCarouselCardData,
    setHeaderDescription,
    setCurrentSlideIndex,
    setCtaSectionDescription,
  };

  return (
    <MockupContext.Provider value={value}>{children}</MockupContext.Provider>
  );
};

export default MockupProvider;
