import React from "react";
import style from "./Catalog.module.scss";
import Title from "./../../components/UI/title/Title";
// import { data } from "../../demo-data/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Catalog = () => {
  const { data } = useSelector((state) => state.data);

  return (
    <div className={style.container}>
      <Title text={"Каталог"} />
      <div className={style.items_container}>
        {data?.map(({ id, image, price, name }) => (
          <Link to={"/goods/" + id} key={id} className={style.card}>
            <div className={style.card_top}>
              <img className={style.image} src={image[0]} alt='img' />
              <div className={style.price}>{price + "$"}</div>
            </div>
            <div className={style.card_title}>{name + " " + id}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
