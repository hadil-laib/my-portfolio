// src/components/Navbar/Navbar.jsx
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
        {/* Logo */}
        
        <div className={styles.logo}>
          <span className={styles.logoIcon}><img src="web-dev.PNG" /></span>
          <span className={styles.logoText}><i>My Portfolio</i></span>
        </div>

        {/* Menu Desktop */}
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

        {/* Bouton Menu Mobile (Hamburger) */}
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

      {/* Menu Mobile */}
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