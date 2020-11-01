import React from 'react';
import { Link } from 'react-scroll'
import '../App.css';

function Navbar() {
    return (
        <nav id="navbar" style={{ paddingRight: 11 + '%' }}>
            <ul id="menu">
                <li>
                    <Link activeClass="active" to="hero" spy={true} smooth={true} class="menu-link">Home</Link>
                </li>
                <li>
                    <Link to="hero" spy={true} smooth={true} class="menu-link">About me</Link>
                </li>
                <li>
                    <Link to="education" spy={true} smooth={true} class="menu-link">Education</Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} class="menu-link">Skills</Link>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} class="menu-link">Projects</Link>
                </li>
                <li>
                    <Link to="contact-me" spy={true} smooth={true} class="menu-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;