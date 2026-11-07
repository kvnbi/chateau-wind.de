import { useEffect, useState, useRef, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

export default function ImageLightbox({ images, alt, open, index = 0, onClose }) {
  const list = images || [];
  const [current, setCurrent] = useState(index);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const dragRef = useRef(null);

  useEffect(() => {
    if (open) setCurrent(index);
  }, [open, index]);

  useEffect(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, [current, open]);

  const goTo = useCallback((next) => {
    if (list.length < 2) return;
    setCurrent((c) => (next + list.length) % list.length);
  }, [list.length]);

  useEffect(() => {
    if (!open) { setMounted(false); return; }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const raf = requestAnimationFrame(() => setMounted(true));
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') goTo(current + 1);
      else if (e.key === 'ArrowLeft') goTo(current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      cancelAnimationFrame(raf);
    };
  }, [open, onClose, goTo, current]);

  const clampZoom = (z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setZoom((z) => {
      const next = clampZoom(z - e.deltaY * 0.0015);
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const onPointerDown = (e) => {
    if (zoom <= 1) return;
    dragRef.current = { startX: e.clientX, startY: e.clientY, originX: offset.x, originY: offset.y };
  };
  const onPointerMove = (e) => {
    if (!dragRef.current) return;
    setOffset({
      x: dragRef.current.originX + (e.clientX - dragRef.current.startX),
      y: dragRef.current.originY + (e.clientY - dragRef.current.startY),
    });
  };
  const onPointerUp = () => { dragRef.current = null; };

  if (!open || list.length === 0) return null;

  const src = list[current];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(40,38,34,0.62)',
        backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: mounted ? 1 : 0,
        transition: 'opacity 0.28s ease',
      }}
    >
      <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', gap: '4px', padding: '14px', zIndex: 2 }}>
        <button
          onClick={(e) => { e.stopPropagation(); setZoom((z) => clampZoom(z + 0.5)); }}
          aria-label="Vergrößern"
          style={ctrlBtn}
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setZoom((z) => { const n = clampZoom(z - 0.5); if (n === 1) setOffset({ x: 0, y: 0 }); return n; }); }}
          aria-label="Verkleinern"
          style={ctrlBtn}
        >
          <ZoomOut size={20} />
        </button>
        <button onClick={onClose} aria-label="Schließen" style={ctrlBtn}>
          <X size={20} />
        </button>
      </div>

      {list.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); goTo(current - 1); }}
            aria-label="Vorheriges Bild"
            style={{ ...navBtn, left: '14px' }}
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goTo(current + 1); }}
            aria-label="Nächstes Bild"
            style={{ ...navBtn, right: '14px' }}
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}

      <img
        key={src}
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onDoubleClick={(e) => { e.stopPropagation(); setZoom((z) => (z > 1 ? (setOffset({ x: 0, y: 0 }), 1) : 2)); }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        draggable={false}
        style={{
          maxWidth: '92vw',
          maxHeight: '88vh',
          objectFit: 'contain',
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
          transformOrigin: 'center center',
          transition: dragRef.current ? 'none' : 'transform 0.18s ease',
          cursor: zoom > 1 ? 'grab' : 'zoom-in',
          touchAction: 'none',
          userSelect: 'none',
        }}
      />

      {list.length > 1 && (
        <div style={{ position: 'absolute', bottom: '18px', left: '50%', transform: 'translateX(-50%)', color: '#f5f1e8', fontSize: '13px', letterSpacing: '0.06em', background: 'rgba(0,0,0,0.35)', padding: '5px 12px' }}>
          {current + 1} / {list.length}
        </div>
      )}
    </div>
  );
}

const ctrlBtn = {
  width: '44px', height: '44px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(0,0,0,0.28)',
  border: '1px solid rgba(255,255,255,0.18)',
  color: '#f5f1e8',
  cursor: 'pointer',
};

const navBtn = {
  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
  width: '48px', height: '48px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(0,0,0,0.28)',
  border: '1px solid rgba(255,255,255,0.18)',
  color: '#f5f1e8',
  cursor: 'pointer',
  zIndex: 2,
};