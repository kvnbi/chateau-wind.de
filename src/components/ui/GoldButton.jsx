import { Link } from 'react-router-dom';

export default function GoldButton({ children, to, href, onClick, variant = 'primary', type = 'button', className = '' }) {
  const baseStyle = {
    padding: '12px 22px',
    minHeight: '44px',
    textTransform: 'uppercase',
    fontSize: '12px',
    letterSpacing: '0.1em',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.2s',
    fontFamily: 'var(--font-body)',
  };

  const primaryStyle = {
    ...baseStyle,
    background: '#c7a24a',
    border: '1px solid #c7a24a',
    color: '#ffffff',
  };

  const secondaryStyle = {
    ...baseStyle,
    background: 'transparent',
    border: '1px solid rgba(229,214,165,0.8)',
    color: '#e5d6a5',
  };

  const style = variant === 'secondary' ? secondaryStyle : primaryStyle;

  const handleHover = (e) => {
    if (variant === 'primary') {
      e.target.style.background = '#ad8934';
      e.target.style.borderColor = '#ad8934';
    } else {
      e.target.style.background = 'rgba(199,162,74,0.15)';
    }
  };

  const handleLeave = (e) => {
    if (variant === 'primary') {
      e.target.style.background = '#c7a24a';
      e.target.style.borderColor = '#c7a24a';
    } else {
      e.target.style.background = 'transparent';
    }
  };

  if (href) {
    return (
      <a href={href} style={style} className={className} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} style={style} className={className} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} style={style} className={className} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      {children}
    </button>
  );
}