import { personalInfo } from '../../data/data';
import styles from './Hero.module.css';

/**
 * Hero — Full-viewport landing section.
 * Text-centered layout with name, role, intro, and CTA buttons.
 * No images — clean typographic hero.
 */
const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        {/* Decorative background elements */}
        <div className={styles.heroBgAccent} aria-hidden="true" />
        <div className={styles.heroBgOrb} aria-hidden="true" />

        {/* Content */}
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>
            <span className={styles.heroDot} />
            Available for work
          </span>

          <h1 className={styles.heroName}>
            Hi, I&apos;m{' '}
            <span className={styles.heroNameAccent}>
              {personalInfo.firstName}
            </span>
          </h1>

          <p className={styles.heroRole}>{personalInfo.role}</p>

          <p className={styles.heroDescription}>
            {personalInfo.heroDescription}
          </p>

          {/* Tech stack pills */}
          <div className={styles.heroTechRow}>
            {['React', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
              <span key={tech} className={styles.heroTechPill}>{tech}</span>
            ))}
          </div>

          <div className={styles.heroButtons}>
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline">
              Contact Me
            </a>
          </div>
        </div>

      </div>
      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
