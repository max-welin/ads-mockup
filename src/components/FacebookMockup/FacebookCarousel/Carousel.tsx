import Slider from "react-slick";
import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";

import { useMockupContext } from "../../../hooks/useMockupContext";
import type { CarouselCardData } from "../../../models/mockup.models";
import CarouselCard from "./CarouselCard";

import { useRef, useState } from "react";
import CarouselAddCardButton from "./carouselButtons/CarouselAddCardButton";
import { NextArrow, PrevArrow } from "./carouselButtons/CarouselButtons";

const Carousel = () => {
  const {
    carouselCardData,
    device,
    carouselRef,
    slickRef,
    currentSlideIndex,
    setCurrentSlideIndex,
  } = useMockupContext();

  const nextButton = useRef<HTMLButtonElement | null>(null);
  const prevButton = useRef<HTMLButtonElement | null>(null);

  const slidesToShow = device === "desktop" ? 1.75 : 1.22;
  const isRightMost =
    currentSlideIndex === carouselCardData.length - slidesToShow;

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow ref={nextButton} />,
    prevArrow: <PrevArrow ref={prevButton} />,
    afterChange: (index: number) => setCurrentSlideIndex(index),
  };

  return (
    <>
      <div className={styles.carousel} ref={carouselRef}>
        <Slider {...settings} className={styles.slider} ref={slickRef}>
          {carouselCardData.map((carouselCard: CarouselCardData, i) => (
            <CarouselCard
              i={i}
              carouselCard={carouselCard}
              prevButton={prevButton}
            />
          ))}
        </Slider>
        {isRightMost && <CarouselAddCardButton nextButton={nextButton} />}
      </div>
    </>
  );
};

export default Carousel;
