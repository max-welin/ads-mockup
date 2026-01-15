import EditableSpan from "../../shared/svg/EditableSpan";
import facebookMockupStyles from "../FacebookMockup.module.css";
import type { CarouselCardData } from "../../../models/mockup.models";
import type { Dispatch, SetStateAction } from "react";
import CarouselCtaButton from "./CarouselCtaButton";
import styles from "../FacebookCtaSection/FacebookCtaSection.module.css";

interface Props {
  cardData: CarouselCardData;
  setCardData: Dispatch<SetStateAction<CarouselCardData[]>>;
  index: number;
}

const CarouselCtaSection = ({ cardData, setCardData, index }: Props) => {
  const setCtaTitle = () => {
    setCardData((prev) => {
      const newArray = [...prev];
      newArray[index].title = cardData.title;
      return newArray;
    });
  };

  const setCtaSectionDescription = () => {
    setCardData((prev) => {
      const newArray = [...prev];
      newArray[index].description = cardData.description;
      return newArray;
    });
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
        />
        <EditableSpan
          className={facebookMockupStyles.editable}
          text={cardData.description}
          onBlurFn={setCtaSectionDescription}
        />
      </div>

      <CarouselCtaButton />
    </div>
  );
};

export default CarouselCtaSection;
