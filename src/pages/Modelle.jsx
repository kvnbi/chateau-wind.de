import { useState, useMemo } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '@/lib/products';

export default function Modelle() {
  const [filters, setFilters] = useState({ serie: 'Alle', bauform: 'Alle', material: 'Alle', finish: 'Alle' });
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (filters.serie !== 'Alle' && p.seriesGroup !== filters.serie) return false;
      if (filters.bauform !== 'Alle' && p.instrumentType !== filters.bauform) return false;
      if (filters.material !== 'Alle' && p.material !== filters.material) return false;
      if (filters.finish !== 'Alle' && !p.finishes.includes(filters.finish)) return false;
      if (search) {
        const q = search.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.instrumentType.toLowerCase().includes(q) || p.fullName.toLowerCase().includes(q);
      }
      return true;
    });
  }, [filters, search]);

  const selectStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #ddd3bf',
    background: '#ffffff',
    fontSize: '13px',
    fontFamily: 'var(--font-body)',
    outline: 'none',
  };

  const labelStyle = { display: 'block', fontSize: '12px', color: '#686868', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.08em' };

  return (
    <div style={{ background: '#f5f1e8' }}>
      <section style={{ background: '#252525', padding: 'clamp(52px,8vw,78px) 24px clamp(36px,5vw,52px)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
            Modelle
          </div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff', marginBottom: '20px', maxWidth: '700px' }}>
            Alle verfügbaren Modelle
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,17px)', color: '#c0c0c0', lineHeight: 1.65, maxWidth: '680px' }}>
            Château Saxophone der 80er und 90er Reihen. Einzelne Ausführungen und Finishes können je nach Lieferung variieren.
          </p>
        </div>
      </section>
      <style>{`
        .modelle-wrap { padding: 52px 28px 78px; }
        @media (max-width: 480px) { .modelle-wrap { padding: 36px 18px 56px; } }
      `}</style>
      <div className="max-w-[1180px] mx-auto modelle-wrap">
        <div style={{ background: '#ffffff', border: '1px solid #ddd3bf', padding: '20px', marginBottom: '34px' }}>
          <style>{`
            .filter-grid { display: grid; gap: 12px; grid-template-columns: repeat(4, 1fr); }
            @media (max-width: 768px) { .filter-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 480px) { .filter-grid { grid-template-columns: 1fr; } }
          `}</style>
          <div className="filter-grid">
            <div>
              <label style={labelStyle}>Serie</label>
              <select style={selectStyle} value={filters.serie} onChange={e => setFilters(f => ({ ...f, serie: e.target.value }))}>
                <option>Alle</option>
                <option>Versailles</option>
                <option>Chenonceau</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Instrument</label>
              <select style={selectStyle} value={filters.bauform} onChange={e => setFilters(f => ({ ...f, bauform: e.target.value }))}>
                <option>Alle</option>
                <option>Gebogenes Sopransaxophon</option>
                <option>Gerades Sopransaxophon</option>
                <option>Altsaxophon</option>
                <option>Tenorsaxophon</option>
                <option>Baritonsaxophon</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Material</label>
              <select style={selectStyle} value={filters.material} onChange={e => setFilters(f => ({ ...f, material: e.target.value }))}>
                <option>Alle</option>
                <option>92 Prozent Kupfer</option>
                <option>85 Prozent Kupfer</option>
                <option>Neusilber</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Finish</label>
              <select style={selectStyle} value={filters.finish} onChange={e => setFilters(f => ({ ...f, finish: e.target.value }))}>
                <option>Alle</option>
                <option>Lacquer</option>
                <option>Brush</option>
                <option>Golden</option>
                <option>Silver</option>
                <option>Cognac</option>
                <option>Antique</option>
                <option>Unlacquered</option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: '12px' }}>
            <input
              type="text"
              placeholder="Modell oder Instrument suchen"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ ...selectStyle, width: '360px', maxWidth: '100%' }}
            />
          </div>
        </div>

        <style>{`
          .modelle-grid { display: grid; gap: 22px; grid-template-columns: repeat(3, 1fr); }
          @media (max-width: 980px) { .modelle-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 660px) { .modelle-grid { grid-template-columns: 1fr; } }
        `}</style>
        <div className="modelle-grid">
          {filtered.map(product => (
            <ProductCard key={product.slug} product={product} variant="light" />
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: '#686868', fontSize: '15px', padding: '40px 0' }}>
            Keine Modelle gefunden. Bitte passen Sie die Filter an.
          </p>
        )}
      </div>
    </div>
  );
}