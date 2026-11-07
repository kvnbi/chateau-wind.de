import GoldButton from '@/components/ui/GoldButton';

const sections = [
  {
    title: 'Wie Château begann',
    text: 'Die Geschichte von Château begann 1979, als der Gründer die Tenon Industrial Co., Ltd. in Taiwan mit einem klaren Ziel gründete: hochwertige, erschwingliche Instrumente herzustellen, auf die Musiker vertrauen können. Nach einem Jahrzehnt des Wachstums errichtete Tenon eine eigene Fabrik, um die Produktionskapazitäten zu verbessern. Im Jahr 1999 wurde die Marke Château offiziell ins Leben gerufen - ein neuer Meilenstein in der Entwicklung des Unternehmens.',
    image: '/images/a1b144227_howchateaubegan.jpg',
    imageAlt: 'Wie Château begann',
  },
  {
    title: 'Die Bedeutung von „Château"',
    text: 'Der Name „Château" wurde von der Heimatstadt des Gründers inspiriert, die dem französischen Wort für „Schloss" klanglich ähnelt. Er spiegelt seine Verbundenheit mit der Heimat wider und symbolisiert zugleich die Stärke und zeitlose Qualität der Château-Saxophone.',
    image: '/images/3867951d6_themeaningofchateau.jpg',
    imageAlt: 'Die Bedeutung von Château',
  },
  {
    title: 'Hergestellt von Château',
    text: 'Château-Saxophone werden in der eigenen Fabrik von Hand gefertigt, mit strenger Qualitätskontrolle bei jedem Schritt, vom Formen bis zur Endmontage. Dies gewährleistet präzise Intonation, vollen Klang und langlebige Haltbarkeit. Für uns ist ein großartiges Saxophon mehr als ein Instrument: es ist das Handwerk hinter dem Klang.',
    image: '/images/08d8ee90b_madebychateau.jpg',
    imageAlt: 'Château Fertigungsprozess',
  },
  {
    title: 'Château heute',
    text: 'Während Château weiter wächst, arbeiten wir mit unverändertem Engagement daran, unsere Saxophone durch kontinuierliche Forschung und Entwicklung weiter zu verbessern. Mit dem gleichen Anspruch an Qualität und Handwerkskunst möchten wir Musikerinnen, Musikern und Partnern verlässliche und sorgfältig gefertigte Produkte bieten.',
    image: '/images/b9b1d6bfa_image.png',
    imageAlt: 'Château heute',
  },
];

export default function UeberChateau() {
  return (
    <div style={{ background: '#f5f1e8' }}>

      <section style={{ background: '#252525', padding: 'clamp(52px,8vw,78px) 24px clamp(36px,5vw,52px)' }}>
        <div className="max-w-[1180px] mx-auto" style={{ textAlign: 'center' }}>
          <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
            Über uns
          </div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff', marginBottom: '20px', maxWidth: '700px', margin: '0 auto 20px' }}>
            Château Saxophone
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,17px)', color: '#c0c0c0', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto' }}>
            Château steht für Qualität, unverwechselbaren Stil, Innovation und kontinuierliche Verbesserung. Lassen Sie sich selbst von der Qualität überzeugen!
          </p>
        </div>
      </section>

      <style>{`
        .ueber-sections { padding: 72px 28px; }
        @media (max-width: 480px) { .ueber-sections { padding: 48px 18px; } }
        .ueber-sections-stack { gap: 80px; }
        @media (max-width: 480px) { .ueber-sections-stack { gap: 56px; } }
        .ueber-band { padding: 64px 28px; }
        @media (max-width: 480px) { .ueber-band { padding: 48px 18px; } }
        .ueber-cta { padding: 56px 28px; }
        @media (max-width: 480px) { .ueber-cta { padding: 44px 18px; } }
      `}</style>
      <div className="max-w-[1100px] mx-auto ueber-sections">
        <div className="flex flex-col ueber-sections-stack">
          {sections.map((section, i) => (
            <div key={section.title}>
              <style>{`
                .about-row-${i} { display: grid; align-items: center; gap: 52px; grid-template-columns: 1fr 1fr; }
                @media (max-width: 768px) { .about-row-${i} { grid-template-columns: 1fr; gap: 28px; } }
              `}</style>
              <div className={`about-row-${i}`} style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
                <div style={{ direction: 'ltr' }}>
                  <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.18em', marginBottom: '12px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-heading" style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 400, color: '#202020', marginBottom: '16px', lineHeight: 1.12 }}>
                    {section.title}
                  </h2>
                  <p style={{ fontSize: '15px', color: '#686868', lineHeight: 1.65 }}>
                    {section.text}
                  </p>
                </div>
                <div style={{ direction: 'ltr' }}>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    style={{ width: '100%', maxHeight: '340px', objectFit: 'cover', border: '1px solid #ddd3bf' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ueber-band" style={{ background: '#252525' }}>
        <div className="max-w-[1100px] mx-auto" style={{ textAlign: 'center' }}>
          <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
            Weltweite Präsenz
          </div>
          <h2 className="font-heading" style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 400, color: '#ffffff', marginBottom: '16px' }}>
            Château auf der ganzen Welt
          </h2>
          <p style={{ fontSize: '15px', color: '#c8bfa8', lineHeight: 1.65, maxWidth: '580px', margin: '0 auto 36px' }}>
            Château arbeitet mit Händlern und Distributoren aus der ganzen Welt zusammen, um mehr Musikern den Zugang zu Château-Saxophonen zu ermöglichen.
          </p>
          <img
            src="/images/ddf5ec39e_generated_image.png"
            alt="Château Weltkarte"
            style={{ width: '100%', maxWidth: '860px', aspectRatio: '3 / 2', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.12)', marginBottom: '36px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
          <GoldButton to="/kontakt" variant="secondary">
            Kontakt aufnehmen
          </GoldButton>
        </div>
      </div>

      <div className="ueber-cta" style={{ background: '#111111', textAlign: 'center' }}>
        <h2 className="font-heading" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 400, color: '#ffffff', marginBottom: '14px' }}>
          Interesse an einem Château Saxophon?
        </h2>
        <p style={{ fontSize: '15px', color: '#aaaaaa', marginBottom: '28px', lineHeight: 1.55 }}>
          Wir beraten Sie gerne zur Modellauswahl, Verfügbarkeit und Bezugsquellen in Deutschland.
        </p>
        <GoldButton to="/kontakt">Kontakt aufnehmen</GoldButton>
      </div>
    </div>
  );
}