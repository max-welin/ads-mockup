import { useMockupContext } from "../../hooks/useMockupContext";
import Carousel from "./FacebookCarousel/Carousel";
import MockupHeaderSection from "../shared/Mockup/MockupHeaderSection";
import FacebookTextSection from "./FacebookTextSection";
import FacebookInteractionSection from "./FacebookInteractionSection/FacebookInteractionSection";
import styles from "./FacebookMockup.module.css";
import MockupImageSection from "../shared/Mockup/MockupImageSection/MockupImageSection";
import MockupCtaSection from "../shared/Mockup/MockupCtaSection";
import MockupCtaButton from "../shared/Mockup/MockupCtaButton";

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
      <MockupHeaderSection
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
          <MockupImageSection containerClass={styles.imgSectionImgContainer} />
          <MockupCtaSection
            classes={{
              container: styles.ctaContainer,
              titleContainer: styles.titleContainer,
              url: styles.url,
              title: styles.title,
              editable: styles.editable,
            }}
            renderCtaButton={() => (
              <MockupCtaButton
                classes={{
                  ctaButton: styles.ctaButton,
                  copySelectionWrapper: styles.copySelectionWrapper,
                  active: styles.active,
                  editable: styles.editable,
                }}
              />
            )}
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
