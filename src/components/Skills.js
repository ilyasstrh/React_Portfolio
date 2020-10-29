import React from 'react';
import '../App.css';

function Skills() {
    return (
        <section id="skills" className="container">
            <div className="container">
                <h2>Skills</h2>
                <div className="technologies">
                    <ul className="technologies-row">
                        <li>Java</li>
                        <li>MySQL</li>
                        <li>Spring Framework</li>
                        <li>JUnit</li>
                        <li>Android development</li>
                        <li>Networking</li>
                        <li>Git</li>
                    </ul>
                    <ul className="technologies-row">
                        <li>HTML/CSS</li>
                        <li>ReactJS</li>
                        <li>Python</li>
                        <li>Bootstrap</li>
                        <li>Jenkins</li>
                        <li>PHP</li>
                        <li>AJAX</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;