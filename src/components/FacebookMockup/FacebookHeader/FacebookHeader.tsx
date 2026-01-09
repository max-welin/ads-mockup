import { Ellipsis, X } from "lucide-react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./FacebookHeader.module.css";
import facebookMockupStyles from "../FacebookMockup.module.css";
import GlobeSvg from "../../shared/svg/GlobeSvg";
import EditableSpan from "../../shared/svg/EditableSpan";

const FacebookHeaderSection = () => {
  const { headerImg, headerTitle, setHeaderTitle } = useMockupContext();

  return (
    <div className={styles.mockupHeader}>
      <img src={headerImg} alt={`${headerTitle} logo`} />

      <div className={styles.headerTitleContainer}>
        <EditableSpan
          className={`${styles.title} ${facebookMockupStyles.editable}`}
          text={headerTitle}
          onBlurFn={setHeaderTitle}
        />

        <p>
          Sponsored <span aria-hidden="true"> · </span>
          <GlobeSvg />
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <Ellipsis size={20} />
        <X size={22} />
      </div>
    </div>
  );
};

export default FacebookHeaderSection;
