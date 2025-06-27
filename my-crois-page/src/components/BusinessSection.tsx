import React from 'react';
import { Link } from 'react-router-dom';


export default function BusinessSection() {
    return (
        <section className="business">
          <div className="business-container">
            <h2>Business</h2>
            <div className="business-grid">
              <Link to="/solutions" className="business-card">Solutions</Link>
              <Link to="/services" className="business-card">Services</Link>
              <Link to="/rnd" className="business-card">R&D</Link>
              <Link to="/community" className="business-card">Community</Link>
            </div>
          </div>
        </section>
      );
}