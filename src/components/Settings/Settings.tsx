import styles from "./Settings.module.css";
import { useState } from "react";
import SettingsButton from "./SettingsButton";
import FormatSvg from "../shared/svg/FormatNative";
import DownloadButton from "./DownloadButton/DownloadButton";
import SubMenu from "./SubMenu/SubMenu";
import DeviceDesktopSvg from "../shared/svg/DeviceDesktopSvg";

const SettingsMenu = () => {
  const [showFormat, setShowFormat] = useState(false);
  const [showDevice, setShowDevice] = useState(false);

  return (
    <div className={styles.settingsContainer}>
      {showFormat && <SubMenu title="format" setShow={setShowFormat} />}
      {showDevice && <SubMenu title="device" setShow={setShowDevice} />}
      <SettingsButton
        setter={setShowFormat}
        className={`${styles.format} ${showFormat ? `${styles.active}` : ""}`}
      >
        <FormatSvg />
        {showFormat && (
          <div className={`${styles.whiteSpace} ${styles.formatWhiteSpace}`} />
        )}
      </SettingsButton>
      <SettingsButton
        setter={setShowDevice}
        className={`${styles.options} ${showDevice ? `${styles.active}` : ""}`}
      >
        <DeviceDesktopSvg />
        {showDevice && (
          <div className={`${styles.whiteSpace} ${styles.deviceWhiteSpace}`} />
        )}
      </SettingsButton>
      <div className={styles.divider} />
      <DownloadButton />
    </div>
  );
};

export default SettingsMenu;
