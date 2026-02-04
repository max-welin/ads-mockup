import { useRef, useState } from "react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./FacebookHeader.module.css";
import facebookMockupStyles from "../FacebookMockup.module.css";
import EditableSpan from "../../shared/EditableSpan";

const FacebookTextSection = () => {
  const { headerDescription, setHeaderDescription, device } =
    useMockupContext();
  const [expanded, setExpanded] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const maxChars = device === "desktop" ? 130 : 81;

  const isOverflowing = headerDescription.length > maxChars;
  const visibleText =
    expanded || !isOverflowing
      ? headerDescription
      : headerDescription.slice(0, maxChars) + "…";

  return (
    <div className={styles.textSection}>
      <EditableSpan
        className={facebookMockupStyles.editable}
        text={visibleText}
        onBlurFn={setHeaderDescription}
        spanRef={spanRef}
      />

      {isOverflowing && !expanded && (
        <span
          className={styles.readMoreButton}
          onClick={() => setExpanded(true)}
        >
          Show more
        </span>
      )}

      {isOverflowing && expanded && (
        <span
          className={styles.readLessButton}
          onClick={() => setExpanded(false)}
        >
          Show less
        </span>
      )}
    </div>
  );
};

export default FacebookTextSection;
