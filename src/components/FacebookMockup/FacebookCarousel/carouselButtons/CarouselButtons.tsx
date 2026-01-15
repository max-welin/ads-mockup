import { ChevronLeft, ChevronRight } from "lucide-react";
import { forwardRef } from "react";
import type { CustomArrowProps } from "react-slick";

const NextArrow = forwardRef<HTMLButtonElement, CustomArrowProps>(
  (props, ref) => {
    const { className, style, onClick } = props;

    return (
      <button
        ref={ref}
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
);

const PrevArrow = forwardRef<HTMLButtonElement, CustomArrowProps>(
  (props, ref) => {
    const { className, style, onClick } = props;

    return (
      <button
        ref={ref}
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
);

export { NextArrow, PrevArrow };
