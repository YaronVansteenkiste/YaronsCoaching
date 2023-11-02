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
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            Over mij
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#prices">
            Prijzen
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
