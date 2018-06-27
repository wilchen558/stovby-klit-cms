import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/stovbyklit-logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '60px' }} />
          </figure>
            <span className="logo-text is-size-5 has-text-weight-bold">Stovby Klit Grundejerforening</span>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          Vedtægter
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
