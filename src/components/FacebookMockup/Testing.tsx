import { useMockupContext } from "../../hooks/useMockupContext";
import type { CarouselCardData } from "../../models/mockup.models";
import UploadImageInput from "../shared/UploadImageInput";
import CarouselCtaSection from "./FacebookCarousel/CarouselCtaSection";
import styles from "./Testing.module.css";
import "../../index.css";

import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const { carouselCardData, setCarouselCardData } = useMockupContext();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.75,
    slidesToScroll: 1,
    nextArrow: (
      <button>
        <ChevronRight size={25} />
      </button>
    ),
    prevArrow: (
      <button>
        <ChevronLeft size={25} />
      </button>
    ),
  };

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
        <Slider {...settings} className={styles.slider}>
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
        </Slider>
      </div>
      <button style={{ padding: "6px 12px", marginRight: "6px" }}>&lt;-</button>
      <button style={{ padding: "6px 12px" }}>-&gt;</button>
    </>
  );
};

export default Carousel;
