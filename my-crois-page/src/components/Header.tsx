import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/crois_logo.png';
import './style.css';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="CROIS 로고" className="logo-image" />
          </Link>
        </div>
        <button className="menu-button" onClick={toggleSidebar} aria-label="메뉴 열기">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </header>

      {/* sidebar menu */}
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar} aria-label="메뉴 닫기">&times;</button>
        <Link to="/company" onClick={closeSidebar}>Company</Link>
        <Link to="/solutions" onClick={closeSidebar}>Solutions</Link>
        <Link to="/services" onClick={closeSidebar}>Services</Link>
        <Link to="/rnd" onClick={closeSidebar}>R&D</Link>
        <Link to="/community" onClick={closeSidebar}>Community</Link>
      </nav>
    </>
  );
  }