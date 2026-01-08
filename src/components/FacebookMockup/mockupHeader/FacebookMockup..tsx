import styles from "./FacebookMockup.module.css"
import FacebookImgSection from "./FacebookImgSection";
import FacebookMockupHeader from "./FacebookMockHeader";
import FacebookTextSection from "./FacebookTextSection";

const FacebookMockup = () => {
  return (
    <main className={styles.mockup}>
      <FacebookMockupHeader />
      <FacebookTextSection />
      <FacebookImgSection />
    </main>
  );
};

export default FacebookMockup;
