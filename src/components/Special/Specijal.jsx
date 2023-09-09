import React from "react";
import "./Special.css";
import { useSelector } from "react-redux";
import SubHeading from "../SubHeading/SubHeading";

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
       
        <div className="app__chef-content" data-aos="fade-right">
          <h2 class="spec_title aos-init aos-animate" data-aos="fade-left">1. Obuka neplivača - bazično plivanje  </h2>
          <div className="app__chef-content-quote">
            <p className="p__opensans">{language === "En" ? "Class 30 min" : "U ovom programu, neplivači će naučiti kako se pravilno održavati  na vodi ,  pokrete koji omogućavaju osnovno  kretanje kroz vodu , uključujući disanje, pravilnu tehniku rada  ruku i nogu ."}</p>
          </div>
        </div>
        <div className="app__chef-content" data-aos="fade-right">
          <h2 class="spec_title aos-init aos-animate" data-aos="fade-left">2.Obuka tehnika plivanja </h2>
          <div className="app__chef-content-quote">
            <p className="p__opensans">{language === "En" ? "Class 30 min" : "Ovaj program je namenjen ljudima koji već imaju osnovno znanje o plivanju, ali žele da nauče ili  usavrše svoju tehniku plivanja. U ovom programu, trener će raditi sa klijentima na savladavanju pravilne tehnike disanja,održavanju pravilnog položaja i  rotacije tela u vodi , koordinaciju pokreta ruku i nogu , povećavanju brzine plivanja, kao i na poboljšavanju opšte izdržljivosti."}</p>
          </div>
        </div>
        <div className="app__chef-content" data-aos="fade-right">
          <h2 class="spec_title aos-init aos-animate" data-aos="fade-left">1. Obuka neplivača - bazično plivanje </h2>
          <div className="app__chef-content-quote">
            <p className="p__opensans">{language === "En" ? "Class 30 min" : "U ovom programu, neplivači će naučiti kako se pravilno održavati  na vodi ,  pokrete koji omogućavaju osnovno  kretanje kroz vodu , uključujući disanje, pravilnu tehniku rada  ruku i nogu . "}</p>
          </div>
        </div>

        <div className="app__chef-content" data-aos="zoom-out-down">
          <div className="app__chef-content-quote">
            <p className="p__opensans">{language === "En" ? "Class 30 min" : "Cena časa :1200 din"}</p>
          </div>
        </div>
        <div className="" data-aos="zoom-out-down">
          <div >
            <p className="p__opensans">{language === "En" ? "Class 30 min" : "Trajanje časa:30 min"}</p>
          </div>
        </div>
        <div className="app__chef-content" data-aos="fade-right">
          <div className="">
            <p className="p__opensans">{language === "En" ? "Class 30 min" : "Časovi se održavaju na bazenu Slana Bara na Klisi u Novom Sadu"}</p>
          </div>
        </div>



      </div>
    </div>
    
  );
}

export default Specijal;
