import { Link } from 'react-router-dom';

const versaillesLinks = [
  { label: 'CCS-90 · Gebogenes Sopransaxophon', href: '/modelle/ccs-90-curved-soprano' },
  { label: 'CSS-90 · Gerades Sopransaxophon', href: '/modelle/css-90-soprano' },
  { label: 'CAS-90 · Altsaxophon', href: '/modelle/cas-90-alto-sax' },
  { label: 'CTS-90 · Tenorsaxophon', href: '/modelle/cts-90-tenor-sax' },
  { label: 'CAS-96 · Altsaxophon', href: '/modelle/cas-96-alto-sax' },
  { label: 'CTS-96 · Tenorsaxophon', href: '/modelle/cts-96-tenor-sax' },
];

const chenonceauLinks = [
  { label: 'CCS-80 · Gebogenes Sopransaxophon', href: '/modelle/ccs-80-curved-soprano' },
  { label: 'CSS-80 · Gerades Sopransaxophon', href: '/modelle/css-80-soprano' },
  { label: 'CSS-83 · Gerades Sopransaxophon', href: '/modelle/css-83-soprano' },
  { label: 'CAS-80 · Altsaxophon', href: '/modelle/cas-80-alto-sax' },
  { label: 'CAS-81 · Altsaxophon', href: '/modelle/cas-81-alto-sax' },
  { label: 'CTS-80 · Tenorsaxophon', href: '/modelle/cts-80-tenor-sax' },
  { label: 'CBS-80 · Baritonsaxophon', href: '/modelle/cbs-80-baritone-sax' },
];

const infoLinks = [
  { label: 'Über uns', href: '/ueber-chateau' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'AGB', href: '/agb' },
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500, marginBottom: '16px', fontFamily: 'var(--font-body)' }}>
        {title}
      </h4>
      <div className="flex flex-col" style={{ gap: '7px' }}>
        {links.map(link => (
          <Link
            key={link.href}
            to={link.href}
            style={{ color: '#aaaaaa', fontSize: '13px', textDecoration: 'none' }}
            className="hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: '#050505', color: '#bdbdbd' }}>
      <style>{`
        .site-footer { padding: 44px 28px; }
        @media (max-width: 480px) { .site-footer { padding: 36px 18px; } }
        .footer-grid { display: grid; gap: 36px; grid-template-columns: 1.3fr 1fr 1fr 1fr; }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="footer-grid max-w-[1180px] mx-auto" style={{ paddingBottom: '12px' }}>
        <div>
          <Link to="/" className="inline-block">
            <img
              src="/images/211b99f90_Chateau-LOGO-01.png"
              alt="Château Logo"
              style={{ width: '88px', marginBottom: '16px' }}
            />
          </Link>
          <p style={{ fontSize: '13px', color: '#aaaaaa', lineHeight: 1.55 }}>
            Château Saxophone Deutschland. Informationen und Beratung zu den verfügbaren Modellen der Versailles und Chenonceau Serien.
          </p>
          <div className="flex" style={{ gap: '14px', marginTop: '16px' }}>
            <a
              href="https://www.youtube.com/channel/UCVQFOLdXZjeZi19P9KDRflQ"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#e5d6a5', fontSize: '13px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}
              className="hover:underline"
            >
              YouTube
            </a>
            <a
              href="https://www.tiktok.com/@chateausaxophone"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#e5d6a5', fontSize: '13px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}
              className="hover:underline"
            >
              TikTok
            </a>
          </div>
        </div>
        <FooterColumn title="Versailles" links={versaillesLinks} />
        <FooterColumn title="Chenonceau" links={chenonceauLinks} />
        <FooterColumn title="Info" links={infoLinks} />
      </div>
      <div className="max-w-[1180px] mx-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginTop: '8px' }}>
        <p style={{ fontSize: '12px', color: '#666666' }}>
          © 2026 Château. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}