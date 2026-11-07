import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Über uns', href: '/ueber-chateau' },
  { label: 'Produkte', href: '/modelle' },
  { label: 'Versailles', href: '/versailles' },
  { label: 'Chenonceau', href: '/chenonceau' },
  { label: 'Ausstattung', href: '/ausstattung' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header z-50" style={{ position: 'relative', background: '#252525', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="max-w-[1180px] mx-auto flex items-center justify-between header-bar">
        <style>{`
          .site-header { top: auto; }
          .header-bar { padding: 14px 28px; gap: 32px; }
          .header-logo { height: 62px; }
          @media (max-width: 1023px) { .header-bar { padding: 12px 18px; gap: 16px; } .header-logo { height: 52px; } }
        `}</style>
        <Link to="/" className="flex items-center no-underline">
          <img
            src="/images/211b99f90_Chateau-LOGO-01.png"
            alt="Château Logo"
            width="300"
            height="100"
            className="header-logo"
            style={{ width: 'auto', display: 'block' }}
          />
        </Link>

        <nav className="hidden lg:flex items-center" style={{ gap: '32px' }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className="transition-colors duration-200"
              style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#eeeeee', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = '#e5d6a5'}
              onMouseLeave={e => e.target.style.color = '#eeeeee'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          style={{ color: '#eeeeee', background: 'none', border: 'none', width: '44px', height: '44px', marginRight: '-10px', cursor: 'pointer', flexShrink: 0 }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 50,
            background: '#252525', borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 12px 28px rgba(0,0,0,0.35)',
            padding: '8px 18px 14px',
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block"
              style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#eeeeee', textDecoration: 'none', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}