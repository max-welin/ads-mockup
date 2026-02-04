import { useMockupContext } from "../../hooks/useMockupContext";
import Carousel from "./FacebookCarousel/Carousel";
import FacebookCtaButton from "./FacebookCtaSection/FacebookCtaButton";
import MockupCtaSection from "./FacebookCtaSection/FacebookCtaSection";
import MokcupHeaderSection from "./FacebookHeader/FacebookHeader";
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
      <MokcupHeaderSection
        classes={{
          container: styles.mockupHeader,
          imgContainer: styles.imgContainer,
          titleContainer: styles.headerTitleContainer,
          editable: styles.editable,
          buttonContainer: styles.buttonContainer,
        }}
        showGlobe={true}
      />
      <FacebookTextSection />
      {format === "native" ? (
        <>
          <FacebookImgSection />
          <MockupCtaSection
            classes={{
              container: styles.ctaContainer,
              titleContainer: styles.titleContainer,
              url: styles.url,
              title: styles.title,
              editable: styles.editable,
            }}
            CtaButton={FacebookCtaButton}
          />
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
