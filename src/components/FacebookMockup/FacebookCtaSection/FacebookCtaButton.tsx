import { useState } from "react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import facebookMockupStyles from "../FacebookMockup.module.css";
import styles from "./FacebookCtaSection.module.css";

const CTA_COPY_OPTIONS = [
  "learn more",
  "download",
  "apply now",
  "show now",
  "watch more",
  "subscribe",
  "sign up",
  "book now",
  "call now",
  "Contact Us",
  "listen now",
  "get showtimes",
  "order now",
  "get directions",
  "see menu",
  "get quote",
  "send message",
  "request time",
];

const FacebookCtaButton = () => {
  const [showCopyOptions, setShowCopyOptions] = useState(false);

  const { ctaCopy, setCtaCopy } = useMockupContext();

  return (
    <>
      <div
        className={styles.ctaButton}
        onMouseEnter={() => setShowCopyOptions(true)}
        onMouseLeave={() => setShowCopyOptions(false)}
      >
        <p className={facebookMockupStyles.editable}>{ctaCopy}</p>
        {showCopyOptions && (
          <div
            className={styles.copySelectionWrapper}
            onMouseEnter={() => setShowCopyOptions(true)}
            onMouseLeave={() => setShowCopyOptions(false)}
          >
            <ul>
              {CTA_COPY_OPTIONS.map((option, i) => (
                <li
                  key={i}
                  onClick={() => setCtaCopy(option)}
                  className={option === ctaCopy ? `${styles.active}` : ""}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default FacebookCtaButton;
