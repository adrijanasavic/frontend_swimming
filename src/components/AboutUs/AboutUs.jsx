import React from 'react';
import "./AboutUs.css";
import { useSelector } from 'react-redux';
import data from "../../constants/data";
import images from "../../constants/images";

function AboutUs() {
  const { language } = useSelector((state) => state.settings);
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about ">
          <img
            src={images.swimming}
            alt="swimming_img"
            className="swimming_img"
          />
          <p className="p__opensans">{data.about.msc1[language]}</p>
          <p className="p__opensans">{data.about.msc2[language]}</p>
        </div>
        <div className="app__aboutus-content_swimm flex__center">
          <h1 className="headtext__cormorant">
            {language === "En" ? "MSc Zoran Božović" : "MSc Zoran Božović"}
          </h1>
          <img src={images.profil} alt="profile" />
        </div>
        <div className="app__aboutus-content_history ">
          <img
            src={images.swimming}
            alt="swimming_img"
            className="swimming_img"
          />
          <p className="p__opensans">{data.about.bio1[language]}</p>
          <p className="p__opensans">{data.about.bio2[language]}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs
