import style from "./CardItem.module.scss";
import PriceButton from "./../../components/UI/price-button/PriceButton";
import { data } from "../../demo-data/data";
import { useEffect, useState } from "react";
import { useHref } from "react-router-dom";
import Popular from "../../components/popular/Popular";
import cl from "classnames";
import meshImg from "../../assets/size-mesh/size-mesh.png";
import { createPortal } from "react-dom";

const CardItem = () => {
  const [sizeMesh, setSizeMesh] = useState(false);
  const [newData, setNewData] = useState();
  const url = useHref();

  useEffect(() => {
    setNewData(data.filter((data) => data.id === +url.replace(/\D/g, "")));
  }, [url]);

  return (
    <div className={style.container}>
      {sizeMesh &&
        createPortal(
          <>
            <div
              className={style.mesh_wrapper}
              onClick={() => setSizeMesh(false)}
            ></div>
            <img className={style.mesh_image} src={meshImg} alt='' />
          </>,
          document.body
        )}
      <p className={style.title}>
        {newData?.[0]?.name + "" + newData?.[0]?.id}
      </p>
      <div className={style.content}>
        <img
          className={style.content_image}
          src={newData?.[0]?.image[0]}
          alt='img'
        />
        <div className={style.content_inner}>
          <PriceButton
            price={newData?.[0]?.price}
            btnWidth={140}
            btnMargin={0}
            btnPadding={11}
            btnFontSize={25}
            btnMarginBottom={20}
          />
          <p className={style.desc}>{newData?.[0]?.desc}</p>
          <button className={style.size_mesh} onClick={() => setSizeMesh(true)}>
            Размерная сетка
          </button>
          <div className={style.size_switcher}>
            <p className={style.switcher_text}>Выберите размера:</p>
            <div className={cl(style.form_radio_group, style.checkbox_wrapper)}>
              <div className={cl(style.form_radio_group, style.item)}>
                <input id='radio-1' type='radio' name='radio' value='1' />
                <label htmlFor='radio-1'>XS</label>
              </div>
              <div className={cl(style.form_radio_group, style.item)}>
                <input id='radio-2' type='radio' name='radio' value='2' />
                <label htmlFor='radio-2'>S</label>
              </div>
              <div className={cl(style.form_radio_group, style.item)}>
                <input id='radio-3' type='radio' name='radio' value='3' />
                <label htmlFor='radio-3'>M</label>
              </div>
              <div className={cl(style.form_radio_group, style.item)}>
                <input id='radio-4' type='radio' name='radio' value='4' />
                <label htmlFor='radio-4'>L</label>
              </div>
              <div className={cl(style.form_radio_group, style.item)}>
                <input id='radio-5' type='radio' name='radio' value='5' />
                <label htmlFor='radio-5'>XL</label>
              </div>
            </div>
            <div className={style.basket_control}>
              <div className={style.count_control}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='46'
                  height='46'
                  viewBox='0 0 46 46'
                  fill='none'
                >
                  <path
                    d='M1 23C1 10.8497 10.8497 1 23 1H45V45H23C10.8497 45 1 35.1503 1 23Z'
                    stroke='black'
                    strokeWidth='2'
                  />
                  <path
                    d='M15 24C14.4477 24 14 23.5523 14 23C14 22.4477 14.4477 22 15 22H31C31.5523 22 32 22.4477 32 23C32 23.5523 31.5523 24 31 24H15Z'
                    fill='black'
                  />
                </svg>
                <input
                  className={style.counter}
                  type='number'
                  name='counter'
                  id='counter'
                  defaultValue={1}
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='46'
                  height='46'
                  viewBox='0 0 46 46'
                  fill='none'
                >
                  <path
                    d='M45 23C45 35.1503 35.1503 45 23 45L1 45L1 1L23 1C35.1503 1 45 10.8497 45 23Z'
                    stroke='black'
                    strokeWidth='2'
                  />
                  <path
                    d='M21.9999 31C21.9999 31.5523 22.4477 32 22.9999 32C23.5522 32 23.9999 31.5523 23.9999 31V23.9999H31C31.5522 23.9999 32 23.5522 32 22.9999C32 22.4476 31.5522 21.9999 31 21.9999H23.9999V15C23.9999 14.4477 23.5522 14 22.9999 14C22.4477 14 21.9999 14.4477 21.9999 15V21.9999H15C14.4477 21.9999 14 22.4476 14 22.9999C14 23.5522 14.4477 23.9999 15 23.9999H21.9999V31Z'
                    fill='black'
                  />
                </svg>
              </div>
              <button className={style.add_to_cart}>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
      <Popular />
    </div>
  );
};

export default CardItem;
