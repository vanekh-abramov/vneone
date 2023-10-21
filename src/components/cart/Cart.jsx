import style from "./Cart.module.scss";
import prev from "../../assets/popular-slider/prevIcon.svg";
import del from "../../assets/card/del.jpg";

import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart } from "../../features/data/fakeDataSlice";

const Cart = ({ basketToggle, setBasketToggle }) => {
  const { shoppingCart } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const removeItem = (keyID) => {
    console.log(keyID);
    dispatch(deleteFromCart(keyID));
  };

  const newCart = shoppingCart?.map(({ price, count }) => price * count);
  const totalPrice =
    newCart.length !== 0
      ? newCart.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        )
      : 0;

  return (
    <>
      {basketToggle &&
        createPortal(
          <div className={style.container}>
            <div
              className={style.cart_head}
              onClick={() => setBasketToggle(!basketToggle)}
            >
              <img src={prev} alt='' />
              <p className={style.back}>продолжить покупки</p>
            </div>
            <p className={style.title}>Мои покупики</p>
            <div className={style.items_container}>
              {shoppingCart.map(
                ({ id, name, count, image, price, size }, keyID) => (
                  <div key={keyID} className={style.item}>
                    <img
                      className={style.item_del}
                      src={del}
                      alt='delete'
                      onClick={() => removeItem(keyID)}
                    />
                    <div className={style.item_content}>
                      <Link to={"/goods/" + id}>
                        <img
                          className={style.item_image}
                          src={image[0]}
                          alt='image'
                        />
                      </Link>
                      <div className={style.content_inner}>
                        <Link to={"/goods/" + id}>
                          <p className={style.item_title}>{name + " " + id}</p>
                        </Link>
                        <p className={style.item_size_title}>Размер:</p>
                        <p className={style.size}>{size}</p>
                        <p className={style.count_title}>Количество:</p>
                        <div className={style.count_wrapper}>
                          <div className={style.count}>{count}</div>
                        </div>
                        <p className={style.price}>{price * count}$</p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className={style.bottom_container}>
              <p className={style.total_price}>Итого: {totalPrice}$</p>
              <button className={style.buy_btn}>Оформить заказ</button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Cart;
