import { useState } from 'react';
import styles from './Navbar.module.css';


function Navbar({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleMenuClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
          <span className={styles.logoIcon}> <img src="/images/web-dev.PNG" alt="Web Developer Logo" /> </span>
          <span className={styles.logoText}><i>My Portfolio</i></span>
        </div>

       
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`${styles.menuLink} ${
                  activeSection === item.id ? styles.active : ''
                }`}
                onClick={() => handleMenuClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.mobileMenuLink} ${
                    activeSection === item.id ? styles.active : ''
                  }`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;