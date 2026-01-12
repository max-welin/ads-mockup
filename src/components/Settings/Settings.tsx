import { Download } from "lucide-react";
import styles from "./Settings.module.css";
import { useState } from "react";

const SettingsMenu = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showFormat, setShowFormat] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.settingsContainer}>
        <div className={styles.buttonContainer}>
          <button
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
          >
            <Download size={30} />
            <div className={styles.whiteSpace}></div>
          </button>
          <button
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
          >
            <Download size={30} />
          </button>
          <div className={styles.divider} />
          <button
            onMouseEnter={() => setShowDownload(true)}
            onMouseLeave={() => setShowDownload(false)}
          >
            <Download size={30} />
          </button>
        </div>
        {showOptions && (
          <div
            className={styles.optionsContainer}
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
          >
            asd
          </div>
        )}
        {showDownload && (
          <div
            className={styles.download}
            onMouseEnter={() => setShowDownload(true)}
            onMouseLeave={() => setShowDownload(false)}
          >
            Download
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsMenu;
