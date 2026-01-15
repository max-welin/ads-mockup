import { useMockupContext } from "../../../hooks/useMockupContext";
import type { CarouselCardData } from "../../../models/mockup.models";
import UploadImageInput from "../../shared/UploadImageInput";
import styles from "./Carousel.module.css";
import CarouselCtaSection from "./CarouselCta/CarouselCtaSection";

interface Props {
  i: number;
  carouselCard: CarouselCardData;
}

const CarouselCard = ({ i, carouselCard }: Props) => {
  const { setCarouselCardData, device } = useMockupContext();

  const onImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;

      setCarouselCardData((prev) => {
        const newArray = [...prev];
        const newCarouselCard = {
          ...newArray[index],
          img: result,
        };
        newArray[index] = newCarouselCard;
        return newArray;
      });
    };
    reader.readAsDataURL(file);

    e.currentTarget.value = "";
  };

  return (
    <div
      key={i}
      className={`${styles.carouselCard} ${
        device === "mobile" ? styles.mobileCard : ""
      }`}
    >
      <img src={carouselCard.img} alt="Default image" />
      <UploadImageInput size={60} onChangeFn={(e) => onImageChange(e, i)} />
      <CarouselCtaSection
        cardData={carouselCard}
        setCardData={setCarouselCardData}
        index={i}
      />
    </div>
  );
};

export default CarouselCard;
