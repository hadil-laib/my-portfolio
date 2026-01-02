import { useState } from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{project.title}</h3>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.techStack}>
        {project.techStack.map((tech, index) => (
          <span key={index} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {project.githubLink && (
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.icon}>🐙</span>
            GitHub
          </a>
        )}

        {project.liveDemo && (
          <a 
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.liveLink}`}
          >
            <span className={styles.icon}>🚀</span>
            Live Demo
          </a>
        )}
      </div>

      {isHovered && <div className={styles.hoverEffect}></div>}
    </div>
  );
}

export default ProjectCard;