import { SquarePen } from "lucide-react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./UploadImageInpus.module.css";

interface UploadImageInputProps {
  size: number;
  onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadImageInput = ({ size, onChangeFn }: UploadImageInputProps) => {
  const { showImageButton, format } = useMockupContext();

  const margin = format === "native" ? "auto" : "5% 5%";

  return (
    <label
      style={{
        height: `${size}px`,
        width: `${size}px`,
        margin: margin,
      }}
      className={`${styles.circleButton} ${showImageButton ? styles.show : ""}`}
    >
      <input
        type="file"
        accept="image/*"
        className={styles.fileInput}
        onChange={(e) => onChangeFn(e)}
      />
      <SquarePen size={size / 2} />
    </label>
  );
};

export default UploadImageInput;
