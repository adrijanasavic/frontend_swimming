import React from 'react'
import SubHeading from '../SubHeading/SubHeading';
import data from '../../constants/data';
import images from '../../constants/images';
import { useSelector } from 'react-redux';
import "./Experiences.css";

function Experiences() {
    const { language } = useSelector((state) => state.settings);
    return (
        <div className="app__wrapper section__padding" id="about">

            <div className="app__aboutus-content_history ">
                {/* <SubHeading />
                <h1 className="headtext__cormorant">
                    {language === "En" ? "Experiences" : "Iskustva"}
                </h1> */}
                <div className="app__chef-content-quote">
                    <img src={images.quote} alt="quote" />
                    <p className="p__opensans" data-aos="fade-right">{data.experiences.des1[language]}</p>
                </div>

                <div className="app__chef-content-quote">
                    <p className="p__opensans" data-aos="fade-right">{data.experiences.des2[language]}</p>
                </div>

                <div className="app__chef-content-quote">
                    <img src={images.quote} alt="quote" />
                    <p className="p__opensans" data-aos="fade-right">{data.experiences.des3[language]}</p>
                </div>
                <div className="app__chef-sign">
                    <img src={images.signature} alt="sign" />
                </div>
            </div>
        </div>
    );
}

export default Experiences
