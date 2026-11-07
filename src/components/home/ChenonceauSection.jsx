import SectionHeader from '../ui/SectionHeader';
import ProductSlider from './ProductSlider';
import { chenonceauProducts } from '@/lib/products';

const labels = {
  'CCS-80': 'Gebogenes Sopransaxophon',
  'CSS-80': 'Gerades Sopransaxophon',
  'CSS-83': 'Gerades Sopransaxophon',
  'CAS-80': 'Altsaxophon',
  'CAS-81': 'Altsaxophon',
  'CTS-80': 'Tenorsaxophon',
  'CBS-80': 'Baritonsaxophon',
};

export default function ChenonceauSection() {
  return (
    <section style={{ background: '#ffffff' }}>
      <div className="max-w-[1180px] mx-auto" style={{ padding: 'clamp(48px,8vw,78px) 24px' }}>
        <SectionHeader
          eyebrow="80er Serie"
          title="Chenonceau"
          rightText="Die Chenonceau Serie umfasst mehrere Instrumententypen und Ausführungen. Die Instrumente werden mit 85 Prozent Kupfer gefertigt und richten sich an ambitionierte Spieler, Ensembles und Musikschulen."
        />
        <ProductSlider products={chenonceauProducts} labels={labels} variant="light" />
      </div>
    </section>
  );
}