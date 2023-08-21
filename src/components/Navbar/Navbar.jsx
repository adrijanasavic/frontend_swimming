import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "./../../redux/settingsSlice";
import images from "./../../constants/images";
import data from "./../../constants/data";
import { FaSwimmer } from "react-icons/fa";
import "./Navbar.css";
import { useNavigate } from "react-router-dom"

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const { language } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.logo} alt="Logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/">{data.nav.Home[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#about">{data.nav.About[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">{data.nav.Menu[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#blog">{data.nav.Blog[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">{data.nav.Contact[language]}</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <select
          className="select__opensans"
          onChange={(e) => {
            let lang = e.target.value
            dispatch(setLanguage(lang));
            if (lang === "Sr") {
              navigate("/")
            } else {
              navigate("/en")
            }
          }}
          value={language}
        >
          <option>En</option>
          <option>Sr</option>
        </select>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="white"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <FaSwimmer
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a
                  href="/"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {data.nav.Home[language]}
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#about"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {data.nav.About[language]}
                </a>
              </li>
              <li
                className="p__opensans"
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <a href="#menu">{data.nav.Menu[language]}</a>
              </li>
              <li className="p__opensans">
                <a
                  href="#blog"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {data.nav.Blog[language]}
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#contact"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {data.nav.Contact[language]}
                </a>
              </li>
              <li className="p__opensans">
                <select
                  className="select__opensans"
                  onChange={(e) => {
                    dispatch(setLanguage(e.target.value));
                  }}
                  value={language}
                >
                  <option>En</option>
                  <option>Sr</option>
                </select>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
