import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/settingsSlice";
import images from "../constants/images";
import item from "../constants/data";
import { FaSwimmer } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const { language } = useSelector((state) => state.settings);

  const dispatch = useDispatch();
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">{item.nav.Home[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#about">{item.nav.About[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">{item.nav.Menu[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">{item.nav.Contact[language]}</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <select
          className="select__opensans"
          onChange={(e) => {
            dispatch(setLanguage(e.target.value));
            if (e.target.value === "Sr") {
              document.getElementById("root").dir = "rtl";
              document.documentElement.style.setProperty(
                "--font-alt",
                "'Vazirmatn', sans-serif"
              );
              document.documentElement.style.setProperty(
                "--font-base",
                "'Farnaz', sans-serif"
              );
            } else {
              document.getElementById("root").dir = "ltr";
              document.documentElement.style.setProperty(
                "--font-alt",
                "'Open Sans', sans-serif"
              );
              document.documentElement.style.setProperty(
                "--font-base",
                "'Cormorant Upright', sans-serif"
              );
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
                  href="#home"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {item.nav.Home[language]}
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#about"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {item.nav.About[language]}
                </a>
              </li>
              <li
                className="p__opensans"
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <a href="#menu">{item.nav.Menu[language]}</a>
              </li>
              <li className="p__opensans">
                <a
                  href="#contact"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {item.nav.Contact[language]}
                </a>
              </li>
              <li className="p__opensans">
                <select
                  className="select__opensans"
                  onChange={(e) => {
                    dispatch(setLanguage(e.target.value));
                    if (e.target.value === "Sr") {
                      document.getElementById("root").dir = "rtl";
                      document.documentElement.style.setProperty(
                        "--font-alt",
                        "'Vazirmatn', sans-serif"
                      );
                      document.documentElement.style.setProperty(
                        "--font-base",
                        "'Farnaz', sans-serif"
                      );
                    } else {
                      document.getElementById("root").dir = "ltr";
                      document.documentElement.style.setProperty(
                        "--font-alt",
                        "'Open Sans', sans-serif"
                      );
                      document.documentElement.style.setProperty(
                        "--font-base",
                        "'Cormorant Upright', sans-serif"
                      );
                    }
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
