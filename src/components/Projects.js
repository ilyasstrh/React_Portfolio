import React from 'react';
import '../App.css';
import Gallery from './Gallery.js';



function Projects() {
    return (
        <section id="projects" className="container">
            <div className="container">
                <h2>Projects</h2>
                <Gallery/>
            </div>
        </section>
    );
}

export default Projects;