import { ChevronUp } from "lucide-react";
import { useMockupContext } from "../../hooks/useMockupContext";
import MockupCtaButton from "../shared/Mockup/MockupCtaButton";
import MockupHeaderSection from "../shared/Mockup/MockupHeaderSection";
import MockupImageSection from "../shared/Mockup/MockupImageSection/MockupImageSection";
import styles from "./InstagramMockup.module.css";

const InstagramMockup = () => {
  const { setShowImageButton } = useMockupContext();

  return (
    <div
      className={styles.mockup}
      onMouseEnter={() => setShowImageButton(true)}
      onMouseLeave={() => setShowImageButton(false)}
    >
      <div className={styles.timerBar}>
        <div>
          <div className={styles.time} />
        </div>
        <div />
        <div />
        <div />
      </div>
      <MockupHeaderSection
        classes={{
          container: styles.mockupHeader,
          imgContainer: styles.imgContainer,
          titleContainer: styles.headerTitleContainer,
          editable: styles.editable,
          buttonContainer: styles.buttonContainer,
        }}
      />
      <MockupImageSection containerClass={styles.imgSectionImgContainer} />
      <div className={styles.ctaButtonWrapper}>
        <ChevronUp size={30} />
        <MockupCtaButton
          classes={{
            ctaButton: styles.ctaButton,
            copySelectionWrapper: styles.copySelectionWrapper,
            active: styles.active,
            editable: styles.editable,
          }}
        />
      </div>
    </div>
  );
};

export default InstagramMockup;
