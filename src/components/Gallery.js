import React, { useState, useEffect } from 'react';
import '../Gallery.css';
import Healthcare from '../images/Portfolio/App_ui.png'

function Gallery() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const portfolio = [
        {
            title: "MIOLA PFE",
            stack: "Full Stack Spring/ReactJS",
            image: Healthcare,
            category: ['all', 'Java EE', 'Spring boot', 'Spring Security', 'ReactJS', 'PostgreSQL', 'Git'],
        },
        {
            title: 'Food delivery system',
            stack: "JAVA Desktop",
            image: Healthcare,
            category: ['all', 'Java', 'JavaFX', 'Maven', 'Git'],
        },
        {
            title: 'Healthcare Mobile App',
            stack: "Android",
            image: Healthcare,
            category: ['all', 'Android', 'Gradle', 'Firebase', 'Firestore', 'Git', 'UI/UX'],
        },
        {
            title: 'Online Store',
            stack: "MongoDB/Express/ReactJS/NodeJS",
            image: Healthcare,
            category: ['all', 'ReactJS', 'NodeJS', 'MongoDB', 'Express', 'Mongoose', 'UI/UX'],
        },
        {
            title: 'Car rental management',
            stack: "PHP/MySQL",
            image: Healthcare,
            category: ['all', 'PHP', 'Javascript', 'HTML', 'CSS', 'MySQL'],
        },
    ];

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <div>
            <div id="filter">
                <button className="btn btn-project web">
                    <a  active={filter === 'all'} onClick={() => setFilter('all')}>All</a>
                </button>
                <button className="btn btn-project web">
                    <a  active={filter === 'all'} onClick={() => setFilter('all')}>Web</a>
                </button>
                <button className="btn btn-project app">
                    <a active={filter === 'ReactJS'} onClick={() => setFilter('ReactJS')}>ReactJS</a>
                </button>
                <button className="btn btn-project dektop">
                    <a active={filter === 'UI/UX'} onClick={() => setFilter('UI/UX')}>UI/UX</a>
                </button>
                <button className="btn btn-project design">
                    <a active={filter === 'all'} onClick={() => setFilter('all')}>Web</a>
                </button>
            </div>
            <div class="image-grid">
                {projects.map(item => item.filtered === true ? (
                    <div key={item.name}>
                        {item.title}
                        <img className="grid-image" src={item.image} />
                    </div>
                ) : '')}
            </div>
        </div>
    );
}

export default Gallery;