import { X } from "lucide-react";
import styles from "../Carousel.module.css";
import { useMockupContext } from "../../../../hooks/useMockupContext";

interface Props {
  prevButton: React.RefObject<HTMLButtonElement | null>;
  i: number;
}

const CarouselRemoveCardButton = ({ prevButton, i }: Props) => {
  const { setCarouselCardData } = useMockupContext();

  const removeCard = (i: number) => {
    setCarouselCardData((prev) => {
      const newArray = [...prev];
      newArray.splice(i, 1);
      return newArray;
    });
    setTimeout(() => {
      prevButton?.current?.click();
    }, 50);
  };

  return (
    <button className={styles.removeCardButton} onClick={() => removeCard(i)}>
      <span>Remove Carousel Item</span>
      <X size={65} strokeWidth={1.2} />
    </button>
  );
};

export default CarouselRemoveCardButton;
