import React from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../assets/navlogo.svg'
import '../css/Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={navLogo} alt='image of logo in bold font with three stars' />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/therapisthelp" activeClassName="active">
                Therapist Help
              </NavLink>
            </li>
            <li>
              <NavLink to="/chatroom" activeClassName="active">
                Chatroom
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active">
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
