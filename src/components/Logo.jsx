import { Link } from 'react-router-dom';

import newLogoImg from '../assets/new-logo.png';

const Logo = () => {
  return (
    <Link to="/" className="logo-container" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.75rem',
      textDecoration: 'none'
    }}>
      <img src={newLogoImg} alt="Georgos Logo" style={{
        height: '50px',
        width: 'auto',
        objectFit: 'contain',
        transition: 'transform 0.3s ease',
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          fontFamily: '"Conthrax", "Conthrax Sb", sans-serif',
          color: 'var(--deep-charcoal)',
          letterSpacing: '-0.5px',
          lineHeight: '1.2'
        }}>
          Georgos
        </span>
      </div>
    </Link>
  );
};

export default Logo;
