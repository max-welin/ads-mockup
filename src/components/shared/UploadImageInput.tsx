import { SquarePen } from "lucide-react";
import { useMockupContext } from "../../hooks/useMockupContext";
import styles from "./UploadImageInpus.module.css";

interface UploadImageInpusProps {
  size: number;
  onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadImageInput = ({ size, onChangeFn }: UploadImageInpusProps) => {
  const { showImageButton } = useMockupContext();

  return (
    <label
      style={{
        height: `${size}px`,
        width: `${size}px`,
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
