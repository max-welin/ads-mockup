import { useMockupContext } from "../../../hooks/useMockupContext";
import sectionStyles from "./FacebookCtaSection.module.css";
import styles from "../FacebookMockup.module.css";
import EditableSpan from "../../Shared/EditableSpan";

const FacebookCtaSection = () => {
  const {
    url,
    setUrl,
    ctaTitle,
    setCtaTitle,
    ctaSectionDescription,
    setCtaSectionDescription,
    ctaButtonText,
    setCtaButtonText,
  } = useMockupContext();

  return (
    <div className={sectionStyles.ctaContainer}>
      <div className={sectionStyles.titleContainer}>
        <EditableSpan
          className={`${sectionStyles.url} ${styles.editable}`}
          text={url}
          onBlurFn={setUrl}
        />
        <EditableSpan
          className={`${sectionStyles.title} ${styles.editable}`}
          text={ctaTitle}
          onBlurFn={setCtaTitle}
        />
        <EditableSpan
          className={styles.editable}
          text={ctaSectionDescription}
          onBlurFn={setCtaSectionDescription}
        />
      </div>

      <div className={sectionStyles.ctaButton}>
        <EditableSpan
          className={styles.editable}
          text={ctaButtonText}
          onBlurFn={setCtaButtonText}
        />
      </div>
    </div>
  );
};

export default FacebookCtaSection;
