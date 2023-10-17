import style from "./CardItem.module.scss";

import { useEffect, useState } from "react";
import { useHref } from "react-router-dom";

import PriceButton from "./../../components/UI/price-button/PriceButton";
import Popular from "../../components/popular/Popular";
import Title from "./../../components/UI/title/Title";
import DemoErr from "../modals/demoErr/DemoErr";
import SizeMesh from "../modals/sizeMesh/SizeMesh";

import cl from "classnames";

import meshImg from "../../assets/size-mesh/size-mesh.png";
import arrayR from "../../assets/card/arrayR.svg";
import arrayL from "../../assets/card/arrayL.svg";

import { useDispatch, useSelector } from "react-redux";
import { showSelected, addToCart } from "../../features/data/fakeDataSlice";

const CardItem = () => {
  const [sizeMesh, setSizeMesh] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const url = useHref();

  const { selectedData, shoppingCart } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  //filtering data for current url path
  useEffect(() => {
    dispatch(showSelected(Number(url.replace(/\D/g, ""))));
  }, [selectedData, url]);

  //constants for current data
  const titleName = selectedData?.name + "" + selectedData?.id;
  const imageSrc = selectedData?.image?.[0];
  const dataPrice = selectedData?.price;
  const dataDesc = selectedData?.desc;

  //radio btn controll
  const [selectedSize, setSelectedSize] = useState("XS");
  const isRadioSelected = (value) => selectedSize === value;
  const handleRadioClick = (e) => setSelectedSize(e.currentTarget.value);

  //counter
  const [counterNumber, setCounterNumber] = useState(1);
  const currentCount = (e) => e.target.value;
  const increment = () => setCounterNumber(counterNumber + 1);
  const decrement = () =>
    setCounterNumber(counterNumber > 1 ? counterNumber - 1 : 1);

  //adding to cart
  const selectedParams = {
    selectedDataId: selectedData.id,
    counterNumber,
    selectedSize,
  };

  const addingToCart = () => {
    dispatch(addToCart(selectedParams));
    return shoppingCart;
  };
  console.log(shoppingCart);

  return (
    <div className={style.container}>
      {sizeMesh && <SizeMesh setSizeMesh={setSizeMesh} meshImg={meshImg} />}
      <Title text={titleName} />

      <div className={style.content}>
        <img className={style.content_image} src={imageSrc} alt={titleName} />
        <div className={style.content_inner}>
          <PriceButton
            price={dataPrice}
            btnWidth={140}
            btnMargin={0}
            btnPadding={11}
            btnFontSize={25}
            btnMarginBottom={20}
          />
          <p className={style.desc}>{dataDesc}</p>
          <button className={style.size_mesh} onClick={() => setSizeMesh(true)}>
            Размерная сетка
          </button>
          <div className={style.size_switcher}>
            <p className={style.switcher_text}>Выберите размер:</p>
            <div className={cl(style.form_radio_group, style.checkbox_wrapper)}>
              <div className={cl(style.form_radio_group, style.item)}>
                <input
                  id='radio-1'
                  type='radio'
                  name='radio'
                  value='XS'
                  checked={isRadioSelected("XS")}
                  onChange={handleRadioClick}
                />
                <label htmlFor='radio-1'>XS</label>
              </div>
              <div className={cl(style.form_radio_group, style.item)}>
                <input
                  id='radio-2'
                  type='radio'
                  name='radio'
                  value='S'
                  checked={isRadioSelected("S")}
                  onChange={handleRadioClick}
                />
                <label htmlFor='radio-2'>S</label>
              </div>
              <div className={cl(style.form_radio_group, style.item)}>
                <input
                  id='radio-3'
                  type='radio'
                  name='radio'
                  value='M'
                  checked={isRadioSelected("M")}
                  onChange={handleRadioClick}
                />
                <label htmlFor='radio-3'>M</label>
              </div>
              <div className={cl(style.form_radio_group, style.item)}>
                <input
                  id='radio-4'
                  type='radio'
                  name='radio'
                  value='L'
                  checked={isRadioSelected("L")}
                  onChange={handleRadioClick}
                />
                <label htmlFor='radio-4'>L</label>
              </div>
              <div className={cl(style.form_radio_group, style.item)}>
                <input
                  id='radio-5'
                  type='radio'
                  name='radio'
                  value='XL'
                  checked={isRadioSelected("XL")}
                  onChange={handleRadioClick}
                />
                <label htmlFor='radio-5'>XL</label>
              </div>
            </div>
            <div className={style.basket_control}>
              <div className={style.count_control}>
                <img src={arrayL} alt='arrayL' onClick={() => decrement()} />
                <input
                  className={style.counter}
                  type='number'
                  name='counter'
                  id='counter'
                  onChange={(e) => currentCount(e)}
                  value={counterNumber}
                />
                <img src={arrayR} alt='arrayR' onClick={() => increment()} />
              </div>
              <button
                className={style.add_to_cart}
                onClick={addingToCart}
                // onClick={() => setToggleModal(!toggleModal)}
              >
                Добавить в корзину
              </button>
              <DemoErr
                setToggleModal={setToggleModal}
                toggleModal={toggleModal}
              />
            </div>
          </div>
        </div>
      </div>
      <Popular />
    </div>
  );
};

export default CardItem;
