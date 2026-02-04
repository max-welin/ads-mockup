import React from "react";
import styles from "./MockupImageSection.module.css";
import { useMockupContext } from "../../../../hooks/useMockupContext";
import { onImageChange } from "../../../../utils/onImageChange";
import UploadImageInput from "../../UploadImageInput/UploadImageInput";

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
