import SectionHeader from '../ui/SectionHeader';
import ProductSlider from './ProductSlider';
import { versaillesProducts } from '@/lib/products';

const labels = {
  'CCS-90': 'Gebogenes Sopransaxophon',
  'CSS-90': 'Gerades Sopransaxophon',
  'CAS-90': 'Altsaxophon',
  'CTS-90': 'Tenorsaxophon',
  'CAS-96': 'Altsaxophon',
  'CTS-96': 'Tenorsaxophon',
};

export default function VersaillesSection() {
  return (
    <section style={{ background: '#252525' }}>
      <div className="max-w-[1180px] mx-auto" style={{ padding: 'clamp(48px,8vw,78px) 24px' }}>
        <SectionHeader
          eyebrow="90er Serie"
          title="Versailles"
          rightText="Die Versailles Serie ist die hochwertigste Saxophonreihe von Château. Die Instrumente der 90er Reihe werden mit 92 Prozent Kupfer gefertigt. Die 96er Modelle verwenden Neusilber."
          variant="dark"
        />
        <ProductSlider products={versaillesProducts} labels={labels} variant="dark" />
      </div>
    </section>
  );
}