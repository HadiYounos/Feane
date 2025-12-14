import React, { useEffect } from 'react';
import { NavLink  } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('scroll-down');
      if (window.scrollY > 200) {
        nav.classList.add('move-down');
      } else {
        nav.classList.remove('move-down');
      }
    };
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg" id='scroll-down'>
      <div className="container">
        <span className="navbar-brand text-white">Feane</span>
        <button 
          className="navbar-toggler bg-white" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link text-white ${isActive ? 'active' : ''}`
                } 
                to="/" 
                end
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link text-white ${isActive ? 'active' : ''}`
                } 
                to="menu"
              >
                MENU
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link text-white ${isActive ? 'active' : ''}`
                } 
                to="about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link text-white ${isActive ? 'active' : ''}`
                } 
                to="book"
              >
                BOOK TABLE
              </NavLink>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className="nav-item">
              <a href="#no" className="nav-link text-white" aria-label="User profile">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href='#no'  className="nav-link text-white" aria-label="Shopping cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#no" className="nav-link text-white" aria-label="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li className="nav-item">
              <button className='order'>Order Online</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}