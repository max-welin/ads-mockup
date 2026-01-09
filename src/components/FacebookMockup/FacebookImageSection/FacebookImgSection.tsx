import { useState } from "react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import MainImageUpload from "./MainImageUpload/MainImageUpload";
import styles from "./FacebookImgSection.module.css";

const FacebookImgSection = () => {
  const [showImageButton, setShowImageButton] = useState(false);
  const { mainImg, ctaTitle } = useMockupContext();

  return (
    <div
      className={styles.imgContainer}
      onMouseEnter={() => setShowImageButton(true)}
      onMouseLeave={() => setShowImageButton(false)}
    >
      <img src={mainImg} alt={ctaTitle} />
      <MainImageUpload showButton={showImageButton} />
    </div>
  );
};

export default FacebookImgSection;
