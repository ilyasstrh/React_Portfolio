import React from 'react';
import '../App.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";


function Skills() {
    const technologiesOne = ["Java", "Python", "Javascript", "PHP", "NodeJS", "ReactJS", "Networking"];
    const technologiesTwo = ["Spring Boot", "MongoDB", "MySQL", "Android", "UX/UI", "Bootstrap", "DevOps"];
    return (
        <section id="skills" className="container">
            <div className="container">
                <h2>Skills</h2>
                <div className="technologies">
                    <AnimatedOnScroll animationIn="fadeInLeftBig" animationInDuration={1200}>
                        <ul className="technologies-row">
                        {technologiesOne.map((techno, i) =>
                            <li key={i}>{techno}</li>
                            )}
                        </ul>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRightBig" animationInDuration={1200}>
                    <ul className="technologies-row">
                        {technologiesTwo.map((techno, i) =>
                            <li key={i}>{techno}</li>
                            )}
                        </ul>
                    </AnimatedOnScroll>
                </div>
            </div>
        </section>
    );
}

export default Skills;