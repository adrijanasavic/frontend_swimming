import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import React from "react";
import "./Contact.css";

function Contact() {

    const { language } = useSelector((state) => state.settings);

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [userName, setUserName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isFormValid, setFormValid] = useState(true);

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (!userName || !subject || !email || !message) {
            setFormValid(false);
            return;
        }
        setFormValid(true);
        setDone(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        setUserName("");
        setSubject("");
        setEmail("");
        setMessage("");

        emailjs
            .sendForm(
                "service_vh6njl3",
                "template_sd1wb95",
                formRef.current,
                "5m5YOy-_jQDKUWuuQ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    setTimeout(() => {
                        setDone(false);
                    }, 2000);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-container-wrapper">
                    <div className="contact-container-wrapper-left">
                        <h1 className="contact-container-wrapper-left-title">
                            {" "}
                            My Contact{" "}
                        </h1>{" "}
                        <div className="c-info">
                            <div className="contact-container-wrapper-left-title-item">
                                <a href="tel://+381641494033">
                                    {" "}
                                    <i
                                        className="uil uil-phone"
                                        aria-label="Home icon"
                                        data-aos="fade-right"
                                        data-aos-duration="700"
                                    />
                                    +381641494033
                                </a>
                            </div>
                            <div className="contact-container-wrapper-left-title-item">
                                <a href="mailto:zoranbozovicplivanje@gmail.com">
                                    <i
                                        className="uil uil-envelope"
                                        aria-label="Home icon"
                                        data-aos="fade-right"
                                        data-aos-duration="700"
                                    />
                                    zoranbozovicplivanje@gmail.com
                                </a>
                            </div>
                            <div className="contact-container-wrapper-left-title-item">
                                <i
                                    className="uil uil-estate"
                                    aria-label="Home icon"
                                    data-aos="fade-right"
                                    data-aos-duration="700"
                                />
                                {language === "En"
                                    ? "21000 Novi Sad - Serbia"
                                    : "21000 Novi Sad - Srbija"}
                            </div>
                        </div>
                    </div>
                    <div
                        className="contact-container-wrapper-right"
                        onSubmit={(event) => onSubmitForm(event)}
                    >
                        <p className="contact-container-wrapper-right-desc">
                            {language === "En"
                                ? "If you have additional questions"
                                : "Ako imate dodatnih pitanja"}
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                name="user_name"
                                onChange={(event) => setUserName(event.target.value)}
                                value={userName}
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                name="user_subject"
                                onChange={(event) => setSubject(event.target.value)}
                                value={subject}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                name="user_email"
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                            />
                            <textarea
                                rows="10"
                                placeholder="Message"
                                name="message"
                                onChange={(event) => setMessage(event.target.value)}
                                value={message}
                            />
                            <button className="btn"> Submit </button>
                            {
                                <p>
                                    {done && isFormValid ? (
                                        <p>
                                            {" "}
                                            {language === "En"
                                                ? "Message has been sent"
                                                : "Poruka je poslata"}
                                        </p>
                                    ) : null}
                                </p>
                            }
                            {!isFormValid ? (
                                <p>
                                    {" "}
                                    {language === "En"
                                        ? "All field are required"
                                        : "Sva polja su obavezna"}
                                </p>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
