import type { Device, Format, Platform } from "../models/mockup.models";

export type DefaultData = {
  platform: Platform;
  url: string;
  device: Device;
  format: Format;
  image: string;
  ctaCopy: string;
  ctaSectionTitle: string;
  ctaSectionDescription: string;
  headerIcon: string;
  headerTitle: string;
  headerDescription: string;
};

export const DEFAULT_DATA: DefaultData = {
  platform: "facebook",
  url: "www.landrover.com",
  device: "desktop",
  format: "native",
  image: "/src/assets/land_rover.jpg",
  ctaCopy: "learn more",
  ctaSectionTitle: "Land Rover Velar",
  ctaSectionDescription: "Book a test drive",
  headerIcon: "/src/assets/land-rover-logo.jpg",
  headerTitle: "Land Rover",
  headerDescription:
    "Discover Land Rover's luxurious SUVs. Ready for adventure.",
};
