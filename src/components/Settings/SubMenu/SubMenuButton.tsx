import type { ReactNode } from "react";
import styles from "./SubMenu.module.css";
import CheckmarkSvg from "../../shared/svg/CheckmarkSvg";

type SubMenuButtonProps<T extends string> = {
  text: T;
  children: ReactNode;
  onSelect: (value: T) => void;
  selected: T;
};

const SubMenuButton = <T extends string>({
  text,
  children,
  onSelect,
  selected,
}: SubMenuButtonProps<T>) => {
  const isActive = text === selected;

  return (
    <button
      type="button"
      className={`${styles.subMenuButton} ${isActive ? styles.active : ""}`}
      onClick={() => onSelect(text)}
    >
      <div className={styles.svgContainer}>{children}</div>
      {text}
      {isActive && (
        <div className={styles.checkmark}>
          <CheckmarkSvg />
        </div>
      )}
    </button>
  );
};

export default SubMenuButton;
