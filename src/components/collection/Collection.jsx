import style from "./Collection.module.scss";
import photo from "../../assets/collection/image.png";
import Title from "../UI/title/Title";

const Collection = () => {
  return (
    <div className={style.collection}>
      <Title text={"Вы в наших худи"} />
      <p className={style.sub_title}>
        Делайте фотографии в нашем мерче, отмечайте @vneone.official, и мы
        выложим сюда лучшие фото
      </p>
      <div className={style.item_container}>
        <div className={style.card}>
          <img src={photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@vneone.official</p>
        </div>
        <div className={style.card}>
          <img src={photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@vneone.official</p>
        </div>
        <div className={style.card}>
          <img src={photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@vneone.official</p>
        </div>
        <div className={style.card}>
          <img src={photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@vneone.official</p>
        </div>
        <div className={style.card}>
          <img src={photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@vneone.official</p>
        </div>
        <div className={style.card}>
          <img src={photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@vneone.official</p>
        </div>
        <div className={style.card}>
          <img src={photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@vneone.official</p>
        </div>
        <div className={style.card}>
          <img src={photo} alt='photo' className={style.card_photo} />
          <p className={style.card_title}>@vneone.official</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
