import { useState, useRef, useEffect, useCallback } from 'react';
import ProductCard from '../ui/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductSlider({ products, labels, variant = 'light' }) {
  const [index, setIndex] = useState(0);
  const [cols, setCols] = useState(3);
  const viewportRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w <= 620) setCols(1);
      else if (w <= 980) setCols(2);
      else setCols(3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, products.length - cols);

  useEffect(() => {
    setIndex(i => Math.min(i, Math.max(0, products.length - cols)));
  }, [cols, products.length]);

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex(i => Math.min(maxIndex, i + 1)), [maxIndex]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) {
      if (dx > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const isDark = variant === 'dark';
  const btnStyle = {
    width: '40px',
    height: '40px',
    border: isDark ? '1px solid rgba(255,255,255,0.2)' : '1px solid #ddd3bf',
    background: 'transparent',
    color: isDark ? '#e5d6a5' : '#c7a24a',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.15s',
    flexShrink: 0,
  };

  const GAP = 22;
  const pctPerStep = 100 / cols;
  const pxPerStep = GAP / cols;

  return (
    <div>
      <style>{`
        .slider-viewport { overflow: hidden; }
        .slider-track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: calc((100% - ${GAP * (3 - 1)}px) / 3);
          gap: ${GAP}px;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          will-change: transform;
        }
        @media (max-width: 980px) {
          .slider-track { grid-auto-columns: calc((100% - ${GAP}px) / 2); }
        }
        @media (max-width: 620px) {
          .slider-track { grid-auto-columns: 100%; }
        }
      `}</style>
      <div
        className="slider-viewport"
        ref={viewportRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="slider-track"
          style={{
            transform: `translateX(calc(-${index} * (${pctPerStep}% + ${pxPerStep}px)))`,
          }}
        >
          {products.map(product => (
            <ProductCard
              key={product.slug}
              product={product}
              variant={variant}
              label={labels?.[product.name]}
            />
          ))}
        </div>
      </div>

      {products.length > cols && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', marginTop: '22px' }}>
          <span style={{ fontSize: '12px', color: isDark ? '#aaaaaa' : '#888888', marginRight: '6px' }}>
            {index + 1} / {maxIndex + 1}
          </span>
          <button style={{ ...btnStyle, opacity: index === 0 ? 0.35 : 1 }} onClick={prev} disabled={index === 0} aria-label="Zurück">
            <ChevronLeft size={18} />
          </button>
          <button style={{ ...btnStyle, opacity: index === maxIndex ? 0.35 : 1 }} onClick={next} disabled={index === maxIndex} aria-label="Vor">
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {products.length > 1 && cols === 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '14px' }}>
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                background: i === index
                  ? (isDark ? '#e5d6a5' : '#c7a24a')
                  : (isDark ? 'rgba(255,255,255,0.25)' : '#ddd3bf'),
                transition: 'background 0.2s',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}