import style from "./Header.module.scss";
// import logo from "../../assets/logo/logo.svg";
import logo from "../../assets/svg/logo-no-background.svg";

import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const [basketToggle, setBasketToggle] = useState(false);
  const { shoppingCart } = useSelector((state) => state.data);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link className={style.logo_wrapper} to={"/"}>
          <img src={logo} alt='' className={style.logo_img} />
        </Link>
        <div className={style.header_nav}>
          <div
            className={style.basket}
            onClick={() => setBasketToggle(!basketToggle)}
          >
            {shoppingCart.length ? (
              <div className={style.empty_check}>{shoppingCart.length}</div>
            ) : null}
            <svg
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M25.1951 33.2737C24.5131 33.2737 23.9602 32.7228 23.9602 32.0433V27.1219C23.9602 26.4423 24.5131 25.8915 25.1951 25.8915C25.8772 25.8915 26.4301 26.4423 26.4301 27.1219V32.0433C26.4301 32.7228 25.8772 33.2737 25.1951 33.2737Z'
                fill='white'
              />
              <path
                d='M20.2554 33.2737C19.5733 33.2737 19.0204 32.7228 19.0204 32.0433V27.1219C19.0204 26.4423 19.5733 25.8915 20.2554 25.8915C20.9374 25.8915 21.4903 26.4423 21.4903 27.1219V32.0433C21.4903 32.7228 20.9374 33.2737 20.2554 33.2737Z'
                fill='white'
              />
              <path
                d='M30.1349 33.2737C29.4529 33.2737 28.9 32.7228 28.9 32.0433V27.1219C28.9 26.4423 29.4529 25.8915 30.1349 25.8915C30.817 25.8915 31.3699 26.4423 31.3699 27.1219V32.0433C31.3699 32.7228 30.817 33.2737 30.1349 33.2737Z'
                fill='white'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21.6578 12.8153C21.9962 12.2253 22.7506 12.0203 23.3427 12.3574C23.9349 12.6946 24.1406 13.4462 23.8022 14.0361L19.8253 20.97H30.5649L26.588 14.0361C26.2497 13.4462 26.4554 12.6946 27.0476 12.3574C27.6397 12.0203 28.3941 12.2253 28.7325 12.8153L33.4096 20.97H35.7243C37.2968 20.97 38.4688 22.4145 38.1394 23.9463L35.4931 36.2499C35.2491 37.3846 34.2427 38.1951 33.078 38.1951H17.3123C16.1476 38.1951 15.1412 37.3846 14.8972 36.2499L12.2509 23.9463C11.9214 22.4145 13.0935 20.97 14.666 20.97H16.9806L21.6578 12.8153ZM17.3123 35.7344L14.666 23.4307H35.7243L33.078 35.7344H17.3123Z'
                fill='white'
              />
            </svg>
          </div>
          {/* <div className={style.profile}>
            <svg
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M30.75 17.7778C30.75 20.9688 28.1756 23.5556 25 23.5556C21.8244 23.5556 19.25 20.9688 19.25 17.7778C19.25 14.5868 21.8244 12 25 12C28.1756 12 30.75 14.5868 30.75 17.7778ZM27.875 17.7778C27.875 19.3733 26.5879 20.6667 25 20.6667C23.4121 20.6667 22.125 19.3733 22.125 17.7778C22.125 16.1823 23.4121 14.8889 25 14.8889C26.5879 14.8889 27.875 16.1823 27.875 17.7778Z'
                fill='white'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M36.5 32.4629C36.5 31.837 36.3048 31.2218 35.8984 30.7474C33.2622 27.6705 29.3575 25.7222 25 25.7222C20.6424 25.7222 16.7378 27.6705 14.1016 30.7474C13.6952 31.2218 13.5 31.837 13.5 32.4629V35.1111C13.5 36.7066 14.7872 38 16.375 38H33.625C35.2129 38 36.5 36.7066 36.5 35.1111V32.4629ZM33.625 32.5231C31.5137 30.1198 28.4338 28.6111 25 28.6111C21.5663 28.6111 18.4863 30.1198 16.375 32.5231V35.1111H33.625V32.5231Z'
                fill='white'
              />
            </svg>
          </div> */}
        </div>
      </div>
      {basketToggle && (
        <Cart basketToggle={basketToggle} setBasketToggle={setBasketToggle} />
      )}
    </header>
  );
};

export default Header;
