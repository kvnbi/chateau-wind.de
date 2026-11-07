import { useEffect, useState } from 'react';
import ImageLightbox from './ImageLightbox';

export default function DetailGalleryWithDesc({ images, alt, description }) {
  const secondary = (images || []).slice(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    secondary.forEach(src => { const img = new Image(); img.src = src; });
  }, [images]);

  if (secondary.length === 0) {
    return (
      <div style={{ marginTop: '64px', borderTop: '1px solid #ddd3bf', paddingTop: '32px' }}>
        <h2 className="font-heading" style={{ fontSize: '28px', fontWeight: 400, color: '#202020', marginBottom: '14px' }}>Beschreibung</h2>
        <p style={{ fontSize: '15px', color: '#686868', lineHeight: 1.6, maxWidth: '780px' }}>{description}</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '56px', borderTop: '1px solid #ddd3bf', paddingTop: '40px' }}>
      <style>{`
        .dgd-grid { display: grid; gap: 48px; grid-template-columns: 1.5fr 0.7fr; align-items: start; }
        @media (max-width: 980px) { .dgd-grid { grid-template-columns: 1fr; gap: 36px; } }
        .dgd-imgs { display: grid; column-gap: 14px; row-gap: 14px; grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 480px) { .dgd-imgs { column-gap: 10px; row-gap: 10px; } }
        .dgd-cell { aspect-ratio: 1 / 1; }
        .dgd-desc { position: sticky; top: 180px; }
        @media (max-width: 980px) { .dgd-desc { position: static; order: -1; } }
      `}</style>

      <div className="dgd-grid">
        <div className="dgd-imgs">
          {secondary.map((src, i) => (
            <div
              key={src}
              className="dgd-cell flex items-center justify-center"
            >
              <img
                src={src}
                alt={`${alt} – Detail ${i + 2}`}
                decoding="async"
                onClick={() => setLightboxIndex(i)}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply', cursor: 'zoom-in' }}
              />
            </div>
          ))}
        </div>

        <div className="dgd-desc">
          <h2 className="font-heading" style={{ fontSize: '28px', fontWeight: 400, color: '#202020', marginBottom: '14px' }}>Beschreibung</h2>
          <p style={{ fontSize: '15px', color: '#686868', lineHeight: 1.6 }}>{description}</p>
        </div>
      </div>

      <ImageLightbox images={secondary} alt={alt} open={lightboxIndex !== null} index={lightboxIndex || 0} onClose={() => setLightboxIndex(null)} />
    </div>
  );
}