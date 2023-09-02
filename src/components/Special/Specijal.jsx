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
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app_specialMenu-title">
        <SubHeading />
        <h1 className="headtext__cormorant">
          {language === "En" ? "Be in shape" : "Budite u formi"}
        </h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu-spec flex__center">
          <p className="app__specialMenu-menu_heading">
            {language === "En" ? "Class 30 min" : "Paket 5 časova"}
          </p>
          <div className="app__specialMenu-menu_items" data-aos="zoom-in-up">
            {data.package5[language].map((spec, index) => (
              <MenuItem
                key={spec.title + index}
                title={spec.title}
                price={spec.price}
                tags={spec.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu-spec flex__center">
          <p className="app__specialMenu-menu_heading">
            {language === "En" ? "Class 45 min" : "Paket 10 časova"}
          </p>
          <div className="app__specialMenu-menu_items" data-aos="zoom-in-up">
            {data.package10[language].map((ind, index) => (
              <MenuItem
                key={ind.title + index}
                title={ind.title}
                price={ind.price}
                tags={ind.tags}
              />
            ))}
          </div>
        </div>
        {/* <div className="app__specialMenu-menu_img">
                    <img src={images.logo} alt="menu" />
                </div> */}

        <div className="app__specialMenu-menu-spec flex__center">
          <p className="app__specialMenu-menu_heading">
            {language === "En" ? "Class 60 min" : "Paket 20 časova"}
          </p>
          <div className="app__specialMenu-menu_items" data-aos="zoom-in-up">
            {data.package20[language].map((ind, index) => (
              <MenuItem
                key={ind.title + index}
                title={ind.title}
                price={ind.price}
                tags={ind.tags}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <h2>Besplatan probni čas plivanja za nove klijente.</h2>
      <h2> Popust od 10% na pakete za studente i penzionere.</h2>
      <h2>
        {" "}
        Besplatan čas plivanja za svakog klijenta koji dovede novog klijenta
      </h2> */}
    </div>
  );
}

export default Specijal;
