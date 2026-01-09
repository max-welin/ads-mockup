import { SquarePen } from "lucide-react";
import { useMockupContext } from "../../../../hooks/useMockupContext";
import styles from "./MainImageUpload.module.css";

const MainImageUpload = ({ showButton }: { showButton: boolean }) => {
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

      <label
        htmlFor="main-image-upload"
        className={`${styles.circleButton} ${showButton ? styles.show : ""}`}
      >
        <SquarePen size={26} />
      </label>
    </>
  );
};

export default MainImageUpload;
