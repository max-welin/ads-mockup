import styles from "./FacebookMockup.module.css";
import FacebookImgSection from "./FacebookImgSection";
import FacebookMockupHeader from "./FacebookMockHeader";
import FacebookTextSection from "./FacebookTextSection";
import FacebookCtaSection from "./FacebookCtaSection/FacebookCtaSection";

const FacebookMockup = () => {
  return (
    <main className={styles.mockup}>
      <FacebookMockupHeader />
      <FacebookTextSection />
      <FacebookImgSection />
      <FacebookCtaSection />
    </main>
  );
};

export default FacebookMockup;
