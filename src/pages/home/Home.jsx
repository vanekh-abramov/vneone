import style from "../../app.module.scss";

import SwiperSlider from "../../components/swiper-slider/Swiper";
import Popular from "../../components/popular/Popular";
import Parallax from "../../components/parallax/Parallax";
import Contacts from "../../components/contacts/Contacts";
import Collection from "../../components/collection/Collection";

const Home = () => {
  return (
    <>
      <div className={style.main_container}>
        <div className={style.container}>
          <SwiperSlider />
        </div>
      </div>
      <div className={style.popular_container}>
        <Popular />
      </div>
      <div className={style.parallax_container}>
        <Parallax />
      </div>
      <div className={style.base_container}>
        <Contacts />
      </div>
      <div className={style.base_container}>
        <Collection />
      </div>
    </>
  );
};

export default Home;
