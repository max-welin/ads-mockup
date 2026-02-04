import { useRef, useState, type ReactNode } from "react";
import type {
  CarouselCardData,
  Device,
  Format,
  Platform,
} from "../models/mockup.models";
import type Slider from "react-slick";
import { DEFAULT_DATA } from "../config/defaultData";
import type { MockupContextValue } from "./mockup.model";
import { MockupContext } from "./MockupContext";

interface MockupProviderProps {
  children: ReactNode;
}

const MockupProvider = ({ children }: MockupProviderProps) => {
  const [url, setUrl] = useState<string>(DEFAULT_DATA.url);
  const [device, setDevice] = useState<Device>(DEFAULT_DATA.device);
  const [format, setFormat] = useState<Format>(DEFAULT_DATA.format);
  const [mainImg, setMainImg] = useState<string>(DEFAULT_DATA.image);
  const [ctaCopy, setCtaCopy] = useState<string>(DEFAULT_DATA.ctaCopy);
  const [platform, setPlatform] = useState<Platform>(DEFAULT_DATA.platform);
  const [ctaTitle, setCtaTitle] = useState<string>(
    DEFAULT_DATA.ctaSectionTitle,
  );
  const [headerImg, setHeaderImg] = useState<string>(DEFAULT_DATA.headerIcon);
  const [headerTitle, setHeaderTitle] = useState<string>(
    DEFAULT_DATA.headerTitle,
  );
  const [downloading, setDownloading] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [headerDescription, setHeaderDescription] = useState<string>(
    DEFAULT_DATA.headerDescription,
  );
  const [ctaSectionDescription, setCtaSectionDescription] = useState<string>(
    DEFAULT_DATA.ctaSectionDescription,
  );
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
    platform,
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
    setPlatform,
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
