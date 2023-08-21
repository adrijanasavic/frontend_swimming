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
                    {/* <div className="status-box">
                        <div>
                            <p className='num'>444</p>
                            <p>companies</p>
                        </div>
                        <div>
                            <p className='num'>444</p>
                            <p>companies</p>
                        </div>
                        <div>
                            <p className='num'>444</p>
                            <p>companies</p>
                        </div>
                    </div> */}
                    <Link className="custom__button" to="/">
                        {language === "En" ? "Home page" : "Početna stranica"}

                    </Link>
                </div>
                <div className="image">
                    {data.picture ? (
                        <img src={data.picture} />
                    ) : (
                        <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt2_1200x303.png?sfvrsn=3ddeaf3b_2" />
                    )}                </div>
                
            </div>
        </div>
    );
}

export default DetailPost
