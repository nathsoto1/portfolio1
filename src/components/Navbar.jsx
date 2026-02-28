import { useState } from 'react';
import './Navbar.css';

const navItems = ['home', 'about', 'projects', 'resume', 'awards', 'contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <header>
      <nav>
        <a href="#" className="logo" onClick={(e) => handleNavClick(e, '#home')}>NS</a>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={(e) => handleNavClick(e, `#${item}`)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
