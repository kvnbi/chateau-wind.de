import GoldButton from '@/components/ui/GoldButton';

export default function PageNotFound() {
  return (
    <div style={{ background: '#f5f1e8', padding: '96px 24px', textAlign: 'center' }}>
      <h1 className="font-heading" style={{ fontSize: 'clamp(56px, 10vw, 96px)', lineHeight: 1, color: '#c7a24a', marginBottom: '16px' }}>404</h1>
      <p style={{ fontSize: '16px', color: '#686868', marginBottom: '28px' }}>Diese Seite wurde nicht gefunden.</p>
      <GoldButton to="/">Zur Startseite</GoldButton>
    </div>
  );
}
