import React from 'react';
import "./AboutUs.css";
import { useSelector } from 'react-redux';
import data from "../../constants/data";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";

function AboutUs() {
  const { language } = useSelector((state) => state.settings);
  return (
    <div className="app__wrapper section__padding" id="about">
      <div className="app__wrapper_info">
        <SubHeading />
        {/* <h1 className="app__header-h1" data-aos="fade-left">
          {data.header.title[language]}
        </h1> */}
        
        <p className="p__opensans" style={{ margin: "2rem 0" }} data-aos="fade-right">
          {data.about.msc1[language]}
        </p>

        {/* <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans" data-aos="flip-left">{data.about.msc2[language]}</p>
        </div> */}


        <div className="app__wrapper_img">
          <img src={images.profil} alt="header img" />
          <h1 className="headtext__cormorant">
            {language === "En" ? "Msc Zoran Božović" : "Msc Zoran Božović"}
          </h1>
        </div>
       
      </div>
      <div className="app__aboutus-content_history ">
        {/* <img
          src={images.swimming}
          alt="swimming_img"
          className="swimming_img"
        /> */}
        <div className="app__chef-content-quote">
            <img src={images.quote} alt="quote" />
          <p className="p__opensans" data-aos="fade-right">{data.about.msc2[language]}</p>
        </div>
        
        <div className="app__chef-content-quote">
          <p className="p__opensans" data-aos="fade-right">{data.about.bio1[language]}</p>
        </div>

        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans" data-aos="fade-right">{data.about.bio2[language]}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs
