import React from 'react';
import '../App.css';

function Skills() {
    const technologiesOne = ["Java", "Python", "Javascript", "PHP", "NodeJS", "ReactJS", "Networking"];
    const technologiesTwo = ["Spring Boot", "MongoDB", "MySQL", "Android", "UX/UI", "Bootstrap", "DevOps"];
    return (
        <section id="skills" className="container">
            <div className="container">
                <h2>Skills</h2>
                <div className="technologies">
                        <ul className="technologies-row">
                        {technologiesOne.map((techno, i) =>
                            <li key={i}>{techno}</li>
                            )}
                        </ul>
                    <ul className="technologies-row">
                        {technologiesTwo.map((techno, i) =>
                            <li key={i}>{techno}</li>
                            )}
                        </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;