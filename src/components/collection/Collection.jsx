import style from "./Collection.module.scss";
// import photo from "../../assets/collection/image.png";
import out_photo from "../../assets/card/out_photo.jpg";

import Title from "../UI/title/Title";

const Collection = () => {
  return (
    <div className={style.collection}>
      <Title text={"Вы в наших худи"} />
      <p className={style.sub_title}>
        Делайте фотографии в нашем мерче, отмечайте @instagram.name, и мы
        выложим сюда лучшие фото
      </p>
      <div className={style.item_container}>
        <div className={style.card}>
          <img src={out_photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@instagram.name</p>
        </div>
        <div className={style.card}>
          <img src={out_photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@instagram.name</p>
        </div>
        <div className={style.card}>
          <img src={out_photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@instagram.name</p>
        </div>
        <div className={style.card}>
          <img src={out_photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@instagram.name</p>
        </div>
        <div className={style.card}>
          <img src={out_photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@instagram.name</p>
        </div>
        <div className={style.card}>
          <img src={out_photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@instagram.name</p>
        </div>
        <div className={style.card}>
          <img src={out_photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@instagram.name</p>
        </div>
        <div className={style.card}>
          <img src={out_photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@instagram.name</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
