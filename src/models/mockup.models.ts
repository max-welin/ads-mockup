import type { JSX } from "react";

export type Format = "native" | "carousel";

export type Platform = "facebook" | "instagram";

export type Device = "desktop" | "mobile";

export type FormatMenuButton = {
  text: Format;
  svg: JSX.Element;
};

export type DeviceMenuButton = {
  text: Device;
  svg: JSX.Element;
};

export interface CarouselCardData {
  img: string;
  title: string;
  description: string;
  ctaCopy: string;
}
