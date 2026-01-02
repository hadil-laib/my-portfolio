// src/components/Projects/Projects.jsx
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectsData';
import styles from './Projects.module.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.projects} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}><i>My Projects</i></h2>
          <p className={styles.subtitle}>
            These are the projects I've created during my Master's program.
             Each one represents a step forward in my development journey and taught me something new and helped me grow as a developer.
          </p>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;