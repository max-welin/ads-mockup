import { SquarePen } from "lucide-react";
import styles from "./MainImageUpload.module.css"
import { useMockupContext } from "../../../../hooks/useMockupContext";

const MainImageUpload = ({ showButton }: {showButton: boolean}) => {
  const { setMainImg } = useMockupContext();

  return (
    <>
      <input
        id="main-image-upload"
        type="file"
        accept="image/*"
        className={styles.fileInput}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const previewUrl = URL.createObjectURL(file);
          setMainImg(previewUrl);

          e.currentTarget.value = "";
        }}
      />

      <label htmlFor="main-image-upload" className={`${styles.circleButton} ${showButton ? styles.show : ""}`}>
        <SquarePen size={24} />
      </label>
    
    </>
  );
};

export default MainImageUpload;
