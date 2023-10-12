import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const paragrafStyles = {
  WebkitLineClamp: 6,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

function Posts() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useSelector((state) => state.settings);

  const client = axios.create({
    baseURL: "https://backend-swimming-git-main-adrijanasavic.vercel.app/posts",
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
      setData(response.data.reverse());
      console.log(data);
      showBtn();
    });
  }, []);

  return (
    <div id="blog" className="blog">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="horizontal posts">
              <section className="front">
                <h2>{language === "En" ? item.titleEn : item.title}</h2>
              </section>

              <section className="back">
                <h2 style={isOpen ? null : paragrafStyles}>
                  {language === "En" ? item.descriptionEn : item.description}
                </h2>
                <div className="btn_detail">
                  <Link
                    className="custom__button"
                    to={`/postdetail/${item._id}`}
                  >
                    {language === "En" ? "Details" : "Opširnije"}
                  </Link>
                </div>
                <div>
                  <h3 className="post">{item.date}</h3>
                </div>
              </section>
              {user && (
                <div className="post__btn">
                  <Link className="custom__button " to={`/post/${item._id}`}>
                    Izmena
                  </Link>
                  <Link
                    className="custom__button "
                    onClick={() => deletePost(item._id)}
                  >
                    Brisanje
                  </Link>
                </div>
              )}
            </div>
            {/* 
                      <div class="vertical posts">
                          <section class="front">
                              <h2>Front Side</h2>
                          </section>

                          <section class="back">
                              <h2>Back Side</h2>
                          </section>
                      </div> */}
          </div>
        );
      })}
    </div>

    // <div classNameName="container" id="blog">
    //     {data.map((item, index) => {
    //         return (
    //             <div classNameName="card" key={index}>
    //                 <div classNameName="imgbox">
    //                     {item.picture ? (
    //                         <img src={item.picture} />
    //                     ) : (
    //                         <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt2_1200x303.png?sfvrsn=3ddeaf3b_2" />
    //                     )}
    //                 </div>
    //                 <div classNameName="contect">
    //                     <h2 classNameName="">{item.title}</h2>
    //                     <p classNameName="">{item.skill}</p>
    //                     <p style={isOpen ? null : paragrafStyles}
    //                         classNameName="card-body">{item.description}</p>
    //                     <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Read less" : "Read more"}</button>
    //                 </div>
    //                 {user && (
    //                     <div classNameName="botton">
    //                         <Link classNameName="btn" to={`/post/${item._id}`}>Izmena</Link>
    //                         <Link classNameName="btn" onClick={() => deletePost(item._id)}>Brisanje</Link>
    //                     </div>
    //                 )}
    //             </div>
    //         );
    //     })}
    // </div>
  );
}

export default Posts;
