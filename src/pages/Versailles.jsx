import ProductCard from '../components/ui/ProductCard';
import GoldButton from '../components/ui/GoldButton';
import { versaillesProducts } from '@/lib/products';

const v90 = versaillesProducts.filter(p => p.series === 'Versailles 90');
const v96 = versaillesProducts.filter(p => p.series === 'Versailles 96');

export default function Versailles() {
  return (
    <div>
      <section style={{ background: '#252525', padding: 'clamp(52px,8vw,78px) 24px clamp(36px,5vw,52px)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
            Château Flaggschiff
          </div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff', marginBottom: '20px', maxWidth: '700px' }}>
            Versailles Serie
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,17px)', color: '#c0c0c0', lineHeight: 1.65, maxWidth: '680px', marginBottom: '16px' }}>
            Die Versailles Serie ist die Flaggschiff-Reihe von Château. Jedes Instrument wird von einem einzelnen Instrumentenbauer von Anfang bis Ende gefertigt. Die 90er Modelle bestehen aus 92 Prozent Kupfer, die 96er Modelle aus Neusilber. Zur Ausstattung gehören eine vollflächige Gravur auf Korpus und Klappen, Abalone-Klappenauflagen, Pisoni Pro Polster und italienische Blued Steel Federn.
          </p>
          <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, maxWidth: '620px' }}>
            Die Stückzahlen sind begrenzt. Bei einigen Finishes kann eine Sonderbestellung erforderlich sein.
          </p>
        </div>
      </section>

      <section style={{ background: '#252525', padding: 'clamp(28px,5vw,44px) 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div style={{ marginBottom: '24px' }}>
            <h2 className="font-heading" style={{ fontSize: 'clamp(22px,3vw,28px)', fontWeight: 400, color: '#ffffff', marginBottom: '6px' }}>
              90er Modelle
            </h2>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.55, maxWidth: '580px' }}>
              92 Prozent Kupfer. Erhältlich in Lacquer und Brush.
            </p>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {v90.map(p => <ProductCard key={p.slug} product={p} variant="dark" />)}
          </div>
        </div>
      </section>

      <section style={{ background: '#252525', padding: 'clamp(28px,5vw,44px) 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div style={{ marginBottom: '24px' }}>
            <h2 className="font-heading" style={{ fontSize: 'clamp(22px,3vw,28px)', fontWeight: 400, color: '#ffffff', marginBottom: '6px' }}>
              96er Modelle
            </h2>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.55, maxWidth: '580px' }}>
              Neusilber. Dieselbe Gravur und Ausstattung wie die 90er Reihe, mit einem helleren Klangcharakter.
            </p>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {v96.map(p => <ProductCard key={p.slug} product={p} variant="dark" />)}
          </div>
        </div>
      </section>

      <section style={{ background: '#111111', padding: 'clamp(44px,7vw,60px) 24px', textAlign: 'center' }}>
        <h2 className="font-heading" style={{ fontSize: 'clamp(26px, 4vw, 40px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff', marginBottom: '14px' }}>
          Interesse an einem Versailles Modell?
        </h2>
        <p style={{ fontSize: '15px', color: '#aaaaaa', lineHeight: 1.55, maxWidth: '540px', margin: '0 auto 28px' }}>
          Wir beraten Sie gerne zu Modell, Finish und Verfügbarkeit.
        </p>
        <GoldButton to="/kontakt">Kontakt aufnehmen</GoldButton>
      </section>
    </div>
  );
}