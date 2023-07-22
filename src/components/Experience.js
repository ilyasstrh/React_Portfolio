import React from 'react';
import '../App.css';

function Experience() {
    return (
        <section id="experience" className="container">
            <div className="container mt-5 mb-5">
                <h2>Experience</h2>
                <ul className="timeline">
                    <li>
                        <a target="_blank" href="#">Adria Business & Technology</a>
                        <a href="#" className="float-right">Oct 2021 - Present</a>
                        <p>
                            DevOps Engineer
                    </p>
                    </li>
                    <li>
                        <a href="#">Oracle</a>
                        <a href="#" className="float-right">Feb 2021 - Aug 2021</a>
                        <p>
                            Research assistant, DevOps Engineer
                    </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;