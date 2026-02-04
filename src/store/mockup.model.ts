import type Slider from "react-slick";
import type {
  CarouselCardData,
  Device,
  Format,
  Platform,
} from "../models/mockup.models";
import type { Dispatch, SetStateAction } from "react";

export interface MockupContextValue {
  url: string;
  device: Device;
  format: Format;
  mainRef: React.RefObject<HTMLElement | null>;
  ctaCopy: string;
  mainImg: string;
  platform: Platform;
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
  setPlatform: Dispatch<SetStateAction<Platform>>;
  setHeaderImg: Dispatch<SetStateAction<string>>;
  setDownloading: Dispatch<SetStateAction<boolean>>;
  setHeaderTitle: Dispatch<SetStateAction<string>>;
  setShowImageButton: Dispatch<SetStateAction<boolean>>;
  setCarouselCardData: Dispatch<SetStateAction<CarouselCardData[]>>;
  setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
  setHeaderDescription: Dispatch<SetStateAction<string>>;
  setCtaSectionDescription: Dispatch<SetStateAction<string>>;
}
