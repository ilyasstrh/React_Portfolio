import React from 'react';
import '../App.css';
import Image from '../images/website.png'; // with import



function Projects() {
    return (
        <section id="projects" className="container">
            <div className="container">
                <h2>Projects</h2>
                <div id="filter">
                    <button className="btn btn-project web">Web</button>
                    <button className="btn btn-project app">App</button>
                    <button className="btn btn-project dektop">Desktop</button>
                    <button className="btn btn-project design">Design</button>
                </div>
                <div id="my-projects">
                    <div className="card text-center card-project type-design" style={{width: 18 + "rem"}}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body project-body">
                            <p className="card-text">Healthcare Mobile App</p>
                            <ul className="tags">
                                <li>Android</li>
                                <li>Gradle</li>
                                <li>Firestore</li>
                                <li>Git</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <a><i className="fas fa-external-link-alt" /></a>
                    </div>
                    <div className="card text-center card-project type-web" style={{width: 18 + "rem"}}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body project-body">
                            <p className="card-text">Food Delivery System</p>
                            <ul className="tags">
                                <li>Java SE</li>
                                <li>JavaFX</li>
                                <li>Maven</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card text-center card-project type-mobile" style={{width: 18 + "rem"}}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body project-body">
                            <p className="card-text text-center">MIOLA PFE</p>
                            <ul className="tags">
                                <li>Java EE</li>
                                <li>Spring boot</li>
                                <li>Spring Security</li>
                                <li>React JS</li>
                                <li>PostgreSQL</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card text-center card-project type-mobile" style={{width: 18 + "rem"}}>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body project-body">
                            <p className="card-text text-center">Car rental management</p>
                            <ul className="tags">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>JQuery</li>
                                <li>MySQL</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;