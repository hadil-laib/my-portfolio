import { useState, useEffect } from 'react';
import styles from './Hero.module.css';


function Hero({ scrollToSection }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedBio, setDisplayedBio] = useState('');
  
  const fullName = "HI, I'M LAIB HADIL"; 
  const fullBio = "I'm a Junior React frontend Developer, I design and build user interfaces";

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setIntroComplete(true);
    }, 2500);

    return () => clearTimeout(introTimer);
  }, []);

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
      <div className={styles.codeBackground}>
        <pre className={styles.code}>
{`const developer = {
  name: "Laib Hadil",
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

     
      {introComplete && (
        <>
          <div className={styles.smoke1}></div>
          <div className={styles.smoke2}></div>
          <div className={styles.smoke3}></div>
        </>
      )}

      
      <div className={`${styles.photoContainer} ${introComplete ? styles.photoMoved : ''}`}>
        <div className={styles.photoCircle}>
          <div className={styles.glowEffect}></div>
          <div className={styles.photo}>
           <img src="/images/web-dev.PNG" alt="Web Developer Logo" className={styles.photoImg} />
          </div>         
        </div>
      </div>

      
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