import React from "react";
import UploadImageInput from "../../shared/UploadImageInput";
import { onImageChange } from "../../../utils/onImageChange";
import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./FacebookImgSection.module.css";

interface Props {
  containerClass: string;
}

const MockupImageSection = ({ containerClass }: Props) => {
  const { mainImg, setMainImg, device } = useMockupContext();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageChange(e, setMainImg);
  };

  const isMobile = device === "mobile";

  return (
    <div className={`${containerClass} ${isMobile ? styles.mobile : ""}`}>
      <img src={mainImg} alt={"Default image"} />
      <UploadImageInput size={60} onChangeFn={handleImageChange} />
    </div>
  );
};

export default MockupImageSection;
