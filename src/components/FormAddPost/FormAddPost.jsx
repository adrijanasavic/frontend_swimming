import React, { useState } from "react";
import FileService from "../../services/fileService";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const initData = {
  title: "",
  description: "",
  picture: "",
  titleEn: "",
  descriptionEn: "",
  date: "",
};

function FormAddPost() {
  const [data, setData] = useState(initData);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleInputFile = (event) => {
    const newData = { ...data };
    newData[event.target.name] = event.target.files[0];
    setData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    FileService.toBase64(data.picture).then((pdfString) => {
      axios
        .post("http://localhost:4000/post", {
          title: data.title,
          description: data.description,
          picture: pdfString,
          titleEn: data.titleEn,
          descriptionEn: data.descriptionEn,
          date: data.date,
        })
        .then((res) => {
          console.log(res.data);
          navigate("/");
        });
    });
    setData({
      title: "",
      description: "",
      picture: "",
      titleEn: "",
      descriptionEn: "",
      date: "",
    });
  };

  return (
    <form className="box" onSubmit={handleSubmit} method="post">
      <div className="box__form">
        <h2>Novi Post</h2>
        <div className="box__form--input-box">
          <input
            type="text"
            id="title"
            value={data.title}
            name="title"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="title">Naslov</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="description"
            value={data.description}
            name="description"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="description">Opis</label>
          <i></i>
        </div>

        <div className="box__form--input-box">
          <input
            type="text"
            id="titleEn"
            value={data.titleEn}
            name="titleEn"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="title">Naslov eng</label>
          <i></i>
        </div>
        <div className="box__form--input-box">
          <input
            type="text"
            id="descriptionEn"
            value={data.descriptionEn}
            name="descriptionEn"
            placeholder=""
            required="required"
            onInput={handleInputChange}
          />
          <label htmlFor="description">Opis eng</label>
          <i></i>
        </div>

        <div className="box__form--input-box">
          <input
            type="text"
            id="date"
            value={data.date}
            name="date"
            placeholder=""
            onInput={handleInputChange}
          />
          <label htmlFor="description">Datum</label>
          <i></i>
        </div>

        <div className="box__form--input-box">
          <input
            type="file"
            id="picture"
            name="picture"
            placeholder=""
            onInput={handleInputFile}
          />
          <label htmlFor="pdf" type="file">
            Slika
          </label>
          <i></i>
        </div>

        <div className="box__form--link">
          <Link to="/dashboard">Back to Dashboarde</Link>
        </div>
        <input type="submit" value={"Dodaj"} />
      </div>
    </form>
  );
}
export default FormAddPost;
