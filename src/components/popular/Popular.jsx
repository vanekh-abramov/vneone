import style from "./Popular.module.scss";

import SwiperUI from "../UI/swiper/SwiperUI";
import { useState } from "react";
import DemoErr from "./../../pages/modals/demoErr/DemoErr";

const Popular = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div id='popular' className={style.popular}>
      <h2 className={style.popular_title}>Популярное</h2>
      <SwiperUI />
      <button
        className={style.popular_button}
        onClick={() => setToggleModal(!toggleModal)}
      >
        Каталог
      </button>
      <DemoErr toggleModal={toggleModal} setToggleModal={setToggleModal} />
    </div>
  );
};

export default Popular;
