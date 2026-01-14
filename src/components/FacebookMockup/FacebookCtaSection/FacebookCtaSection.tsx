import { useMockupContext } from "../../../hooks/useMockupContext";
import facebookMockupStyles from "./FacebookCtaSection.module.css";
import styles from "../FacebookMockup.module.css";
import EditableSpan from "../../shared/svg/EditableSpan";
import FacebookCtaButton from "./FacebookCtaButton";

const FacebookCtaSection = () => {
  const {
    url,
    setUrl,
    ctaTitle,
    setCtaTitle,
    ctaSectionDescription,
    setCtaSectionDescription,
    format,
  } = useMockupContext();

  return (
    <div className={facebookMockupStyles.ctaContainer}>
      <div className={facebookMockupStyles.titleContainer}>
        <EditableSpan
          className={`${facebookMockupStyles.url} ${styles.editable}`}
          text={url}
          onBlurFn={setUrl}
        />
        <EditableSpan
          className={`${facebookMockupStyles.title} ${styles.editable}`}
          text={ctaTitle}
          onBlurFn={setCtaTitle}
        />
        <EditableSpan
          className={styles.editable}
          text={ctaSectionDescription}
          onBlurFn={setCtaSectionDescription}
        />
      </div>

      <FacebookCtaButton />
    </div>
  );
};

export default FacebookCtaSection;
