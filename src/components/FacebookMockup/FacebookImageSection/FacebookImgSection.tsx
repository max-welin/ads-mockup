import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./FacebookImgSection.module.css";
import UploadImageInput from "../../shared/UploadImageInput";
import { onImageChange } from "../../../utils/onImageChange";

const FacebookImgSection = () => {
  const { mainImg, setMainImg, device } = useMockupContext();

  const onMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageChange(e, setMainImg);
  };

  return (
    <div
      className={`${styles.imgContainer} ${
        device === "mobile" ? styles.mobile : ""
      }`}
    >
      <img src={mainImg} alt="Default image" />
      <UploadImageInput size={60} onChangeFn={onMainImageChange} />
    </div>
  );
};

export default FacebookImgSection;
