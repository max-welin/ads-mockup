import { useState } from "react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./FacebookImgSection.module.css";
import MainImageInput from "./MainImageUpload/MainImageInput";

const FacebookImgSection = () => {
  const [showImageButton, setShowImageButton] = useState(false);
  const { mainImg } = useMockupContext();

  return (
    <div
      className={styles.imgContainer}
      onMouseEnter={() => setShowImageButton(true)}
      onMouseLeave={() => setShowImageButton(false)}
    >
      <img src={mainImg} alt="Default image" />
      <MainImageInput showButton={showImageButton} />
    </div>
  );
};

export default FacebookImgSection;
