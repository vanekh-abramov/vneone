import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./SwiperUI.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

import { Navigation } from "swiper/modules";

import { data } from "../../../demo-data/data";
import PriceButton from "../price-button/PriceButton";
import { Link } from "react-router-dom";

import prevIcon from "../../../assets/popular-slider/prevIcon.svg";
import nextIcon from "../../../assets/popular-slider/nextIcon.svg";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

const SwiperUI = () => {
  const swiperRef = useRef();

  const [popularElement, setPopularElement] = useState();

  useEffect(() => {
    setPopularElement(document.getElementById("popular"));
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      modules={[Navigation]}
      className='mySwiper'
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {data.map((i) => (
        <SwiperSlide key={i.id}>
          <Link to={"/goods/" + i.id} className={style.card_slider}>
            <img className={style.image} src={i.image[0]} alt='' />
            <PriceButton
              price={i.price}
              btnWidth={110}
              btnMargin={13}
              btnPadding={9}
              btnFontSize={19}
              btnMarginBottom={20}
            />
            <p className={style.card_title}>{i.name}</p>
          </Link>
        </SwiperSlide>
      ))}
      {popularElement &&
        createPortal(
          <img
            className='prev'
            src={prevIcon}
            alt='prevIcon'
            onClick={() => swiperRef.current.slidePrev()}
          />,
          popularElement
        )}
      {popularElement &&
        createPortal(
          <img
            className='next'
            src={nextIcon}
            alt='nextIcon'
            onClick={() => swiperRef.current.slideNext()}
          />,
          popularElement
        )}
    </Swiper>
  );
};

export default SwiperUI;
