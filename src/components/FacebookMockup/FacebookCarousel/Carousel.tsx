import Slider from "react-slick";
import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";

import { useMockupContext } from "../../../hooks/useMockupContext";
import type { CarouselCardData } from "../../../models/mockup.models";
import CarouselCard from "./CarouselCard";

import { useRef, useState } from "react";
import CarouselAddCardButton from "./CarouselAddCardButton";
import { NextArrow, PrevArrow } from "./CarouselButtons";

const Carousel = () => {
  const { carouselCardData, device } = useMockupContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextButton = useRef<HTMLButtonElement | null>(null);

  const slidesToShow = device === "desktop" ? 1.75 : 1.22;
  const isRightMost = currentIndex === carouselCardData.length - slidesToShow;

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow ref={nextButton} />,
    prevArrow: <PrevArrow />,
    afterChange: (index: number) => setCurrentIndex(index),
  };

  return (
    <>
      <div className={styles.carousel}>
        <Slider {...settings} className={styles.slider}>
          {carouselCardData.map((carouselCard: CarouselCardData, i) => (
            <CarouselCard i={i} carouselCard={carouselCard} />
          ))}
        </Slider>
        {isRightMost && <CarouselAddCardButton nextButton={nextButton} />}
      </div>
    </>
  );
};

export default Carousel;
