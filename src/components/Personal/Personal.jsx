import React from "react";
import "./Personal.css";
import SubHeading from "../SubHeading/SubHeading";
import images from "../../constants/images";
import data from "../../constants/data";
import { useSelector } from "react-redux";

function Personal() {

    const { language } = useSelector((state) => state.settings);

  return (
      <div className="app__bg app__wrapper section__padding">
          <div className="app__wrapper_img app__wrapper_img-reverse">
              <img src={images.profil} alt="chef" />
          </div>
          <div className="app__wrapper_info">
              <SubHeading
              />
              <h1 className="headtext__cormorant">
                  {language === "En" ? "MSc Zoran Božović" : "MSc Zoran Božović"}
              </h1>
              <div className="app__chef-content">
                  <div className="app__chef-content-quote">
                      <img src={images.quote} alt="quote" />
                      <p className="p__opensans">{data.about.msc1[language]}</p>
                  </div>
                  <p className="p__opensans">{data.about.msc2[language]}</p>
              </div>
              <div className="app__chef-sign">
                  <p className="p__opensans">
                      {language === "En" ? "Enrollment throughout the year" : "Upis tokom cele godine"}
                  </p>
                  <img src={images.signature} alt="sign" />
              </div>
          </div>
      </div>
  )
}

export default Personal
