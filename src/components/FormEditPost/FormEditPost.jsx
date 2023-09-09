import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FileService from "../../services/fileService";
import { Link } from "react-router-dom";

const initData = {
    title: "",
    description: "",
    picture: "",
    titleEn: "",
    descriptionEn: "",
    date: ""
};

function FormEditPost() {
    const [data, setData] = useState(initData);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        getPostById();
    }, []);

    const getPostById = async () => {
        const response = await axios.get(`/post/${id}`);
        console.log(response);
        setData(response.data);
    };

    const updatePost = async (e) => {
        e.preventDefault();

        axios.patch(`/post/${id}`, {
            title: data.title,
            description: data.description,
            picture: data.picture,
            titleEn: data.titleEn,
            descriptionEn: data.descriptionEn,

        });
        navigate("/");
    };

    const updateData = (event) => {
        const newData = { ...data };
        newData[event.target.name] = event.target.value;
        setData(newData);
    };

    const updatePostFile = (event) => {
        FileService.toBase64(event.target.files[0]).then((pictureString) => {
            const newData = { ...data };
            newData[event.target.name] = pictureString;
            setData(newData);
        });
    };

    return (
        <form className="box" onSubmit={updatePost} method="post">
            <div className="box__form">
                <h2>Izmena Posta</h2>
                <div className="box__form--input-box">
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        name="title"
                        placeholder=""
                        required="required"
                        onChange={updateData}
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
                        onChange={updateData}
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
                        onChange={updateData}
                    />
                    <label htmlFor="title">Naslov Eng</label>
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
                        onChange={updateData}
                    />
                    <label htmlFor="description">Opis Eng</label>
                    <i></i>
                </div>
                <div className="box__form--input-box">
                    <input
                        type="text"
                        id="date"
                        value={data.date}
                        name="date"
                        placeholder=""
                        required="required"
                        onChange={updateData}
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
                        onInput={updatePostFile}
                    />
                    <label htmlFor="pdf" type="file">
                        Slika
                    </label>
                    <i></i>
                </div>

                <div className="box__form--link">
                    <Link to="/dashboard">Back to Dashboard</Link>
                </div>
                <input type="submit" value={"Sacuvaj"} />
            </div>
        </form>
    );
}

export default FormEditPost
