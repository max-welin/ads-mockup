import SettingsButton from "../SettingsButton";
import menuStyles from "../Settings.module.css";
import styles from "./DownloadButton.module.css";
import { Download } from "lucide-react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import { useCallback, useState } from "react";
import { toPng } from "html-to-image";

const DownloadButton = () => {
  const [showDownload, setShowDownload] = useState(false);

  const { mainRef } = useMockupContext();

  const handleDownload = useCallback(() => {
    if (!mainRef.current) return;

    toPng(mainRef.current, { cacheBust: true, pixelRatio: 2, fontEmbedCSS: "" })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "mockup.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  }, [mainRef]);

  return (
    <SettingsButton
      handleClick={handleDownload}
      setter={setShowDownload}
      className={`${styles.download} ${
        showDownload ? `${menuStyles.active}` : ""
      }`}
    >
      <Download size={32} />
      {showDownload && (
        <>
          <div
            className={`${menuStyles.whiteSpace} ${styles.downloadWhiteSpace}`}
          />
          <div className={styles.downloadBanner}>Download</div>
        </>
      )}
    </SettingsButton>
  );
};

export default DownloadButton;
