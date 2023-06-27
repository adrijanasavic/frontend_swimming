import React, { useState } from 'react'
import FileService from '../../services/fileService';
import axios from 'axios';
import { Link } from "react-router-dom";

const initData = {
    title: "",
    description: "",
    picture: ""
};

function FormAddPost() {
    const [data, setData] = useState(initData);

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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        FileService.toBase64(data.picture).then((pdfString) => {
            axios
                .post("http://localhost:4000/posts", {
                    title: data.title,
                    description: data.description,
                    picture: pdfString,
                })
                .then((res) => {
                    console.log(res.data);
                });
        })
        setData({
            title: "",
            description: "",
            link: "",
            github: "",
            skill: "",
            picture: "",
        });
    };

    return (
        <form className="box" onSubmit={handleSubmit} method="post">
            <div className="box__form">
                <h2>New project</h2>
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
                    <label htmlFor="title">Title</label>
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
                    <label htmlFor="description">Description</label>
                    <i></i>
                </div>
                <div className="box__form--input-box">
                    <input
                        // style={{ display:"none"}}
                        type="file"
                        id="picture"
                        name="picture"
                        placeholder=""
                        onInput={handleInputFile}
                    />
                    <label htmlFor="pdf" type="file" >Picture</label>
                    <i></i>
                </div>

                <div className="box__form--link">
                    <Link to="/dashboard">Back to Dashboarde</Link>
                </div>
                <input type="submit" value={"Send"} />
            </div>
        </form>
    );
}
export default FormAddPost
