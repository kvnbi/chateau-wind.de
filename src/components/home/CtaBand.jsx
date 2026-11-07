import GoldButton from '../ui/GoldButton';

export default function CtaBand() {
  return (
    <section style={{ background: '#111111', padding: 'clamp(48px,8vw,72px) 24px', textAlign: 'center' }}>
      <h2 className="font-heading" style={{ maxWidth: '780px', margin: '0 auto', fontSize: 'clamp(31px, 4vw, 50px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff' }}>
        Welches Château Saxophon passt zu Ihnen?
      </h2>
      <p style={{ maxWidth: '660px', margin: '20px auto 28px', color: '#d0d0d0', fontSize: '16px', lineHeight: 1.55 }}>
        Teilen Sie uns mit, welches Modell Sie interessiert und welche Ausführung Sie bevorzugen. Wir beraten Sie gerne!
      </p>
      <GoldButton to="/kontakt">Kontakt aufnehmen</GoldButton>
    </section>
  );
}