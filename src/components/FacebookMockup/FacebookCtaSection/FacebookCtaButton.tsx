import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

type Pos = { top: number; left: number; width: number };

const FacebookCtaButton = () => {
  const [showCopyOptions, setShowCopyOptions] = useState(false);
  const [pos, setPos] = useState<Pos>({ top: 0, left: 0, width: 0 });

  const anchorRef = useRef<HTMLDivElement>(null);
  const portalRoot = useMemo(() => document.body, []);

  const { ctaCopy, setCtaCopy, format } = useMockupContext();

  const open = () => setShowCopyOptions(true);
  const close = () => setShowCopyOptions(false);

  useLayoutEffect(() => {
    if (!showCopyOptions) return;

    const update = () => {
      const el = anchorRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setPos({ top: r.bottom / 4, left: r.right - 90, width: r.width });
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true); // fångar även scroll i nested wrappers

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [showCopyOptions]);

  const dropdown = (
    <div
      className={styles.copySelectionWrapper}
      style={{
        position: "fixed",
        top: pos.top,
        left: pos.left,
        minWidth: pos.width,
        zIndex: 9999,
      }}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <ul>
        {CTA_COPY_OPTIONS.map((option) => (
          <li
            key={option}
            onClick={() => {
              setCtaCopy(option);
              close();
            }}
            className={option === ctaCopy ? styles.active : ""}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      ref={anchorRef}
      className={`${styles.ctaButton} ${
        format === "carousel" ? styles.carousel : ""
      }`}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <p className={facebookMockupStyles.editable}>{ctaCopy}</p>

      {showCopyOptions && createPortal(dropdown, portalRoot)}
    </div>
  );
};

export default FacebookCtaButton;
