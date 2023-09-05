import React from 'react';
import "./AboutUs.css";
import { useSelector } from 'react-redux';
import data from "../../constants/data";
import images from "../../constants/images";

function AboutUs() {
  const { language } = useSelector((state) => state.settings);
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding" id="about"
      
    >
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about ">
          <img
            src={images.swimming}
            alt="swimming_img"
            className="swimming_img"
          />
          <p className="p__opensans" data-aos="flip-left">{data.about.msc1[language]}</p>
          <p className="p__opensans" data-aos="flip-left">{data.about.msc2[language]}</p>
        </div>
        <div className="app__aboutus-content_swimm flex__center">
          <img src={images.profil} alt="profile" />
          <h1 className="headtext__cormorant">
            {language === "En" ? "Msc Zoran Božović" : "Msc Zoran Božović"}
          </h1>
        </div>
        <div className="app__aboutus-content_history ">
          <img
            src={images.swimming}
            alt="swimming_img"
            className="swimming_img"
          />
          <p className="p__opensans" data-aos="flip-right">{data.about.bio1[language]}</p>
          <p className="p__opensans" data-aos="flip-right">{data.about.bio2[language]}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs
