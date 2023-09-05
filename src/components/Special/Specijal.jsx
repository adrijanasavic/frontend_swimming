import React from "react";
import "./Special.css";
import { useSelector } from "react-redux";
import SubHeading from "../SubHeading/SubHeading";
import MenuItem from "../MenuItem/MenuItem";
import images from "../../constants/images";
import data from "../../constants/data";

function Specijal() {
  const { language } = useSelector((state) => state.settings);

  return (





    <div className="app__bg app__wrapper section__padding" id="menu">
      <div className="app__wrapper_info">
        <SubHeading
        />
        <h1 className="headtext__cormorant">
          {language === "En" ? "Menu" : "Ponuda"}
        </h1>
        <div className="app__chef-content" data-aos="zoom-out-down">
          <div className="app__chef-content-quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">{language === "En" ? "Class 30 min" : "Cena individualnog treninga već od 1200 dinara za pola sata. Svaki trening se prilagođava potrebama i ciljevima klijenata."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specijal;
