import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailPost.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailPost() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const { language } = useSelector((state) => state.settings);

    useEffect(() => {
        console.log(id);
        getPostById();
    }, []);

    const getPostById = async () => {
        const response = await axios.get(`/postdetail/${id}`);
        console.log(response);
        setData(response.data);
    };
    return (
        <div className="container">
            <div className="wrapper">
                <div className="text-component">
                    <h1 className='title'>{language === "En" ? data.titleEn : data.title}</h1>
                    <p className='subtitle'>{language === "En" ? data.descriptionEn : data.description}</p>
                    <Link className="custom__button" to="/">
                        <a href='#blog'>
                            {language === "En" ? "Home page" : "Početna stranica"}
                        </a>
                    </Link>
                </div>
                <div className="image">
                    {data.picture ? (
                        <img src={data.picture} />
                    ) : (
                        <img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    )}                </div>

            </div>
        </div>
    );
}

export default DetailPost
