import { useState, useEffect } from 'react';
import { skillsData } from '../../data/skillsData';
import styles from './Skills.module.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.skills} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}><i>My skills</i></h2>
          <p className={styles.subtitle}>
            Technologies and tools that i used in my labs and projects
          </p>
        </div>

        <div className={styles.content}>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>💻</span>
              Languages
            </h3>
            <div className={styles.skillsGrid}>
              {skillsData.languages.map((skill, index) => (
                <div key={index} className={styles.skillCard}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>⚛️</span>
              Frameworks
            </h3>
            <div className={styles.skillsGrid}>
              {skillsData.frameworks.map((skill, index) => (
                <div key={index} className={styles.skillCard}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>🛠️</span>
              <i>Tools</i>
            </h3>
            <div className={styles.skillsGrid}>
              {skillsData.tools.map((skill, index) => (
                <div key={index} className={styles.skillCard}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          </div>
        </div>
      </div>
    
  );
}

export default Skills;