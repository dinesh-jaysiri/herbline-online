import brand_logo_light from "../Images/logo_online_light.png";
import facebook from "../Images/facebook.svg";
import sprite from "../Images/sprite2.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <img className="footer__logo" src={brand_logo_light} alt="" />
        <div className="icon__container">
          <svg className="icon">
            <use xlinkHref={sprite + "#facebook"}></use>
          </svg>
          <a href="https://wa.me/+94719138538">
            <svg className="icon">
              <use xlinkHref={sprite + "#whatsapp"}></use>
            </svg>
          </a>
        </div>
      </div>
      <div className="copy_right">
        {"Copyright ©" +
          new Date().getFullYear() +
          " Herbline.online All Rights Reserved."}
      </div>
    </div>
  );
};

export default Footer;
