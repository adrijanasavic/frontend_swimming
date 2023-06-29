import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./Posts.css";
import { Link } from "react-router-dom";

function Posts() {

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
        
        <div className="container" id="blog">
            {data.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="card-image">
                            {item.picture ? (
                                <img src={item.picture} />
                            ) : (
                                <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt2_1200x303.png?sfvrsn=3ddeaf3b_2" />
                            )}
                        </div>
                        <div className="card-text">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="card-meal-type">{item.skill}</p>
                            <p className="card-body">{item.description}</p>
                        </div>
                        {user && (
                            <div className="botton">
                                <Link className="btn" to={`/post/${item._id}`}>Izmena</Link>
                                <Link className="btn" onClick={() => deletePost(item._id)}>Brisanje</Link>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>  
    )
}

export default Posts
