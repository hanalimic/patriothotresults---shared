import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="https://www.patriotaquatics.org/" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/assets/images/patriot-logo.png'} className="logo" alt="patriot logo" />
        </a>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link to="/tournaments" className="nav__link">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}