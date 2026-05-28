import './App.css';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function App() {
    return (
        <>
            <Navbar/>

            <Hero/>

            <section id="o-mne" className="panel panel2 bg-main">
                <AboutSection />
            </section>

            <section id="sluzby" className="panel panel3 bg-service">
                <ServicesSection index={0} />
            </section>

            <section className="panel panel4 bg-service">
                <ServicesSection index={1} />
            </section>

            <section className="panel panel5 bg-service">
                <ServicesSection index={2} />
            </section>

            <section id="projekty" className="panel panel6 bg-main">
                <ProjectsSection />
            </section>

            <section id="kontakt" className="panel panel7 bg-main">
                <ContactSection />
            </section>
        </>
    );
}

export default App;
