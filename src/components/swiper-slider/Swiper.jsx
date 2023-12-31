import { Swiper, SwiperSlide } from "swiper/react";

import style from "./Swiper.module.scss";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";

import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import slide1 from "../../../src/assets/main-slider/slider1.jpg";
import slide2 from "../../../src/assets/main-slider/slider2.jpg";
import slide3 from "../../../src/assets/main-slider/slider3.jpg";
import slide4 from "../../../src/assets/main-slider/slider4.jpg";
import slide5 from "../../../src/assets/main-slider/slider5.jpg";

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
        <img src={slide1} alt='slide1' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt='slide2' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt='slide3' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt='slide4' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt='slide5' />
      </SwiperSlide>
      <button className={style.button}>КАТАЛОГ</button>
    </Swiper>
  );
};

export default SwiperSlider;
