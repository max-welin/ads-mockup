import type { JSX } from "react";

export type Format = "1:1" | "carousel" | "reel";

export type Device = "desktop" | "mobile";

export type FormatMenuButton = {
  text: Format;
  svg: JSX.Element;
};

export type DeviceMenuButton = {
  text: Device;
  svg: JSX.Element;
};
