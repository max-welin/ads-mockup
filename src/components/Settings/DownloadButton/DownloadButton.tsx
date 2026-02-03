import SettingsButton from "../SettingsButton";
import menuStyles from "../Settings.module.css";
import styles from "./DownloadButton.module.css";
import { useMockupContext } from "../../../hooks/useMockupContext";
import { useState } from "react";
import { toPng } from "html-to-image";
import DownloadSvg from "../../shared/svg/DownloadSvg";

const DownloadButton = () => {
  const [showDownload, setShowDownload] = useState(false);
  const { platform } = useMockupContext();

  const {
    mainRef,
    carouselRef,
    format,
    setDownloading,
    slickRef,
    currentSlideIndex,
  } = useMockupContext();

  const downloadTimeout = format === "carousel" ? 750 : 0;
  const borderTopLeftRadius = platform === "instagram" ? "12px" : "0px";

  const handleDownload = () => {
    if (!mainRef.current) return;

    if (format === "carousel") {
      setDownloading(true);
      slickRef.current?.slickGoTo(0, true);
      const carouselList = carouselRef.current?.childNodes[0]
        .childNodes[1] as HTMLElement;
      mainRef.current.style.width = `${carouselList?.scrollWidth + 30}px`;
      if (carouselList) {
        carouselList.style.overflow = "visible";
        carouselList.style.zIndex = "11";
      }
    }

    setTimeout(() => {
      toPng(mainRef.current!, {
        cacheBust: true,
        pixelRatio: 2,
        fontEmbedCSS: "",
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "mockup.png";
          link.href = dataUrl;
          link.click();

          if (format === "carousel") {
            const carouselList = carouselRef.current?.childNodes[0]
              .childNodes[1] as HTMLElement;
            mainRef.current!.style.width = `auto`;
            if (carouselList) {
              carouselList.style.overflow = "hidden";
              carouselList.style.zIndex = "0";
            }
            slickRef.current?.slickGoTo(currentSlideIndex, true);
            setDownloading(false);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, downloadTimeout);
  };

  return (
    <SettingsButton
      handleClick={handleDownload}
      setter={setShowDownload}
      className={`${styles.download} ${
        showDownload ? `${menuStyles.active}` : ""
      }`}
    >
      <DownloadSvg />
      {showDownload && (
        <>
          <div
            className={`${menuStyles.whiteSpace} ${styles.downloadWhiteSpace}`}
            style={{ borderTopLeftRadius: borderTopLeftRadius }}
          />
          <div className={styles.downloadBanner}>Download</div>
        </>
      )}
    </SettingsButton>
  );
};

export default DownloadButton;
