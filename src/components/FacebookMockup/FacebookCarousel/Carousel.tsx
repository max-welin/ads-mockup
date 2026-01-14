import { useMockupContext } from "../../../hooks/useMockupContext";
import styles from "./Carousel.module.css";
import UploadImageInput from "../../shared/UploadImageInput";
import CarouselCtaSection from "./CarouselCtaSection";
import type { CarouselCardData } from "../../../models/mockup.models";

const Carousel = () => {
  const { carouselCardData, setCarouselCardData } = useMockupContext();

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
    <>
      <div className={styles.carousel}>
        <div className={styles.carouselWrapper}></div>
        {carouselCardData.map((carouselCard: CarouselCardData, i) => (
          <div key={i} className={styles.carouselCard}>
            <img src={carouselCard.img} alt="Default image" />
            <UploadImageInput
              size={60}
              onChangeFn={(e) => onImageChange(e, i)}
            />
            <CarouselCtaSection
              cardData={carouselCard}
              setCardData={setCarouselCardData}
              index={i}
            />
          </div>
        ))}
      </div>
      <button style={{ padding: "6px 12px", marginRight: "6px" }}>&lt;-</button>
      <button style={{ padding: "6px 12px" }}>-&gt;</button>
    </>
  );
};

export default Carousel;
