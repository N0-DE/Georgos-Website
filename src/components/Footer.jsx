import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

import logoImg from '../assets/georgos-logo1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <img src={logoImg} alt="Georgos Logo" style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                objectFit: 'contain'
              }} />
              <span style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: '"Conthrax", "Conthrax Sb", sans-serif', color: 'var(--white)' }}>
                Georgos
              </span>
            </div>
            <p>
              More than a supermarket. A family legacy that began in 1963, 
              grew alongside the town of Pala, and continues to serve generations 
              through trust, quality, and community commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">Our Story</Link>
              <Link to="/products" className="footer-link">Products</Link>
              <Link to="/testimonials" className="footer-link">Testimonials</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>

          {/* Store Locations */}
          <div>
            <h4 className="footer-title">Our Stores</h4>
            <div className="footer-links">
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.8)' }}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>Georgos Super Shop<br/>Pala, Kerala</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>Georgos Super Market<br/>Pala, Kerala</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="footer-links">
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.8)' }}>
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.8)' }}>
                <Mail size={18} />
                <span>contact@georgos.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Georgos. Serving Pala Since 1963. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
