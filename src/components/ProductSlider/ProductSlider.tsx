import React, { useCallback, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ButtonIcon } from '../../elements/ButtonIcon/ButtonIcon';
import './ProductSlider.scss';
import 'swiper/css';
import 'swiper/scss/navigation';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const ProductSlider: React.FC<Props> = ({ children, title }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="product-slider">
      <div className="product-slider__title-zone">
        <h2 className="product-slider__title-h1">{title}</h2>

        <div className="product-slider__icons">
          <ButtonIcon
            type="event"
            shape="left-light"
            onClick={handlePrevious}
          />

          <ButtonIcon
            type="event"
            shape="right-light"
            onClick={handleNext}
          />
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        // loop
        slidesPerView={4}
        className="product-slider__slides"
        spaceBetween={16}
        scrollbar={{ draggable: true }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export { SwiperSlide as Slide };