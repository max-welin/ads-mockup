import { useMockupContext } from "../../hooks/useMockupContext";
import Carousel from "./FacebookCarousel/Carousel";
import FacebookCtaSection from "./FacebookCtaSection/FacebookCtaSection";
import FacebookHeaderSection from "./FacebookHeader/FacebookHeader";
import FacebookTextSection from "./FacebookHeader/FacebookTextSection";
import FacebookImgSection from "./FacebookImageSection/FacebookImgSection";
import FacebookInteractionSection from "./FacebookInteractionSection/FacebookInteractionSection";
import styles from "./FacebookMockup.module.css";

const FacebookMockup = () => {
  const { setShowImageButton, device, format } = useMockupContext();

  return (
    <div
      className={`${styles.mockup} ${
        device === "mobile" ? styles.mobile : styles.desktop
      }`}
      onMouseEnter={() => setShowImageButton(true)}
      onMouseLeave={() => setShowImageButton(false)}
    >
      <FacebookHeaderSection />
      <FacebookTextSection />
      {format === "native" ? (
        <>
          <FacebookImgSection />
          <FacebookCtaSection />
        </>
      ) : format === "carousel" ? (
        <Carousel />
      ) : (
        ""
      )}
      <FacebookInteractionSection />
    </div>
  );
};

export default FacebookMockup;
