import { useEffect, useState } from 'react';
import ImageLightbox from './ImageLightbox';

export default function ProductGallery({ images, alt }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const mainSrc = images && images.length > 0 ? images[0] : null;

  useEffect(() => {
    if (!mainSrc) return;
    let cancelled = false;
    setLoaded(false);
    const img = new Image();
    img.src = mainSrc;
    const done = () => { if (!cancelled) setLoaded(true); };
    if (img.decode) {
      img.decode().then(done).catch(done);
    } else {
      img.onload = done;
      img.onerror = done;
      if (img.complete) done();
    }
    return () => { cancelled = true; };
  }, [mainSrc]);

  useEffect(() => {
    (images || []).slice(1).forEach(src => { const i = new Image(); i.src = src; });
  }, [images]);

  if (!mainSrc) return null;

  return (
    <div style={{ overflow: 'visible', marginBottom: '28px' }}>
      <style>{`
        .gal-main { height: 780px; }
        .gal-main img { max-height: 720px; max-width: 78%; }
        @media (max-width: 880px) { .gal-main { height: 600px; } .gal-main img { max-height: 560px; max-width: 82%; } }
        @media (max-width: 480px) { .gal-main { height: 440px; } .gal-main img { max-height: 400px; max-width: 88%; } }
      `}</style>

      <div className="flex items-center justify-center gal-main" style={{ overflow: 'visible' }}>
        <img
          src={mainSrc}
          alt={alt}
          decoding="sync"
          loading="eager"
          fetchPriority="high"
          onClick={() => setLightboxOpen(true)}
          style={{
            maxHeight: '100%',
            objectFit: 'contain',
            mixBlendMode: 'multiply',
            cursor: 'zoom-in',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.25s ease',
          }}
        />
      </div>

      <ImageLightbox images={images} alt={alt} open={lightboxOpen} index={0} onClose={() => setLightboxOpen(false)} />
    </div>
  );
}