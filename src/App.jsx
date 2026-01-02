// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import styles from './App.module.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Fonction pour faire défiler vers une section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Détecte quelle section est visible pendant le scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.app}>
      {/* Barre de navigation */}
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      {/* Contenu principal */}
      <main className={styles.main}>
        {/* Section Accueil */}
        <section id="home" className={styles.section}>
          <Hero scrollToSection={scrollToSection} />
        </section>
        
        {/* Section Projets */}
        <section id="projects" className={styles.section}>
          <Projects />
        </section>
        
        {/* Section Compétences */}
        <section id="skills" className={styles.section}>
          <Skills />
        </section>
        
        {/* Section Contact */}
        <section id="contact" className={styles.section}>
          <Contact />
        </section>
      </main>
      
      {/* Pied de page */}
      <footer className={styles.footer}>
        <p>© 2025 - Portfolio Web Developer | Fait avec ⚛️ React + ⚡ Vite</p>
      </footer>
    </div>
  );
}

export default App;