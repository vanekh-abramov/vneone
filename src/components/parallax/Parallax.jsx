import style from "./Parallax.module.scss";
// import parallax from "../../assets/parallax/parallax2.jpg";
import parallax from "../../assets/parallax/par.jpg";
// import inner_img from "../../assets/parallax/parallax_inner.png";
import inner_img from "../../assets/parallax/par_in.jpg";

const Parallax = () => {
  return (
    <div className={style.parallax}>
      <img className={style.parallax_img} src={parallax} alt='parallax' />
      <div className={style.parallax_inner}>
        <p className={style.inner_text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
          sit blanditiis quibusdam maxime voluptate pariatur.
        </p>
        <img className={style.inner_img} src={inner_img} alt='inner_img' />
      </div>
    </div>
  );
};

export default Parallax;
