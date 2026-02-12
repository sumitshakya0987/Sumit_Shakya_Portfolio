import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-secondary selection:text-white">
            <Navbar />
            <Hero />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
