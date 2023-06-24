import React from "react";
import data from "../../constants/data";
import images from "../../constants/images"
import SubHeading  from "../../components/SubHeading/SubHeading";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const { language } = useSelector((state) => state.settings);
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading />
        <h1 className="app__header-h1">
          {data.header.title[language]}
        </h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {data.header.description[language]}
        </p>
        <button type="button" className="custom__button" id="contact">
          <a href="tel://+381641494033">
            {language === "En" ? "Contact us" : "Kontaktirajte nas"}
          </a>
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.logo} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
