import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./InstagramImageSection.module.css";
import { onImageChange } from "../../../utils/onImageChange";
import UploadImageInput from "../../shared/UploadImageInput";

const InstagramImgSection = () => {
  const { mainImg, setMainImg } = useMockupContext();

  const onMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageChange(e, setMainImg);
  };

  return (
    <div className={styles.imgContainer}>
      <img src={mainImg} alt="Default image" />
      <UploadImageInput size={60} onChangeFn={onMainImageChange} />
    </div>
  );
};

export default InstagramImgSection;
