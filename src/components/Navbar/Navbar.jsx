import { useState, useEffect, useCallback } from 'react';
import { navLinks, personalInfo } from '../../data/data';
import styles from './Navbar.module.css';

/**
 * Navbar — Fixed top navigation bar with smooth scroll links.
 * Features: scroll shadow, active link highlighting, mobile hamburger menu.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ---------- Theme toggle effect ---------- */
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      // Default to dark mode unless the user explicitly prefers light mode via OS
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  /* ---------- Scroll shadow effect ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------- Active section tracking ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href.replace('#', ''))
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(navLinks[i].href.replace('#', ''));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------- Close mobile menu on link click ---------- */
  const handleNavClick = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  /* ---------- Lock body scroll when mobile menu is open ---------- */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      id="navbar"
    >
      <nav className={styles.navContainer}>
        {/* Logo */}
        <a href="#home" className={styles.logo}>
          <span className={styles.logoCircle}>{personalInfo.firstName[0]}</span>
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop nav links */}
        <ul className={styles.navLinks}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`${styles.navLink} ${
                  activeSection === href.replace('#', '') ? styles.active : ''
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action buttons (Theme + Hamburger) */}
        <div className={styles.navActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Hamburger toggle (mobile) */}
          <button
            className={`${styles.hamburger} ${isMobileOpen ? styles.open : ''}`}
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            id="nav-toggle"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>

        {/* Mobile overlay */}
        <div
          className={`${styles.mobileOverlay} ${isMobileOpen ? styles.open : ''}`}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Mobile slide-in menu */}
        <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ''}`}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.mobileNavLink}
              onClick={handleNavClick}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
