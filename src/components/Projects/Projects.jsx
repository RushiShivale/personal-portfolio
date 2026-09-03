import { projects } from '../../data/data';
import styles from './Projects.module.css';

/**
 * Projects — Grid of project cards without images.
 * Each card: category badge, title, description, tech stack tags, view link.
 */
const Projects = () => {
  return (
    <section className={`${styles.projects} section`} id="projects">
      <div className={styles.projectsContainer}>
        {/* Section header */}
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsTitle}>
            My <span className={styles.projectsTitleAccent}>Projects</span>
          </h2>
          <p className={styles.projectsSubtitle}>
            A selection of recent work that showcases my full stack capabilities.
          </p>
        </div>

        {/* Projects grid */}
        <div className={styles.projectsGrid}>
          {projects.map(({ id, title, category, description, techStack, liveUrl }) => (
            <article key={id} className={styles.projectCard}>
              {/* Accent top border */}
              <div className={styles.cardAccent} />

              {/* Card body */}
              <div className={styles.cardBody}>
                <span className={styles.projectCategory}>{category}</span>
                <h3 className={styles.projectName}>{title}</h3>
                <p className={styles.projectDescription}>{description}</p>

                {/* Tech stack tags */}
                <div className={styles.projectTags}>
                  {techStack.map((tech) => (
                    <span key={tech} className={styles.projectTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View link */}
                <a
                  href={liveUrl}
                  target={liveUrl !== '#' ? '_blank' : undefined}
                  rel={liveUrl !== '#' ? 'noopener noreferrer' : undefined}
                  className={styles.projectLink}
                >
                  {liveUrl === '#' ? 'Coming Soon' : 'View Project'}
                  <span className={styles.projectLinkArrow}>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
