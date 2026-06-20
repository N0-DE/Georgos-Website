import { Link } from 'react-router-dom';

import logoImg from '../assets/georgos-logo.png';

const Logo = () => {
  return (
    <Link to="/" className="logo-container" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.75rem',
      textDecoration: 'none'
    }}>
      <img src={logoImg} alt="Georgos Logo" style={{
        width: '44px',
        height: '44px',
        borderRadius: '8px',
        objectFit: 'contain',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
        <span style={{
          fontSize: '0.6rem',
          fontWeight: '500',
          color: 'var(--text-light)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginTop: '2px'
        }}>
          Since 1963
        </span>
      </div>
    </Link>
  );
};

export default Logo;
