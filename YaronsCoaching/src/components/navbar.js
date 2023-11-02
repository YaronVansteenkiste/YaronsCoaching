import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <a href="/" className="logo">
        YV
      </a>
      <span className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </span>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li>
          <HashLink smooth to="/#home" onClick={handleMenuToggle}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about" onClick={handleMenuToggle}>
            Over mij
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#prices" onClick={handleMenuToggle}>
            Prijzen
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" onClick={handleMenuToggle}>
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
