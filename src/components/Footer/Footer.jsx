import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { useSelector } from "react-redux";
import images from "../../constants/images";
import "./Footer.css";

function Footer() {
  const { language } = useSelector((state) => state.settings);

  return (
    <div className="app__footer section__padding" id="login">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">
            {language === "En" ? "Contact Us" : "Kontaktirajte nas"}
          </h1>
          <p className="p__opensans" dir="ltr">
            <a href="tel://+381641494033">
              <i
                className="uil uil-phone"
                aria-label="Home icon"
                data-aos="fade-right"
                data-aos-duration="700"
              />
              +381641494033
            </a>
          </p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.logo} alt="footer_logo" />
          <div className="app__footer-links_icons">
            <a href="https://www.facebook.com/zoranbozovic69"
              target="_blank"
              rel="noreferrer" >
              <FiFacebook />
            </a>
            <a
              href="https://twitter.com/bozovic__zoran"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter />
            </a>
            <a
              href="https://instagram.com/instruktorbozoviczoran?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">
            {language === "En" ? "Working Hours" : "Radno Vreme"}
          </h1>
          <p className="p__opensans">
            {language === "En" ? "Monday-Friday:" : "Ponedeljak-Sreda-Petak"}
          </p>
          <p className="p__opensans">
            {language === "En" ? "13:00 - 16:30" : "13:00 - 16:30"}
          </p>
          <p className="p__opensans">
            {language === "En" ? "Saturday-Sunday:" : "Utorak-Četvrtak"}
          </p>
          <p className="p__opensans">
            {language === "En" ? "13:00 - 17:15" : "13:00 - 17:15"}
          </p>
          <p className="p__opensans">
            {language === "En" ? "Saturday:" : "Subota"}
          </p>
          <p className="p__opensans">
            {language === "En" ? "08:45 - 10:00" : "08:45 - 10:00"}
          </p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans" dir="ltr">
          Copyright &copy;
          {new Date().getFullYear()}{" "}
          <span>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/adrijana-savi%C4%87-50249176/"
              target="_blank"
              
            >
              Adrijana Savić
            </a>
          </span>
          . All Rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
