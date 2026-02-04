import { useMockupContext } from "../../hooks/useMockupContext";
import FacebookSvg from "../shared/svg/FacebookSvg";
import InstagramSvg from "../shared/svg/InstagramSvg";
import styles from "./PlatformMenu.module.css";

const PlatformMenu = () => {
  const { setPlatform, platform } = useMockupContext();

  return (
    <div className={styles.menuContainer}>
      <button onClick={() => setPlatform("facebook")} className={`${platform === "facebook" ? styles.active : ""}`}>
        <FacebookSvg />
      </button>
      <button onClick={() => setPlatform("instagram")} className={`${platform === "instagram" ? styles.active : ""}`}>
        <InstagramSvg />
      </button>
    </div>
  );
};

export default PlatformMenu;
