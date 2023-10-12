import React from "react";
import "./Personal.css";
import SubHeading from "../SubHeading/SubHeading";
import images from "../../constants/images";
import data from "../../constants/data";
import { useSelector } from "react-redux";

function Personal() {
  const { language } = useSelector((state) => state.settings);

  return (
    <div className="app__bg app__wrapper section__padding" id="kinesi">
      <div className="app__wrapper_info">
        <SubHeading />
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

        <div className="app__chef-content" data-aos="zoom-out-down">
          <div className="app__chef-content-quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">{data.kinesi.des3[language]}</p>
          </div>
          <p className="p__opensans">{data.kinesi.des4[language]}</p>
        </div>
        {/* <div className="app__chef-sign">
          <img src={images.signature} alt="sign" />
        </div> */}

        <div className="app__personal-links">
          <div className="app__personal-links_work">
            <h3 className="app__personal-headtext">
              {language === "En"
                ? "Venue of kinesitherapy classes"
                : "Mesto održavanja časova kineziterapije"}
            </h3>
            <p className="p__opensans">
              <a href="https://nolimitgym.rs/" target="_blank">
                {language === "Gym - No Limit Gym"
                  ? "eee"
                  : "Teretana - No Limit Gym"}
              </a>
            </p>
            <p className="p__opensans"></p>
            <p className="p__opensans">
              {language === "En"
                ? "Branka Bajića 11 - Novi Sad"
                : "Branka Bajića 11 - Novi Sad"}
            </p>
          </div>

          <div className="app__personal-links_work">
            <h3 className="app__personal-headtext">
              {language === "En" ? "Working Hours" : "Radno Vreme"}
            </h3>
            <p className="p__opensans">
              {language === "En" ? "Monday-Friday:" : "Ponedeljak-Petak"}
            </p>
            <p className="p__opensans">
              {language === "En" ? "09:00 - 12:00" : "09:00 - 12:00"}
            </p>

            <p className="p__opensans">
              {language === "En" ? "Saturday:" : "Subota"}
            </p>
            <p className="p__opensans">
              {language === "En" ? "11:00 - 15:00" : "11:00 - 15:00"}
            </p>
            <p className="p__opensans">
              {language === "En" ? "Sunday - non-working" : "Nedelja - neradna"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
