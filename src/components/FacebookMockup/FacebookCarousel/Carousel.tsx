import Slider from "react-slick";
import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMockupContext } from "../../../hooks/useMockupContext";
import type { CarouselCardData } from "../../../models/mockup.models";
import CarouselCard from "./CarouselCard";

import type { CustomArrowProps } from "react-slick";

function NextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onClick}
      aria-label="Next slide"
    >
      <ChevronRight size={25} />
    </button>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onClick}
      aria-label="Previous slide"
    >
      <ChevronLeft size={25} />
    </button>
  );
}

const Carousel = () => {
  const { carouselCardData, device } = useMockupContext();

  const slidesToShow = device === "desktop" ? 1.75 : 1.22;

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className={styles.carousel}>
        <Slider {...settings} className={styles.slider}>
          {carouselCardData.map((carouselCard: CarouselCardData, i) => (
            <CarouselCard i={i} carouselCard={carouselCard} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
