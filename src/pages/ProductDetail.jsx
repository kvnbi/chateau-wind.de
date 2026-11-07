import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '@/lib/products';
import { getModelImageData, getFinishImages, getPrice, formatPrice } from '@/lib/productImages';
import ProductCard from '../components/ui/ProductCard';
import GoldButton from '../components/ui/GoldButton';
import ProductGallery from '../components/product/ProductGallery';
import DetailGalleryWithDesc from '../components/product/DetailGalleryWithDesc';
import FinishSelector from '../components/product/FinishSelector';

function Tag({ label }) {
  return (
    <span style={{ border: '1px solid #ddd3bf', background: '#fbfaf6', color: '#4f4f4f', fontSize: '11px', padding: '4px 9px', display: 'inline-block' }}>
      {label}
    </span>
  );
}

function TechRow({ label, value }) {
  return (
    <tr style={{ borderBottom: '1px solid #ddd3bf' }}>
      <td style={{ padding: '10px 14px', fontSize: '14px', color: '#686868', width: '35%', verticalAlign: 'top' }}>{label}</td>
      <td style={{ padding: '10px 14px', fontSize: '14px', color: '#202020' }}>{value}</td>
    </tr>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const imageData = product ? getModelImageData(product.name) : null;
  const availableFinishes = imageData ? Object.keys(imageData) : (product ? product.finishes : []);
  const [finish, setFinish] = useState(availableFinishes[0]);

  useEffect(() => {
    setFinish(availableFinishes[0]);
  }, [slug]);

  useEffect(() => {
    if (!imageData) return;
    const urls = Object.values(imageData).flatMap(f => f.images || []);
    urls.forEach(url => { const img = new Image(); img.src = url; });
  }, [slug]);

  if (!product) {
    return (
      <div style={{ background: '#ffffff', padding: '78px 28px', textAlign: 'center' }}>
        <h1 className="font-heading" style={{ fontSize: '32px', color: '#202020' }}>Modell nicht gefunden</h1>
        <p style={{ color: '#686868', marginTop: '12px' }}>
          <Link to="/modelle" style={{ color: '#c7a24a' }}>Zurück zur Übersicht</Link>
        </p>
      </div>
    );
  }

  const finishData = getFinishImages(product.name, finish);
  const galleryImages = (finishData && finishData.images.length > 0) ? finishData.images : [product.image];
  const modelNumber = finishData ? finishData.modelNumber : product.name;
  const price = formatPrice(getPrice(modelNumber));
  const related = getRelatedProducts(product, 3);

  return (
    <div style={{ background: '#ffffff' }}>
      <style>{`
        .pd-wrap { padding: 40px 28px 78px; }
        @media (max-width: 480px) { .pd-wrap { padding: 28px 18px 56px; } }
        .detail-hero-grid { display: grid; align-items: start; gap: 56px; grid-template-columns: 1.35fr 0.9fr; overflow: visible; }
        .detail-hero-grid > * { min-width: 0; overflow: visible; }
        @media (max-width: 880px) { .detail-hero-grid { grid-template-columns: 1fr; gap: 28px; } }
      `}</style>
      <div className="max-w-[1320px] mx-auto pd-wrap">
        <nav style={{ fontSize: '13px', color: '#686868', marginBottom: '32px' }}>
          <Link to="/" style={{ color: '#686868', textDecoration: 'none' }}>Start</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link to="/modelle" style={{ color: '#686868', textDecoration: 'none' }}>Modelle</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link to={product.seriesGroup === 'Versailles' ? '/versailles' : '/chenonceau'} style={{ color: '#686868', textDecoration: 'none' }}>{product.seriesGroup}</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: '#202020' }}>{product.name}</span>
        </nav>

        <div className="detail-hero-grid">
          <ProductGallery images={galleryImages} alt={`${product.fullName} ${finish}`} />

          <div>
            <h1 className="font-heading" style={{ fontSize: 'clamp(30px, 3.6vw, 46px)', fontWeight: 400, color: '#202020', marginBottom: '6px', lineHeight: 1.08 }}>
              {product.fullName}
            </h1>

            <div className="flex items-center" style={{ gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '13px', color: '#686868' }}>Modellnummer</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600, letterSpacing: '0.04em', color: '#c7a24a' }}>
                {modelNumber}
              </span>
            </div>

            {price && (
              <div style={{ marginBottom: '20px' }}>
                <span className="font-heading" style={{ fontSize: '30px', fontWeight: 400, color: '#202020' }}>{price}</span>
                <span style={{ fontSize: '13px', color: '#9a9a9a', marginLeft: '8px' }}>inkl. MwSt.</span>
              </div>
            )}

            <p style={{ fontSize: '15px', color: '#686868', lineHeight: 1.55, marginBottom: '24px' }}>
              {product.shortDesc}
            </p>

            <div style={{ borderTop: '1px solid #ddd3bf', paddingTop: '22px', marginBottom: '24px' }}>
              <FinishSelector baseModel={product.name} finishes={availableFinishes} selected={finish} onSelect={setFinish} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#ddd3bf', border: '1px solid #ddd3bf', marginBottom: '24px' }}>
              {[
                ['Instrument', product.instrumentType],
                ['Material', product.material],
                ['High Key', product.highKey],
                ['Serie', product.series],
              ].map(([k, v]) => (
                <div key={k} style={{ background: '#ffffff', padding: '11px 13px' }}>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a9a9a', marginBottom: '3px' }}>{k}</div>
                  <div style={{ fontSize: '14px', color: '#202020' }}>{v}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap" style={{ gap: '6px', marginBottom: '24px' }}>
              {product.allTags.slice(0, 8).map(tag => <Tag key={tag} label={tag} />)}
            </div>

            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              <GoldButton to="/kontakt">Kontakt aufnehmen</GoldButton>
            </div>
          </div>
        </div>

        <DetailGalleryWithDesc images={galleryImages} alt={`${product.fullName} ${finish}`} description={product.detailDesc} />

        <div style={{ marginTop: '48px', borderTop: '1px solid #ddd3bf', paddingTop: '32px' }}>
          <h2 className="font-heading" style={{ fontSize: '28px', fontWeight: 400, color: '#202020', marginBottom: '18px' }}>Ausstattung</h2>
          <style>{`
            .feat-detail-grid { display: grid; gap: 8px; grid-template-columns: repeat(2, 1fr); max-width: 680px; }
            @media (max-width: 520px) { .feat-detail-grid { grid-template-columns: 1fr; } }
          `}</style>
          <div className="feat-detail-grid">
            {product.features.map(f => (
              <div key={f} style={{ background: '#f5f1e8', border: '1px solid #ddd3bf', padding: '11px 13px', fontSize: '14px', color: '#202020' }}>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '48px', borderTop: '1px solid #ddd3bf', paddingTop: '32px' }}>
          <h2 className="font-heading" style={{ fontSize: '28px', fontWeight: 400, color: '#202020', marginBottom: '18px' }}>Technische Daten</h2>
          <div style={{ overflowX: 'auto', maxWidth: '780px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd3bf' }}>
            <tbody>
              <TechRow label="Serie" value={product.series} />
              <TechRow label="Modell" value={product.name} />
              <TechRow label="Modellnummer (gewählt)" value={`${modelNumber} (${finish})`} />
              {price && <TechRow label="Preis" value={`${price} inkl. MwSt.`} />}
              <TechRow label="Instrument" value={product.instrumentType} />
              <TechRow label="Material" value={product.material} />
              <TechRow label="Bauweise" value={product.construction} />
              <TechRow label={product.highKey} value="Ja" />
              {product.necks && <TechRow label="S-Bögen" value={product.necks} />}
              <TechRow label="Polster" value="Pisoni Pro" />
              <TechRow label="Federn" value="Italienische Blued Steel" />
              <TechRow label="Klappenauflagen" value={product.keyPads} />
              <TechRow label="Gravur" value="Vollflächige florale Gravur" />
              <TechRow label="Verfügbare Finishes" value={availableFinishes.join(', ')} />
              <TechRow label="Hinweis" value="Bei einigen Finishes kann eine Sonderbestellung erforderlich sein. Die Verfügbarkeit wird auf Anfrage geprüft." />
            </tbody>
          </table>
          </div>
        </div>

        <div style={{ marginTop: '48px', background: '#f5f1e8', border: '1px solid #ddd3bf', padding: '32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <h3 className="font-heading" style={{ fontSize: '22px', fontWeight: 400, color: '#202020', marginBottom: '8px' }}>
              Interesse an {modelNumber}?
            </h3>
            <p style={{ fontSize: '14px', color: '#686868', lineHeight: 1.55 }}>
              Nehmen Sie Kontakt auf. Wir informieren über Verfügbarkeit, Finishes und Bezugsquellen.
            </p>
          </div>
          <GoldButton to="/kontakt">Kontakt aufnehmen</GoldButton>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: '64px', borderTop: '1px solid #ddd3bf', paddingTop: '32px' }}>
            <h2 className="font-heading" style={{ fontSize: '28px', fontWeight: 400, color: '#202020', marginBottom: '22px' }}>Weitere Modelle</h2>
            <style>{`
              .related-grid { display: grid; gap: 22px; grid-template-columns: repeat(3, 1fr); }
              @media (max-width: 980px) { .related-grid { grid-template-columns: repeat(2, 1fr); } }
              @media (max-width: 660px) { .related-grid { grid-template-columns: 1fr; } }
            `}</style>
            <div className="related-grid">
              {related.map(p => (
                <ProductCard key={p.slug} product={p} variant="light" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}