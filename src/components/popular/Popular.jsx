import style from "./Popular.module.scss";

import SwiperUI from "../UI/swiper/SwiperUI";

const Popular = () => {
  return (
    <div id='popular' className={style.popular}>
      <h2 className={style.popular_title}>Популярное</h2>
      <SwiperUI />
      <button className={style.popular_button}>Каталог</button>
    </div>
  );
};

export default Popular;
