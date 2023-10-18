import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import slide3 from "../../../src/assets/main-slider/slide3.jpg";
import slide4 from "../../../src/assets/main-slider/slide4.jpg";
import slide5 from "../../../src/assets/main-slider/slide5.jpg";

const SwiperSlider = () => {
  return (
    <Swiper
      effect={"fade"}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      className='mySwiperHeader'
    >
      <SwiperSlide>
        <img src={slide3} alt='slide3' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt='slide4' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt='slide5' />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
