import type { Dispatch, SetStateAction } from "react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import FormatNativeSvg from "../../shared/svg/FormatNative";
import styles from "./SubMenu.module.css";
import SubMenuButton from "./SubMenuButton";
import type {
  Device,
  DeviceMenuButton,
  Format,
  FormatMenuButton,
} from "../../../models/mockup.models";
import DeviceDesktopSvg from "../../shared/svg/DeviceDesktopSvg";
import DeviceMobileSvg from "../../shared/svg/DeviceMobileSvg";
import FormatCarouselSvg from "../../shared/svg/FormatCarouselSvg";
import FormatReelSvg from "../../shared/svg/FormatReelSvg";

const FORMAT_MENU_BUTTONS: FormatMenuButton[] = [
  { text: "1:1", svg: <FormatNativeSvg /> },
  { text: "carousel", svg: <FormatCarouselSvg /> },
  { text: "reel", svg: <FormatReelSvg /> },
];

const DEVICE_MENU_BUTTONS: DeviceMenuButton[] = [
  { text: "desktop", svg: <DeviceDesktopSvg /> },
  { text: "mobile", svg: <DeviceMobileSvg /> },
];

type SubMenuProps =
  | { title: "format"; setShow: Dispatch<SetStateAction<boolean>> }
  | { title: "device"; setShow: Dispatch<SetStateAction<boolean>> };

const SubMenu = ({ title, setShow }: SubMenuProps) => {
  const { setFormat, setDevice, format, device } = useMockupContext();

  return (
    <div
      className={styles.subMenu}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <p>{title}</p>

      <ul>
        {title === "format" &&
          FORMAT_MENU_BUTTONS.map((btn) => (
            <li key={btn.text}>
              <SubMenuButton<Format>
                text={btn.text}
                onSelect={setFormat}
                selected={format}
              >
                {btn.svg}
              </SubMenuButton>
            </li>
          ))}

        {title === "device" &&
          DEVICE_MENU_BUTTONS.map((btn) => (
            <li key={btn.text}>
              <SubMenuButton<Device>
                text={btn.text}
                onSelect={setDevice}
                selected={device}
              >
                {btn.svg}
              </SubMenuButton>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SubMenu;
