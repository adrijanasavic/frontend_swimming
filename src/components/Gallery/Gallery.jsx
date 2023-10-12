import React, { useRef } from "react";
import "./Gallery.css";
import { useSelector } from "react-redux";
import images from "../../constants/images";
import data from "../../constants/data";
import SubHeading from "../SubHeading/SubHeading";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const gallery = [
  images.bazen1,
  images.bazen2,
  images.bazen3,
  images.bazen4,
  images.bazen17,
  images.bazen5,
  images.bazen6,
  images.bazen7,
  images.bazen8,
  images.bazen9,
  images.bazen10,
  images.bazen11,
  images.bazen12,
  images.bazen13,
  images.bazen14,
  images.bazen15,
  images.bazen16,
  images.bazen18,
  images.bazen19,
  images.bazen20,
];

function Gallery() {
  const { language } = useSelector((state) => state.settings);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <SubHeading />
        <h1 className="headtext__cormorant">
          {language === "En" ? "Photo Gallery" : "Naša Galerija"}
        </h1>
        <p
          className="p__opensans"
          style={{ color: "#1119", marginTop: "2rem" }}
        >
          {data.about.bio1[language]}
        </p>
        {/* <button type="button" className="custom__button">
                  <a href="https://www.instagram.com/instruktorbozoviczoran/?igshid=MzRlODBiNWFlZA%3D%3D">{language === "En" ? "View More" : "Opširnije"}</a>
        </button> */}
      </div>
      <div className="app__gallery-images" dir="ltr">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {gallery.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index}`}
            >
              <img src={image} alt="gallery" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
