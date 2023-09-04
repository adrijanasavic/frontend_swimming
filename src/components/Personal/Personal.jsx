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
          <div className="app__wrapper_img app__wrapper_img-reverse" data-aos="zoom-in-up">
              <img src={images.bazen2} alt="chef" />
          </div>
          <div className="app__wrapper_info">
              <SubHeading
              />
              <h1 className="headtext__cormorant">
                  {language === "En" ? "Kinesitherapy" : "Kineziterapija"}
              </h1>
              <div className="app__chef-content" data-aos="zoom-out-down">
                  <div className="app__chef-content-quote">
                      <img src={images.quote} alt="quote" />
                      <p className="p__opensans">{data.kinesi.des1[language]}</p>
                      
                  </div>
                  <p className="p__opensans">{data.kinesi.des2[language]}</p>
              </div>
              <div className="app__chef-sign">

              </div>

              <div className="app__chef-content" data-aos="zoom-out-down">
                  <div className="app__chef-content-quote">
                      <img src={images.quote} alt="quote" />
                      <p className="p__opensans">{data.kinesi.des3[language]}</p>

                  </div>
                  <p className="p__opensans">{data.kinesi.des4[language]}</p>
              </div>
              <div className="app__chef-sign">

                  <img src={images.signature} alt="sign" />
              </div>
          </div>
      </div>
  )
}

export default Personal
