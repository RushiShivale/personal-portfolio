import { skills } from '../../data/data';
import styles from './Skills.module.css';

/**
 * Skills — Grouped grid of skill tags organized by category.
 * Categories: Frontend, Backend, Tools.
 */
const Skills = () => {
  /* Group skills by category */
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryLabels = {
    Frontend: { emoji: '🎨', description: 'Client-side technologies' },
    Backend: { emoji: '⚙️', description: 'Server-side technologies' },
    Tools: { emoji: '🛠️', description: 'Development workflow' },
  };

  return (
    <section className={`${styles.skills} section`} id="skills">
      <div className={styles.skillsContainer}>
        {/* Section header */}
        <div className={styles.skillsHeader}>
          <h2 className={styles.skillsTitle}>
            My <span className={styles.skillsTitleAccent}>Skills</span>
          </h2>
          <p className={styles.skillsSubtitle}>
            Technologies and tools I use to build full stack web applications.
          </p>
        </div>

        {/* Skill categories */}
        <div className={styles.categoriesGrid}>
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div key={category} className={styles.categoryBlock}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryEmoji}>
                  {categoryLabels[category]?.emoji}
                </span>
                <div>
                  <h3 className={styles.categoryName}>{category}</h3>
                  <p className={styles.categoryDesc}>
                    {categoryLabels[category]?.description}
                  </p>
                </div>
              </div>

              <div className={styles.skillsList}>
                {categorySkills.map(({ name, icon }) => (
                  <span key={name} className={styles.skillTag}>
                    <span className={styles.skillIcon}>{icon}</span>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
