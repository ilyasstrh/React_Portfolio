import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header.js';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop';
import Particles from 'react-particles-js';
import { ToastContainer, toast } from 'react-toastify';
import Certifications from './components/Certifications';



function App() {
    return (
      <div>
        <ScrollToTop />
        <Header />
        <Particles
          style={{
            position: 'absolute',
            opacity: "0.3",
          }}
          params={{
            particles: {
              number: {
                value: 45,
                density: {
                  enable: true,
                  value_area: 850,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 1,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: true,
                  speed: 4,
                  size_min: 0.1,
                  sync: true,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.3,
                  sync: true,
                },
              },
            },
          }}
        />

        <Hero />
        <Experience/>
        <Education />
        <Skills />
        <Projects />
        <Certifications/>
        <ToastContainer />
        <Contact />
        <Footer />
      </div>
    );
  }

export default App;
