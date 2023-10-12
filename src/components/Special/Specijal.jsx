import React from "react";
import "./Special.css";
import { useSelector } from "react-redux";
import SubHeading from "../SubHeading/SubHeading";

function Specijal() {
  const { language } = useSelector((state) => state.settings);

  return (
    <div className="app__bg app__wrapper section__padding" id="menu">
      <div className="app__wrapper_info">
        <SubHeading />
        <h1 className="headtext__cormorant">
          {language === "En" ? "Menu" : "Ponuda"}
        </h1>

        <div className="app__chef-content" data-aos="fade-right">
          <h2 className="spec_title aos-init aos-animate" data-aos="fade-left">
            {language === "En"
              ? "1. Training of non-swimmers - basic swimming"
              : "1. Obuka neplivača - bazično plivanje"}{" "}
          </h2>
          <div className="app__chef-content-quote">
            <p className="p__opensans">
              {language === "En"
                ? "n this program, non-swimmers will learn how to properly maintain themselves in the water, movements that allow basic movement through the water, including breathing, proper hand and footwork technique."
                : "U ovom programu, neplivači će naučiti kako se pravilno održavati  na vodi ,  pokrete koji omogućavaju osnovno  kretanje kroz vodu , uključujući disanje, pravilnu tehniku rada  ruku i nogu."}
            </p>
          </div>
        </div>
        <div className="app__chef-content" data-aos="fade-right">
          <h2 className="spec_title aos-init aos-animate" data-aos="fade-left">
            {language === "En"
              ? "2. Training in swimming techniques"
              : "2.Obuka tehnika plivanja"}
          </h2>
          <div className="app__chef-content-quote">
            <p className="p__opensans">
              {language === "En"
                ? "This program is intended for people who already have a basic knowledge of swimming, but want to learn or improve their swimming technique. In this program, the coach will work with clients on mastering the correct breathing technique, maintaining the correct position and rotation of the body in the water, coordination of arm and leg movements, increasing swimming speed, as well as improving general endurance."
                : "Ovaj program je namenjen ljudima koji već imaju osnovno znanje o plivanju, ali žele da nauče ili  usavrše svoju tehniku plivanja. U ovom programu, trener će raditi sa klijentima na savladavanju pravilne tehnike disanja,održavanju pravilnog položaja i  rotacije tela u vodi , koordinaciju pokreta ruku i nogu , povećavanju brzine plivanja, kao i na poboljšavanju opšte izdržljivosti."}
            </p>
          </div>
        </div>

        <div className="app__chef-content" data-aos="fade-right">
          <div className="app__chef-content-quote">
            <p className="p__opensans">
              {language === "En"
                ? "Price of the lesson: 1200 dinars"
                : "Cena časa :1200 din"}
            </p>
          </div>
        </div>
        <div className="" data-aos="fade-right">
          <div>
            <p className="p__opensans">
              {language === "En"
                ? "Lesson duration: 30 min"
                : "Trajanje časa:30 min"}
            </p>
          </div>
        </div>
        <div className="app__chef-content" data-aos="fade-right">
          <div className="">
            <p className="p__opensans">
              {language === "En"
                ? "Classes are held at the Slana Bar swimming pool on Klisa in Novi Sad"
                : "Časovi se održavaju na bazenu Slana Bara na Klisi u Novom Sadu"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specijal;
