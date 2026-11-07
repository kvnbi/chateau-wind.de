import { getFinishThumb } from '@/lib/productImages';

const FALLBACK_IMAGES = {
  Lacquer:    '/images/3eab09643_chateaulacquer.jpg',
  Golden:     '/images/57647e77c_chateaugolden.jpg',
  Silver:     '/images/3d64c3b7c_chateausilver.jpg',
  Cognac:     '/images/a881528cf_chateaucognac.jpg',
  Antique:    '/images/1cebfd567_chateauantique.jpg',
  Brush:      '/images/79e3016ff_chateaubrush.jpg',
  Unlacquered:'/images/97ecd63f9_chateauunlacquered.jpg',
};

export default function FinishBadges({ baseModel, finishes, variant = 'dark' }) {
  const labelColor = variant === 'dark' ? '#aaaaaa' : '#686868';
  const nameColor  = variant === 'dark' ? '#ffffff' : '#202020';
  const border     = variant === 'dark' ? '1px solid rgba(255,255,255,0.14)' : '1px solid #ddd3bf';

  return (
    <div style={{ marginTop: '14px' }}>
      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: labelColor, marginBottom: '10px' }}>
        Verfügbare Finishes
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {finishes.map(finish => (
          <div key={finish} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '52px', height: '52px', border, overflow: 'hidden', flexShrink: 0 }}>
              <img
                src={getFinishThumb(baseModel, finish) || FALLBACK_IMAGES[finish]}
                alt={finish}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '10px', color: nameColor, textAlign: 'center', letterSpacing: '0.04em' }}>{finish}</span>
          </div>
        ))}
      </div>
    </div>
  );
}