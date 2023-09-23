import style from "./Contacts.module.scss";
import vk from "../../assets/social/VK.svg";
import inst from "../../assets/social/Inst.svg";

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.youtube}>
        <p className={style.title}>YouTube канал vneone official</p>
        <iframe
          className={style.video}
          src='https://vk.com/video_ext.php?oid=-60191566&id=456240149&hd=1&autoplay=1'
          width='560'
          height='315'
          allow='encrypted-media; fullscreen; picture-in-picture;'
          frameBorder='0'
          // allowfullScreen
        ></iframe>
      </div>
      <div className={style.social_links}>
        <p className={style.title}>Мы в соц сетях </p>
        <div className={style.links_content}>
          <a href='#' className={style.link_box}>
            <img className={style.link_icon} src={vk} alt='vk' />
            <p className={style.link_text}>VK группа</p>
          </a>
          <a href='#' className={style.link_box}>
            <img className={style.link_icon} src={inst} alt='inst' />
            <p className={style.link_text}>Instagram </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;