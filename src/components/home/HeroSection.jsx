import GoldButton from '../ui/GoldButton';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: '#050505' }}>
      <style>{`
        .hero-wrap {
          position: relative;
          width: 100%;
          min-height: 82vh;
          display: flex;
          flex-direction: column;
        }
        .hero-img-wrap {
          position: absolute;
          inset: 0;
          padding: 16px;
          box-sizing: border-box;
        }
        .hero-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          border-radius: 20px;
          display: block;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          margin: 16px;
          border-radius: 20px;
          background: linear-gradient(
            100deg,
            rgba(0,0,0,0.82) 0%,
            rgba(0,0,0,0.58) 45%,
            rgba(0,0,0,0.10) 100%
          );
        }
        .hero-content {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          padding: clamp(80px, 11vw, 140px) clamp(36px, 5vw, 56px);
        }
        @media (max-width: 640px) {
          .hero-wrap { min-height: 0; max-height: none; height: auto; }
          .hero-img-wrap { padding: 10px; }
          .hero-img-wrap img { border-radius: 14px; object-position: 65% center; }
          .hero-overlay {
            margin: 10px;
            border-radius: 14px;
            background: linear-gradient(
              175deg,
              rgba(0,0,0,0.85) 0%,
              rgba(0,0,0,0.68) 55%,
              rgba(0,0,0,0.28) 100%
            );
          }
          .hero-content {
            align-items: flex-start;
            padding: 52px 24px 44px;
          }
        }
      `}</style>

      <div className="hero-wrap">
        <div className="hero-img-wrap">
          <img
            src="/images/0f34ac649_chateauherobackground_upscaled.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="max-w-[1180px] w-full mx-auto">
            <div style={{ maxWidth: '580px' }}>
              <h1 className="font-heading" style={{
                color: '#ffffff',
                fontSize: 'clamp(34px, 5.5vw, 78px)',
                lineHeight: 1.04,
                fontWeight: 400,
                letterSpacing: '-0.025em',
                margin: 0,
              }}>
                Die Flaggschiff-Saxophone von Château.
              </h1>
              <p style={{
                maxWidth: '460px',
                marginTop: '22px',
                color: '#e0e0e0',
                fontSize: 'clamp(14px, 1.8vw, 17px)',
                lineHeight: 1.6,
              }}>
                Handgefertigte Profisaxophone für Spieler, Musikschulen, Ensembles und Händler in Deutschland.
              </p>
              <div className="flex flex-wrap" style={{ gap: '12px', marginTop: '32px' }}>
                <GoldButton to="/modelle">Modelle ansehen</GoldButton>
                <GoldButton to="/kontakt" variant="secondary">Kontakt</GoldButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}