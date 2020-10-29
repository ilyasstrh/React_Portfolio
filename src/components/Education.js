import React from 'react';
import '../App.css';

function Education() {
    return (
        <section id="education" className="container">
            <div className="container mt-5 mb-5">
                <h2>Education</h2>
                <ul className="timeline">
                    <li>
                        <a target="_blank" href="#">Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes -
                        ENSIAS</a>
                        <a href="#" className="float-right">2019 - 2021</a>
                        <p>
                            Master1, Internet Of Things: Software and Analytics
                    </p>
                    </li>
                    <li>
                        <a href="#">Faculty of Science Rabat</a>
                        <a href="#" className="float-right">2018 - 2019</a>
                        <p>
                            Bachelor's degree: Networks and Telecommunications
                    </p>
                    </li>
                    <li>
                        <a href="#">Brevet de Technicien Supérieur</a>
                        <a href="#" className="float-right">2016 - 2018</a>
                        <p>
                            BTS, Systèmes et Réseaux Informatiques
                    </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Education;