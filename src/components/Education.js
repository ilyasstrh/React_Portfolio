import React from 'react';
import '../App.css';

function Education() {
    return (
        <section id="education" className="container">
            <div className="container mt-5 mb-5">
                <h2>Education</h2>
                <ul className="timeline">
                    <li>
                        <a target="_blank" href="#">High National School for Computer Science and Systems Analysis -
                        ENSIAS</a>
                        <a href="#" className="float-right">2019 - 2021</a>
                        <p>
                            Master 2, Internet Of Things: Software and Analytics
                    </p>
                    </li>
                    <li>
                        <a href="#">Faculty of Sciences Rabat - FSR</a>
                        <a href="#" className="float-right">2018 - 2019</a>
                        <p>
                            Bachelor's degree: Networks and Telecommunications
                    </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Education;