import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailPost.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from '../Spinner/Spinner';

function DetailPost() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const { language } = useSelector((state) => state.settings);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPostById();
    }, []);

    const getPostById = async () => {
        const response = await axios.get(`/postdetail/${id}`);
        setData(response.data);
        setLoading(false)
    };
    return (
        <div className="container">
            {loading ? (
                <Spinner />
            ) : (
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
                        <img src={data.picture} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailPost
