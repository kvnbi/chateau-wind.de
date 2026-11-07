const sections = [
  {
    title: 'Materialien',
    text: 'Die Versailles 90 Modelle werden mit 92 Prozent Kupfer gefertigt. Die Versailles 96 Modelle verwenden Neusilber. Die Chenonceau 80, 81 und 83 Modelle werden mit 85 Prozent Kupfer gefertigt.',
  },
  {
    title: 'Bauweise',
    text: 'Einige Modelle nutzen eine Single Post Bauweise, andere eine Ribbed Construction. Die genaue Bauweise hängt vom Modell ab und ist in den technischen Daten angegeben.',
  },
  {
    title: 'Mechanik',
    text: 'Viele Modelle verfügen über eine Hoch-Fis-Klappe. Einzelne Sopransaxophone besitzen eine Hoch-G-Klappe. Bei ausgewählten Alt- und Tenorsaxophonen kommt das Air Channel Focus System am S-Bogen zum Einsatz. Baritonsaxophone verfügen über eine Doppelarmmechanik an den tiefen Klappen.',
  },
  {
    title: 'Polster und Federn',
    text: 'Die aufgeführten Modelle verwenden Pisoni Pro Polster und italienische Blued Steel Federn.',
  },
  {
    title: 'Klappenauflagen',
    text: 'Versailles Modelle verwenden Abalone-Klappenauflagen. Chenonceau Modelle verwenden Perlmutt-Klappenauflagen.',
  },
  {
    title: 'Gravur',
    text: 'Die Modelle sind mit floraler Gravur gestaltet. Versailles Modelle enthalten zusätzlich gravierte Klappen. Die genaue Ausführung hängt vom Modell und Finish ab.',
  },
];

export default function Ausstattung() {
  return (
    <div style={{ background: '#f5f1e8' }}>
      <section style={{ background: '#252525', padding: 'clamp(52px,8vw,78px) 24px clamp(36px,5vw,52px)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
            Ausstattung
          </div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff', marginBottom: '20px', maxWidth: '700px' }}>
            Ausstattung und Materialien
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,17px)', color: '#c0c0c0', lineHeight: 1.65, maxWidth: '680px' }}>
            Die Modelle unterscheiden sich nach Material, Bauweise, Mechanik, Finish und Instrumententyp. Diese Übersicht hilft bei der Einordnung der wichtigsten Merkmale.
          </p>
        </div>
      </section>

      <style>{`
        .ausstattung-spec { padding: 52px 28px 64px; }
        @media (max-width: 480px) { .ausstattung-spec { padding: 36px 18px 48px; } }
      `}</style>
      <div className="ausstattung-spec">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {sections.map(s => (
              <div key={s.title} style={{ background: '#ffffff', border: '1px solid #ddd3bf', padding: '26px' }}>
                <h3 className="font-heading" style={{ fontSize: '22px', fontWeight: 400, color: '#202020', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#686868', lineHeight: 1.55 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}