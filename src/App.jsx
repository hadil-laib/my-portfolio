import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import styles from './App.module.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

 
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  
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
     
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      
      <main className={styles.main}>
        
        <section id="home" className={styles.section}>
          <Hero scrollToSection={scrollToSection} />
        </section>
        
      
        <section id="projects" className={styles.section}>
          <Projects />
        </section>
        
       
        <section id="skills" className={styles.section}>
          <Skills />
        </section>
        
       
        <section id="contact" className={styles.section}>
          <Contact />
        </section>
      </main>
      
     
      <footer className={styles.footer}>
        <p>© 2025 -  Web Developer Portfolio | using ⚛️ React + ⚡ Vite</p>
      </footer>
    </div>
  );
}

export default App;