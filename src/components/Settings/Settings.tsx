import styles from "./Settings.module.css";
import { useState } from "react";
import SettingsButton from "./SettingsButton";
import FormatSvg from "../shared/svg/FormatNativeSvg";
import DownloadButton from "./DownloadButton/DownloadButton";
import SubMenu from "./SubMenu/SubMenu";
import DeviceDesktopSvg from "../shared/svg/DeviceDesktopSvg";
import { useMockupContext } from "../../hooks/useMockupContext";
import FormatCarouselSvg from "../shared/svg/FormatCarouselSvg";
import DeviceMobileSvg from "../shared/svg/DeviceMobileSvg";

const SettingsMenu = () => {
  const [showFormat, setShowFormat] = useState(false);
  const [showDevice, setShowDevice] = useState(false);

  const { format, device, platform } = useMockupContext();

  return (
    <div className={styles.settingsContainer}>
      {platform === "facebook" && (
        <>
          {showFormat && <SubMenu title="format" setShow={setShowFormat} />}
          {showDevice && <SubMenu title="device" setShow={setShowDevice} />}
          <SettingsButton
            setter={setShowFormat}
            className={`${styles.format} ${showFormat ? `${styles.active}` : ""}`}
          >
            {format === "native" ? <FormatSvg /> : <FormatCarouselSvg />}
            {showFormat && (
              <div
                className={`${styles.whiteSpace} ${styles.formatWhiteSpace}`}
              />
            )}
          </SettingsButton>
          <SettingsButton
            setter={setShowDevice}
            className={`${styles.options} ${showDevice ? `${styles.active}` : ""}`}
          >
            {device === "desktop" ? <DeviceDesktopSvg /> : <DeviceMobileSvg />}
            {showDevice && (
              <div
                className={`${styles.whiteSpace} ${styles.deviceWhiteSpace}`}
              />
            )}
          </SettingsButton>
          <div className={styles.divider} />
        </>
      )}
      <DownloadButton />
    </div>
  );
};

export default SettingsMenu;
