/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll'
import logo from '../images/logo.png'

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <Link activeClass="active" to="hero" onClick={toggleNav} spy={true} smooth={true} class="menu-link">Home</Link>
                    <Link to="hero" spy={true} smooth={true} onClick={toggleNav} class="menu-link">About me</Link>
                    <Link to="experience" spy={true} smooth={true} onClick={toggleNav} class="menu-link">Experience</Link>
                    <Link to="education" spy={true} smooth={true} onClick={toggleNav} class="menu-link">Education</Link>
                    <Link to="skills" spy={true} smooth={true} onClick={toggleNav} class="menu-link">Skills</Link>
                    <Link to="projects" spy={true} smooth={true} onClick={toggleNav} class="menu-link">Projects</Link>
                    <Link to="certifications" spy={true} smooth={true} onClick={toggleNav} class="menu-link">Certifications</Link>
                    <Link to="blog" spy={true} smooth={true} onClick={toggleNav} class="menu-link">Blog</Link>
                    <Link to="contact-me" spy={true} smooth={true} onClick={toggleNav} class="menu-link">Contact</Link>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <i className='fa fa-bars'></i>
            </button>
        </header>
    );
}
