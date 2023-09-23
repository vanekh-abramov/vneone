import style from "./Footer.module.scss";
import logo from "../../assets/logo/logo.svg";
import inst from "../../assets/footer/instagram_black_logo.svg";
import vk from "../../assets/footer/icons8-vk.svg";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.links}>
          <img className={style.logo} src={logo} alt='logo' />
          <img src={inst} alt='' className={style.social_logos} />
          <img src={vk} alt='' className={style.social_logos} />
        </div>
        <p className={style.footer_year}>© 2023 vneone.com</p>
        <p className={style.email}>E-MAIL:support@vneone.com</p>
      </div>
    </div>
  );
};

export default Footer;
