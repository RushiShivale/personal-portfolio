import { personalInfo } from '../../data/data';
import styles from './About.module.css';

/**
 * About — Bio section without photo.
 * Features description, highlight cards, and stats.
 */
const About = () => {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className={styles.aboutContainer}>
        {/* Section header */}
        <div className={styles.aboutHeader}>
          <h2 className={styles.aboutTitle}>
            About <span className={styles.aboutTitleAccent}>Me</span>
          </h2>
          <p className={styles.aboutDescription}>
            {personalInfo.aboutDescription}
          </p>
        </div>

        {/* Highlight cards */}
        <div className={styles.aboutGrid}>
          <article className={styles.highlightCard}>
            <span className={styles.highlightIcon}>🎨</span>
            <h3 className={styles.highlightTitle}>Frontend</h3>
            <p className={styles.highlightText}>
              Building responsive, accessible UIs with React, modern CSS, and
              pixel-perfect attention to detail.
            </p>
          </article>

          <article className={styles.highlightCard}>
            <span className={styles.highlightIcon}>⚙️</span>
            <h3 className={styles.highlightTitle}>Backend</h3>
            <p className={styles.highlightText}>
              Designing RESTful APIs, server logic, and database schemas with
              Node.js, Express, and MongoDB.
            </p>
          </article>

          <article className={styles.highlightCard}>
            <span className={styles.highlightIcon}>🚀</span>
            <h3 className={styles.highlightTitle}>Deployment</h3>
            <p className={styles.highlightText}>
              Shipping production-ready apps with Git workflows, CI/CD pipelines,
              and cloud hosting platforms.
            </p>
          </article>
        </div>

        {/* Stats row */}
        <div className={styles.aboutStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
