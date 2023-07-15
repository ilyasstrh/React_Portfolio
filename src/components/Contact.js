import React, { useState, useRef } from 'react';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {
    const [form, setForm] = useState({});
    const reCaptcha = useRef();
    const [token, setToken] = useState("");
    const notifySuccess = () => {
        toast.success('Message sent successfully, Thanks!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const notifyError = () => {
        toast.error('Ooops! There was an error', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    };
    const updateForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const submitForm = (ev) => {
        ev.preventDefault();
        if (!token) {
            toast.error('You must verify the captcha', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                notifySuccess();
                console.log("success");
                reCaptcha.current.reset();
                setToken("");

            } else {
                notifyError();
                console.log("error");
                reCaptcha.current.reset();
                setToken("");
            }
        };
        xhr.send(data);
        setForm({
            name: '',
            email: '',
            message: '',
        })
    }

    return (
        <section id="contact-me">
            <div className="contact">
                <div style={{ textAlign: "center" }} className="contact-details">
                    <h2 style={{ color: "#1e1e1e" }}>Contact me</h2>
                    <p style={{ color: "#1e1e1e" }}>If you have got a project in mind,  or an opportunity, feel free to contact me!</p>
                    <ul className="contact-infos" style={{ color: "#1e1e1e" }}>
                        <li className="contact-details">
                            <i className="fa fa-phone"></i>
                                  <span>  +212 (0) 6 54 17 35 53</span>
                        </li>
                        <li className="contact-details">
                            <i className="fa fa-envelope"></i>
                            <span>  contact@ilyasstrh.tech</span>
                                  
                        </li>
                        <li className="contact-details">
                            <i className="fa fa-map-marker"></i>
                            <span>  Rabat, Morocco</span>
                        </li>
                    </ul>
                </div>
                <div className="contact-form">
                    <form onSubmit={submitForm}
                        action={process.env.REACT_APP_FORM_ENDPOINT}
                        method="POST">
                        <div className="form-group">
                            <input type="text" name="name" onChange={updateForm} value={form.name} className="form-control" placeholder="Your name*" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" onChange={updateForm} value={form.email} className="form-control" placeholder="Your email*" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message*" name="message" onChange={updateForm} value={form.message} className="form-control" rows="4" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></textarea>
                        </div>
                        <button style={{ background: "linear-gradient(180deg, #1e3c72, #2a5298)", color: "white" }} type="submit" className="btn">Submit message</button>
                        { process.env.REACT_APP_RECAPTCHA_KEY && (
                        <ReCAPTCHA
                            ref={reCaptcha}
                            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                            onChange={token => setToken(token)} 
                            onExpired={e => setToken("")}
                        />)}
                    </form>
                </div>
            </div>
        </section>

    );
}

export default Contact;
