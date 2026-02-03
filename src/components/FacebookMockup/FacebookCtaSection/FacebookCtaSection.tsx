import { useMockupContext } from "../../../hooks/useMockupContext";
import facebookMockupStyles from "./FacebookCtaSection.module.css";
import styles from "../FacebookMockup.module.css";
import EditableSpan from "../../shared/EditableSpan";
import FacebookCtaButton from "./FacebookCtaButton";

const FacebookCtaSection = () => {
  const {
    url,
    setUrl,
    ctaTitle,
    setCtaTitle,
    ctaSectionDescription,
    setCtaSectionDescription,
  } = useMockupContext();

  return (
    <div className={facebookMockupStyles.ctaContainer}>
      <div className={facebookMockupStyles.titleContainer}>
        <EditableSpan
          className={`${facebookMockupStyles.url} ${styles.editable}`}
          text={url}
          onBlurFn={setUrl}
          maxLength={50}
        />
        <EditableSpan
          className={`${facebookMockupStyles.title} ${styles.editable}`}
          text={ctaTitle}
          onBlurFn={setCtaTitle}
          maxLength={90}
        />
        <EditableSpan
          className={styles.editable}
          text={ctaSectionDescription}
          onBlurFn={setCtaSectionDescription}
          maxLength={55}
        />
      </div>

      <FacebookCtaButton />
    </div>
  );
};

export default FacebookCtaSection;
