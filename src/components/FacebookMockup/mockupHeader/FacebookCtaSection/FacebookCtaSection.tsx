import { useMockupContext } from "../../../../hooks/useMockupContext";
import styles from "./FacebookCtaSection.module.css";
import mockupStyles from "../FacebookMockup.module.css";

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
    <div className={styles.ctaContainer}>
      <div className={styles.titleContainer}>
       <span
          contentEditable
          suppressContentEditableWarning
          className={`${styles.url} ${mockupStyles.editable}`}
          onBlur={(e) => setUrl(e.currentTarget.textContent ?? "")}
        >
          {url}
        </span>

        <span
          contentEditable
          suppressContentEditableWarning
          className={`${styles.title} ${mockupStyles.editable}`}
          onBlur={(e) => setCtaTitle(e.currentTarget.textContent ?? "")}
        >
          {ctaTitle}
        </span>

        <span
          contentEditable
          suppressContentEditableWarning
          className={mockupStyles.editable}
          onBlur={(e) => setCtaSectionDescription(e.currentTarget.textContent ?? "")}
        >
          {ctaSectionDescription}
        </span>
      </div>

      <div className={styles.ctaButton}>
         <span
          contentEditable
          suppressContentEditableWarning
          className={mockupStyles.editable}
          onBlur={(e) => setCtaButtonText(e.currentTarget.textContent ?? "")}
        >
          {ctaButtonText}
        </span>
      </div>
    </div>
  );
};

export default FacebookCtaSection;
