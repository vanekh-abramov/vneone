import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./SwiperUI.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

import { Navigation } from "swiper/modules";

import PriceButton from "../price-button/PriceButton";
import { Link } from "react-router-dom";

import prevIcon from "../../../assets/popular-slider/prevIcon.svg";
import nextIcon from "../../../assets/popular-slider/nextIcon.svg";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const SwiperUI = () => {
  const swiperRef = useRef();
  const { data } = useSelector((state) => state.data);

  const [popularElement, setPopularElement] = useState();
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );
  const [slidesPV, setSlidesPerView] = useState(5);

  const setSlides = () => {
    if (windowWidth > 1200) {
      setSlidesPerView(5);
    } else if ((windowWidth > 1024) & (windowWidth < 1200)) {
      setSlidesPerView(4);
    } else if ((windowWidth < 1024) & (windowWidth > 600)) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(2);
    }
  };

  useEffect(() => {
    setSlides();
    window.onresize = () => {
      setWindowWidth(document.documentElement.clientWidth);
    };
    setPopularElement(document.getElementById("popular"));
  }, [windowWidth]);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={slidesPV}
      modules={[Navigation]}
      className='mySwiperPopular'
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {data.map(({ id, image, price, name }) => (
        <SwiperSlide key={id}>
          <Link to={"/goods/" + id} className={style.card_slider}>
            <img className={style.image} src={image[0]} alt='' />
            <PriceButton
              price={price}
              btnWidth={110}
              btnMargin={13}
              btnPadding={9}
              btnFontSize={19}
              btnMarginBottom={20}
            />
            <p className={style.card_title}>{name}</p>
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
