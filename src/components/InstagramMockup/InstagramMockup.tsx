import { useMockupContext } from "../../hooks/useMockupContext";
import FacebookCtaSection from "../FacebookMockup/FacebookCtaSection/FacebookCtaSection";
import FacebookHeaderSection from "../FacebookMockup/FacebookHeader/FacebookHeader";
import FacebookTextSection from "../FacebookMockup/FacebookHeader/FacebookTextSection";
import FacebookInteractionSection from "../FacebookMockup/FacebookInteractionSection/FacebookInteractionSection";
import InstagramImgSection from "./InstagramImageSection/InstagramImageSection";
import styles from "./InstagramMockup.module.css";

const InstagramMockup = () => {
  const { setShowImageButton } = useMockupContext();

  return (
    <div
      className={styles.mockup}
      onMouseEnter={() => setShowImageButton(true)}
      onMouseLeave={() => setShowImageButton(false)}
    >
      <FacebookHeaderSection />
      <FacebookTextSection />
      <InstagramImgSection />
      <FacebookCtaSection />

      <FacebookInteractionSection />
    </div>
  );
};

export default InstagramMockup;
