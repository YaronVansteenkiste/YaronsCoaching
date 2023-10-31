import React from 'react'
import {HashLink} from 'react-router-hash-link'

function Navbar() {
  return (
    <nav>
          <a href="/" className="logo">YV</a>
          <ul>
            <li><HashLink smooth to="/#home">
                Home
            </HashLink></li>
            <li><HashLink smooth to="/#about">
                Over mij
            </HashLink></li>
            <li><HashLink smooth to="/#prices">
                Prijzen
            </HashLink></li>
            <li><HashLink smooth to="/#contact">
                Contact
            </HashLink></li>
          </ul>
        </nav>
  )
}

export default Navbar
