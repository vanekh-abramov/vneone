import style from "./Popular.module.scss";

import SwiperUI from "../UI/swiper/SwiperUI";
import { useState } from "react";
import DemoErr from "./../../pages/modals/demoErr/DemoErr";
import Title from "../UI/title/Title";
import { Link } from "react-router-dom";

const Popular = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div id='popular' className={style.popular}>
      <Title text={"Популярное"} />
      <SwiperUI />
      <Link to={"/goods/"} className={style.popular_button}>
        Каталог
      </Link>
      <DemoErr toggleModal={toggleModal} setToggleModal={setToggleModal} />
    </div>
  );
};

export default Popular;
