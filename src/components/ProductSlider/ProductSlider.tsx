import React, { useCallback, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ProductSlider.scss';
import 'swiper/css';
import 'swiper/scss/navigation';
import { ButtonEvent } from '../../elements/Buttons/ButtonEvent/ButtonEvent';

type Props = {
  children: React.ReactNode[];
  title: string;
};

export const ProductSlider: React.FC<Props> = ({ children, title }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="product-slider">
      <div className="product-slider__title-zone">
        <h2 className="product-slider__title-h2">{title}</h2>

        <div className="product-slider__icons">
          <ButtonEvent
            shape="left"
            onClick={handlePrevious}
            disable={activeIndex === 0}
          />

          <ButtonEvent
            shape="right"
            onClick={handleNext}
            disable={activeIndex === children?.length - 4}
          />
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        onRealIndexChange={(el: SwiperClass) => setActiveIndex(el.activeIndex)}
        className="product-slider__slides"
        spaceBetween={16}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export { SwiperSlide as Slide };
