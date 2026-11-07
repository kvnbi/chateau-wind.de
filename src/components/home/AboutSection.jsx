import GoldButton from '../ui/GoldButton';

export default function AboutSection() {
  return (
    <section style={{ background: '#f5f1e8', borderBottom: '1px solid #ddd3bf' }}>
      <div className="max-w-[1180px] mx-auto" style={{ padding: 'clamp(48px,8vw,78px) 24px' }}>
        <style>{`
          .about-home-grid { display: grid; align-items: center; gap: 56px; grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) { .about-home-grid { grid-template-columns: 1fr; gap: 28px; } }
        `}</style>
        <div className="about-home-grid">
          <div>
            <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
              Über uns
            </div>
            <h2 className="font-heading" style={{ fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.08, fontWeight: 400, color: '#202020', marginBottom: '18px' }}>
              Château wurde 1999 in Taiwan gegründet.
            </h2>
            <p style={{ fontSize: '15px', color: '#686868', lineHeight: 1.65, marginBottom: '28px' }}>
              Tenon wurde 1979 in Taiwan von Jerry Chang gegründet, mit dem Ziel, Musikinstrumente zu schaffen, die sowohl gut spielbar als auch erschwinglich sind. Nach zehn Jahren begann Tenon mit dem Bau einer eigenen Instrumentenfabrik, um die Produktionskapazitäten weiter zu verbessern. 1999 wurde mit der Gründung der eigenen Marke Château ein entscheidender Meilenstein erreicht.
            </p>
            <GoldButton to="/ueber-chateau">Mehr über Château</GoldButton>
          </div>
          <div>
            <img
              src="/images/08d8ee90b_madebychateau.jpg"
              alt="Château Fertigungsprozess"
              style={{ width: '100%', maxHeight: '380px', objectFit: 'cover', border: '1px solid #ddd3bf', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}