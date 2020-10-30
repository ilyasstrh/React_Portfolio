import React from 'react';
import '../App.css';
import { Link } from 'react-scroll'
import Particles from 'react-particles-js';

function Hero() {
    return (
        <section id="hero" className="container">
            <div className="row">
                <div id="card" className="card text-center">
                    <div className="card-header">
                        <div className="profile-img"></div>
                        <div className="header-description">
                            <h1 className="header-title">Ilyass TARHRI</h1>
                            <p>IoT Software and Analytics Student</p>
                            <p>Full Stack Web Developer</p>
                            <div className="social-icons">
                                <span>
                                    <a href="https://twitter.com/ilyass_trh" target="_"><i className="fa fa-twitter"></i></a>
                                </span>
                                <span>
                                    <a href="https://github.com/ilyasstrh" target="_"><i className="fa fa-github"></i></a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/ilyasstrh/" target="_"><i
                                        className="fa fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">About me</h2>
                        <p className="card-text">
                            Je suis Ilyass, developpeur web et ux ui designer Je suis Ilyass, developpeur web et ux ui designer Je suis Ilyass, developpeur web et ux ui designer Je suis Ilyass, developpeur web et ux ui designer
                    </p>
                        <a href="#" id="download" className="btn  hero-btn">Download CV</a>
                        <Link to="projects" spy={true} smooth={true} className="btn hero-btn">My Projects</Link>
                    </div>
                </div>
            </div>
            <Link to="education" spy={true} smooth={true}>
                <div onclick="smoothScroll()" type="button" id="scroll-down" className="scroll-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </section>
    );
}

export default Hero;