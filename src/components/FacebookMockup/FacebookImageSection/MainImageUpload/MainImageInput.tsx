import { SquarePen } from "lucide-react";
import { useMockupContext } from "../../../../hooks/useMockupContext";
import styles from "./MainImageInput.module.css";

interface MainImageInputProps {
  showButton: boolean;
}

const MainImageInput = ({ showButton }: MainImageInputProps) => {
  const { setMainImg } = useMockupContext();

  const onMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log(file);

    const reader = new FileReader();
    reader.onload = () => {
      setMainImg(reader.result as string);
    };
    reader.readAsDataURL(file);

    e.currentTarget.value = "";
  };

  return (
    <>
      <input
        id="main-image-upload"
        type="file"
        accept="image/*"
        className={styles.fileInput}
        onChange={onMainImageChange}
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

export default MainImageInput;
