import { useState, useEffect } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');  

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      /* Formspree */
      const response = await fetch('https://formspree.io/f/mojaovvj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
       
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className={`${styles.contact} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className={styles.content}>
          {/* Informations  */}
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📧</span>
              <div>
                <h4>Email</h4>
                <a 
                  href="mailto:doudoulaib5@gmail.com" 
                  className={styles.infoLink}
                >
                  doudoulaib5@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🐙</span>
              <div>
                <h4>GitHub</h4>
                <a 
                  href="https://github.com/hadil-laib" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  github.com/hadil-laib
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <h4>Location</h4>
                <p className={styles.infoText}>Constantine, Algeria</p>
              </div>
            </div>

            <div className={styles.quickNote}>
              <p>💡 I typically respond within 24-48 hours</p>
            </div>
          </div>

          {/*  contact me */}
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Your Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="your name"
                  disabled={status === 'sending'}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Your Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="youremail@example.com"
                  disabled={status === 'sending'}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Your Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={styles.textarea}
                  placeholder="Tell me about your project or just say hi..."
                  disabled={status === 'sending'}
                ></textarea>
              </div>

              {/* Messages  */}
              {status === 'success' && (
                <div className={styles.successMessage}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className={styles.errorMessage}>
                  ❌ Oops! Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className={styles.spinner}></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className={styles.buttonIcon}>📤</span>
                  </>
                )}
              </button>
            </form>

            <p className={styles.formNote}>
              🔒 Your information is safe and will never be shared
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;