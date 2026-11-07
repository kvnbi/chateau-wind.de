import ProductCard from '../components/ui/ProductCard';
import GoldButton from '../components/ui/GoldButton';
import { chenonceauProducts } from '@/lib/products';

const c80 = chenonceauProducts.filter(p => p.series === 'Chenonceau 80');
const cOther = chenonceauProducts.filter(p => p.series !== 'Chenonceau 80');

export default function Chenonceau() {
  return (
    <div>
      <section style={{ background: '#252525', padding: 'clamp(52px,8vw,78px) 24px clamp(36px,5vw,52px)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
            Château Profiserie
          </div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff', marginBottom: '20px', maxWidth: '700px' }}>
            Chenonceau Serie
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,17px)', color: '#c0c0c0', lineHeight: 1.65, maxWidth: '680px', marginBottom: '16px' }}>
            Die Chenonceau-Reihe rangiert direkt unter der Spitzenserie. Auch hier fertigt ein einzelner Instrumentenbauer jedes Instrument von Anfang bis Ende. Zur Ausstattung gehören 85 Prozent Kupfer, eine vollflächige florale Gravur auf Korpus und Becher, Perlmutt-Klappenauflagen, Pisoni Pro Polster und Blued Steel Federn.
          </p>
          <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, maxWidth: '620px' }}>
            Die 80er Reihe reicht vom gebogenen Sopransaxophon bis zum Baritonsaxophon und bietet bis zu sechs verschiedene Finishes je Modell.
          </p>
        </div>
      </section>

      <section style={{ background: '#252525', padding: 'clamp(28px,5vw,44px) 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div style={{ marginBottom: '24px' }}>
            <h2 className="font-heading" style={{ fontSize: 'clamp(22px,3vw,28px)', fontWeight: 400, color: '#ffffff', marginBottom: '6px' }}>
              80er Modelle
            </h2>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.55, maxWidth: '580px' }}>
              Gebogenes und gerades Sopransaxophon, Altsaxophon, Tenorsaxophon und Baritonsaxophon.
            </p>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {c80.map(p => <ProductCard key={p.slug} product={p} variant="dark" />)}
          </div>
        </div>
      </section>

      <section style={{ background: '#252525', padding: 'clamp(28px,5vw,44px) 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div style={{ marginBottom: '24px' }}>
            <h2 className="font-heading" style={{ fontSize: 'clamp(22px,3vw,28px)', fontWeight: 400, color: '#ffffff', marginBottom: '6px' }}>
              81er und 83er Modelle
            </h2>
            <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.55, maxWidth: '580px' }}>
              Spezialausführungen der Chenonceau Reihe. Das CAS-81 ist unlackiert und entwickelt mit der Zeit eine Patina, das CSS-83 verfügt über eine Hoch-G-Klappe.
            </p>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {cOther.map(p => <ProductCard key={p.slug} product={p} variant="dark" />)}
          </div>
        </div>
      </section>

      <section style={{ background: '#111111', padding: 'clamp(44px,7vw,60px) 24px', textAlign: 'center' }}>
        <h2 className="font-heading" style={{ fontSize: 'clamp(26px, 4vw, 40px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff', marginBottom: '14px' }}>
          Interesse an einem Chenonceau Modell?
        </h2>
        <p style={{ fontSize: '15px', color: '#aaaaaa', lineHeight: 1.55, maxWidth: '540px', margin: '0 auto 28px' }}>
          Wir beraten Sie gerne zu Modell, Finish und Verfügbarkeit.
        </p>
        <GoldButton to="/kontakt">Kontakt aufnehmen</GoldButton>
      </section>
    </div>
  );
}