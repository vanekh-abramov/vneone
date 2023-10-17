import style from "./Cart.module.scss";
import prev from "../../assets/popular-slider/prevIcon.svg";
import del from "../../assets/card/del.jpg";
import cardPhoto from "../../assets/card/card_photo.png";

import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart } from "../../features/data/fakeDataSlice";

const Cart = ({ basketToggle, setBasketToggle }) => {
  const { shoppingCart } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(deleteFromCart(id));
  };
  console.log(shoppingCart);

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
                      onClick={() => removeItem(id)}
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
                        <p className={style.price}>{price}$</p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Cart;
