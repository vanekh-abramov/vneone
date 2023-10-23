import style from "./Footer.module.scss";
// import logo from "../../assets/logo/logo.svg";
import logo from "../../assets/svg/logo-no-background.svg";
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
        <div className={style.teg_block}>
          <p className={style.footer_year}>© 2023 companyname</p>
          <p className={style.email}>E-MAIL:support@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
