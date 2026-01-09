import { useRef, useState } from "react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./FacebookHeader.module.css";
import facebookMockupStyles from "../FacebookMockup.module.css";
import EditableSpan from "../../shared/svg/EditableSpan";

const MAX_CHARS = 130;

const FacebookTextSection = () => {
  const { headerDescription, setHeaderDescription } = useMockupContext();
  const [expanded, setExpanded] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const isOverflowing = headerDescription.length > MAX_CHARS;
  const visibleText =
    expanded || !isOverflowing
      ? headerDescription
      : headerDescription.slice(0, MAX_CHARS) + "…";

  return (
    <div className={styles.textSection}>
      <EditableSpan
        className={facebookMockupStyles.editable}
        text={visibleText}
        onBlurFn={setHeaderDescription}
        ref={spanRef}
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
