import { useMockupContext } from "../../../hooks/useMockupContext";
import type { CarouselCardData } from "../../../models/mockup.models";
import UploadImageInput from "../../shared/UploadImageInput/UploadImageInput";
import styles from "./Carousel.module.css";
import CarouselCtaSection from "./CarouselCta/CarouselCtaSection";
import CarouselRemoveCardButton from "./carouselButtons/CarouselRemoveCardButton";

interface Props {
  i: number;
  carouselCard: CarouselCardData;
  prevButton: React.RefObject<HTMLButtonElement | null>;
}

const CarouselCard = ({ i, carouselCard, prevButton }: Props) => {
  const { setCarouselCardData, device } = useMockupContext();

  const onImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;

      setCarouselCardData((prev) =>
        prev.map((card, i) => (i === index ? { ...card, img: result } : card)),
      );
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
      <UploadImageInput size={40} onChangeFn={(e) => onImageChange(e, i)} />
      <CarouselCtaSection
        cardData={carouselCard}
        setCardData={setCarouselCardData}
        index={i}
      />
      {i >= 3 && <CarouselRemoveCardButton prevButton={prevButton} i={i} />}
    </div>
  );
};

export default CarouselCard;
