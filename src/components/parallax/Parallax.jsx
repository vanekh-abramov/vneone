import style from "./Parallax.module.scss";
import parallax from "../../assets/parallax/parallax2.jpg";
import inner_img from "../../assets/parallax/parallax_inner.png";

const Parallax = () => {
  return (
    <div className={style.parallax}>
      <img className={style.parallax_img} src={parallax} alt='parallax' />
      <div className={style.parallax_inner}>
        <p className={style.inner_text}>
          Патч с неоновым принтом крепится на липучках, его можно легко снять
          перед стиркой.
        </p>
        <img className={style.inner_img} src={inner_img} alt='inner_img' />
      </div>
    </div>
  );
};

export default Parallax;
