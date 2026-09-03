import { useState, useRef } from 'react';
import { socialLinks, emailjsConfig } from '../../data/data';
import styles from './Contact.module.css';

/* ---------- SVG icon components for social links ---------- */
const icons = {
  github: (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
    </svg>
  ),
  linkedin: (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  instagram: (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
};

/**
 * Contact — Contact form with EmailJS integration and social links.
 * Displays info text, social icons, and a form with success/error feedback.
 */
const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handle form submission via EmailJS.
   * Loads EmailJS dynamically to keep the initial bundle small.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Use EmailJS loaded from CDN (see index.html)
      if (typeof window.emailjs === 'undefined') {
        throw new Error('EmailJS not loaded');
      }

      await window.emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );

      setStatus({ type: 'success', message: 'Message sent successfully! ✅' });
      formRef.current.reset();

      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again. ❌' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className={styles.contactContainer}>
        {/* Left: Contact info */}
        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>
            Get In <span className={styles.contactTitleAccent}>Touch</span>
          </h2>

          <p className={styles.contactDescription}>
            I&apos;d love to hear from you! Whether you have a project idea, a question,
            or just want to say hello — feel free to reach out. I&apos;ll get back to you
            as soon as possible.
          </p>

          {/* Social links */}
          <div className={styles.contactSocials}>
            {socialLinks.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={name}
                id={`contact-social-${icon}`}
              >
                {icons[icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact form */}
        <form
          ref={formRef}
          className={styles.contactForm}
          onSubmit={handleSubmit}
          id="contact-form"
        >
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="contact-name" className={styles.formLabel}>
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="user_name"
                className={styles.formInput}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-email" className={styles.formLabel}>
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="user_email"
                className={styles.formInput}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-message" className={styles.formLabel}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="user_message"
              className={`${styles.formInput} ${styles.formTextarea}`}
              placeholder="Your message..."
              required
            />
          </div>

          {/* Status message */}
          {status.message && (
            <p
              className={`${styles.formMessage} ${
                status.type === 'success'
                  ? styles.formMessageSuccess
                  : styles.formMessageError
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            className={styles.formSubmit}
            disabled={isSubmitting}
            id="contact-submit"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
