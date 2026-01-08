import { useState, useRef } from "react";
import styles from "./FacebookMockup.module.css";
import { useMockupContext } from "../../../hooks/useMockupContext";

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
      <span
        ref={spanRef}
        className={styles.editable}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) =>
          setHeaderDescription(e.currentTarget.textContent ?? "")
        }
      >
        {visibleText}
      </span>

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