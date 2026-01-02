// src/components/Hero/Hero.jsx
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import webDevLogo from '../../assets/web-dev.PNG';

function Hero({ scrollToSection }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedBio, setDisplayedBio] = useState('');
  
  const fullName = "HI, I'M LAIB HADIL"; // ← Remplace par ton nom
  const fullBio = "I'm a Junior React frontend Developer, I design and build user interfaces";

  // Animation d'introduction (photo au centre puis vers le coin)
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIntroComplete(true);
    }, 2500);

    return () => clearTimeout(introTimer);
  }, []);

  // Effet typewriter pour le nom
  useEffect(() => {
    if (!introComplete) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [introComplete, fullName]);

  // Effet typewriter pour la bio
useEffect(() => {
    if (displayedText !== fullName) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullBio.length) {
        setDisplayedBio(fullBio.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [displayedText, fullName, fullBio]);

  return (
    <div className={styles.hero}>
      {/* Background de code flou */}
      <div className={styles.codeBackground}>
        <pre className={styles.code}>
{`const developer = {
  name: "Your Name",
  skills: ["React", "JavaScript", "CSS"],
  passion: "Building amazing web apps",
  status: "Always learning 🚀"
};

function createAwesomeProjects() {
  return developer.skills.map(skill => {
    return useSkill(skill);
  });
}

export default developer;`}
        </pre>
      </div>

      {/* Particules de fumée */}
      {introComplete && (
        <>
          <div className={styles.smoke1}></div>
          <div className={styles.smoke2}></div>
          <div className={styles.smoke3}></div>
        </>
      )}

      {/* Photo avec animation */}
      <div className={`${styles.photoContainer} ${introComplete ? styles.photoMoved : ''}`}>
        <div className={styles.photoCircle}>
          <div className={styles.glowEffect}></div>
          <div className={styles.photo}>
             <img src={webDevLogo} alt="Web Developer Logo" className={styles.photoImg} />
           
          </div>
          {/* Pour ajouter ta vraie photo:
          <img src="/votre-photo.jpg" alt="Your Name" className={styles.photoImg} />
          */}
        </div>
      </div>

      {/* Contenu principal qui apparaît après l'animation */}
      {introComplete && (
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <div className={styles.nameContainer}>
              <h1 className={styles.name}>
                {displayedText}
                <span className={styles.cursor}>|</span>
              </h1>
            </div>

            <p className={styles.bio}>
              {displayedBio}
              {displayedBio.length < fullBio.length && <span className={styles.cursor}>|</span>}
            </p>

            {displayedBio.length === fullBio.length && (
              <div className={styles.buttons}>
                
                
                
              </div>
            )}

            {displayedBio.length === fullBio.length && (
              <div className={styles.socials}>
              
              
              </div>
            )}
          </div>
        </div>
      )}

      {/* Message d'attente initial */}
      {!introComplete && (
        <div className={styles.loadingText}>
          <span className={styles.loadingDot}>.</span>
          <span className={styles.loadingDot}>.</span>
          <span className={styles.loadingDot}>.</span>
        </div>
      )}
    </div>
  );
}

export default Hero;