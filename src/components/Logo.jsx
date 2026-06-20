import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="logo-container" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.75rem',
      textDecoration: 'none'
    }}>
      <div style={{
        width: '44px',
        height: '44px',
        background: 'linear-gradient(135deg, var(--primary-red), #d4050f)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '800',
        fontSize: '1.4rem',
        boxShadow: '0 4px 12px rgba(227, 6, 19, 0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        letterSpacing: '-0.5px',
      }}>
        G
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: '800',
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
