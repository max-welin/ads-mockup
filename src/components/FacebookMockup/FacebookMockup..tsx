import { useMockupContext } from "../../hooks/useMockupContext";
import FacebookCtaSection from "./FacebookCtaSection/FacebookCtaSection";
import FacebookHeaderSection from "./FacebookHeader/FacebookHeader";
import FacebookTextSection from "./FacebookHeader/FacebookTextSection";
import FacebookImgSection from "./FacebookImageSection/FacebookImgSection";
import FacebookInteractionSection from "./FacebookInteractionSection/FacebookInteractionSection";
import styles from "./FacebookMockup.module.css";

const FacebookMockup = () => {
  const { setShowImageButton } = useMockupContext();

  return (
    <main
      className={styles.mockup}
      onMouseEnter={() => setShowImageButton(true)}
      onMouseLeave={() => setShowImageButton(false)}
    >
      <FacebookHeaderSection />
      <FacebookTextSection />
      <FacebookImgSection />
      <FacebookCtaSection />
      <FacebookInteractionSection />
    </main>
  );
};

export default FacebookMockup;
