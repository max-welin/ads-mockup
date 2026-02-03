import facebookMockupStyles from "../../FacebookMockup.module.css";
import type { Dispatch, SetStateAction } from "react";
import CarouselCtaButton from "./CarouselCtaButton";
import styles from "./CarouselCta.module.css";
import type { CarouselCardData } from "../../../../models/mockup.models";
import EditableSpan from "../../../shared/EditableSpan";

interface Props {
  cardData: CarouselCardData;
  setCardData: Dispatch<SetStateAction<CarouselCardData[]>>;
  index: number;
}

const CarouselCtaSection = ({ cardData, setCardData, index }: Props) => {
  const setCtaTitle = () => {
    setCardData((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, title: cardData.title } : card,
      ),
    );
  };

  const setCtaSectionDescription = () => {
    setCardData((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, description: cardData.description } : card,
      ),
    );
  };

  return (
    <div
      className={styles.ctaContainer}
      style={{
        backgroundColor: "white",
      }}
    >
      <div className={styles.titleContainer}>
        <EditableSpan
          className={`${styles.title} ${facebookMockupStyles.editable}`}
          text={cardData.title}
          onBlurFn={setCtaTitle}
          maxLength={22}
        />
        <EditableSpan
          className={`${styles.carousel} ${facebookMockupStyles.editable}`}
          text={cardData.description}
          onBlurFn={setCtaSectionDescription}
          maxLength={28}
        />
      </div>

      <CarouselCtaButton
        index={index}
        cardData={cardData}
        setCardData={setCardData}
      />
    </div>
  );
};

export default CarouselCtaSection;
