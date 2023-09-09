import React, { useEffect, useState } from 'react';
import './Swiper.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";


function SwiperPost() {

    const [data, setData] = useState([]);
    const [user, setUser] = useState(false);

    const client = axios.create({
        baseURL: "http://localhost:4000/posts"
    });

    const showBtn = () => {
        if (localStorage.hasOwnProperty("user")) {
            setUser(true);
        }
    };

    const deletePost = async (id) => {
        axios.delete(`/post/${id}`).then((res) => {
            setData(res.data);
        });
    };

    useEffect(() => {
        client.get().then((response) => {
            setData(response.data);
            console.log(data)
            showBtn();
        });
    }, []);
    
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                id='blog'
            >{data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='post'>
                            {item.picture ? (
                                <img src={item.picture} />
                            ) : (
                                <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt2_1200x303.png?sfvrsn=3ddeaf3b_2" />
                            )}                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className='swiper-btn'>
                                <Link className='custom__button' to={`/post/${item._id}`}>sdklasd</Link>
                                <Link className='custom__button' onClick={() => deletePost(item._id)}>sdklasd</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
            </Swiper>
        </>
    )
}

export default SwiperPost
