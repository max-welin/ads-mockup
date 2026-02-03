import { useMockupContext } from "../../hooks/useMockupContext";
import FacebookSvg from "../shared/svg/FacebookSvg";
import InstagramSvg from "../shared/svg/InstagramSvg";
import styles from "./PlatformMenu.module.css";

const PlatformMenu = () => {
  const { setPlatform } = useMockupContext();

  return (
    <div className={styles.menuContainer}>
      <button onClick={() => setPlatform("facebook")}>
        <FacebookSvg />
      </button>
      <button onClick={() => setPlatform("instagram")}>
        <InstagramSvg />
      </button>
    </div>
  );
};

export default PlatformMenu;
