import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
      <div>
        <Navbar />
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
