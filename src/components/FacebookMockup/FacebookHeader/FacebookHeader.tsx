import { Ellipsis, Target, X } from "lucide-react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./FacebookHeader.module.css";
import facebookMockupStyles from "../FacebookMockup.module.css";
import GlobeSvg from "../../shared/svg/GlobeSvg";
import EditableSpan from "../../shared/svg/EditableSpan";
import UploadImageInput from "../../shared/UploadImageInput";
import { onImageChange } from "../../../utils/onImageChange";
import { useRef } from "react";

const FacebookHeaderSection = () => {
  const { headerImg, setHeaderImg, headerTitle, setHeaderTitle } =
    useMockupContext();

  const onHeaderImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageChange(e, setHeaderImg);
  };

  const testRef = useRef(null);

  return (
    <div className={styles.mockupHeader}>
      <div className={styles.imgContainer}>
        <img src={headerImg} alt={`${headerTitle} logo`} />
        <UploadImageInput size={36} onChangeFn={onHeaderImageChange} />
      </div>

      <div className={styles.headerTitleContainer}>
        <EditableSpan
          ref={testRef}
          className={`${styles.title} ${facebookMockupStyles.editable}`}
          text={headerTitle}
          onBlurFn={(e) => console.log(e.target.offsetWidth)}
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
