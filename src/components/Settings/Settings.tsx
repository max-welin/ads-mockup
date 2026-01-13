import styles from "./Settings.module.css";
import { useState } from "react";
import SettingsButton from "./SettingsButton";
import DeviceSvg from "../shared/svg/DeviceSvg";
import FormatSvg from "../shared/svg/FormatSvg";
import DownloadButton from "./DownloadButton/DownloadButton";
import SubMenu from "./SubMenu/SubMenu";

const SettingsMenu = () => {
  const [showFormat, setShowFormat] = useState(false);
  const [showDevice, setShowDevice] = useState(true);

  return (
    <div className={styles.settingsContainer}>
      {showFormat && <SubMenu title="format" />}
      {showDevice && <SubMenu title="device" />}
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
        <DeviceSvg />
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
