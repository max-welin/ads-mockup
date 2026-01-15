import styles from "./Carousel.module.css";
import { Plus } from "lucide-react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import type { CarouselCardData } from "../../../models/mockup.models";

interface Props {
  nextButton: React.RefObject<HTMLButtonElement | null>;
}

const CarouselAddCardButton = ({ nextButton }: Props) => {
  const { setCarouselCardData } = useMockupContext();

  const addCarouselCard = () => {
    setCarouselCardData((prev) => {
      const newCard: CarouselCardData = {
        title: "Title",
        description: "Description",
        ctaCopy: "learn more",
        img: "/src/assets/placeholder.png",
      };
      return [...prev, newCard];
    });
    setTimeout(() => {
      nextButton?.current?.click();
    }, 100);
  };

  return (
    <button onClick={addCarouselCard} className={styles.addCardBtn}>
      <Plus size={25} />
    </button>
  );
};

export default CarouselAddCardButton;
