import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./FacebookImgSection.module.css";
import UploadImageInput from "../../shared/UploadImageInput";
import { onImageChange } from "../../../utils/onImageChange";

const FacebookImgSection = () => {
  const { mainImg, setMainImg } = useMockupContext();

  const onMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageChange(e, setMainImg);
  };

  return (
    <div className={styles.imgContainer}>
      <img src={mainImg} alt="Default image" />
      <UploadImageInput
        size={60}
        onChangeFn={onMainImageChange}
        css={styles.fileUploadBtn}
      />
    </div>
  );
};

export default FacebookImgSection;
