import { finishSwatches, getFinishThumb } from '@/lib/productImages';

export default function FinishSelector({ baseModel, finishes, selected, onSelect }) {
  if (!finishes || finishes.length === 0) return null;

  return (
    <div>
      <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#686868', marginBottom: '12px' }}>
        Ausführung: <span style={{ color: '#202020' }}>{selected}</span>
      </div>
      <div className="flex flex-wrap" style={{ gap: '14px' }}>
        {finishes.map((finish) => {
          const isActive = finish === selected;
          const thumb = getFinishThumb(baseModel, finish);
          return (
            <button
              key={finish}
              onClick={() => onSelect(finish)}
              className="flex flex-col items-center"
              style={{
                gap: '8px',
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              {thumb ? (
                <img
                  src={thumb}
                  alt={finish}
                  style={{
                    width: '74px',
                    height: '74px',
                    objectFit: 'cover',
                    border: isActive ? '2px solid #c7a24a' : '1px solid #ddd3bf',
                    flexShrink: 0,
                    display: 'block',
                    transition: 'border-color 0.15s',
                  }}
                />
              ) : (
                <span
                  style={{
                    width: '74px',
                    height: '74px',
                    background: finishSwatches[finish] || '#cccccc',
                    border: isActive ? '2px solid #c7a24a' : '1px solid #ddd3bf',
                    flexShrink: 0,
                    display: 'block',
                  }}
                />
              )}
              <span style={{ fontSize: '13px', color: isActive ? '#202020' : '#686868', fontWeight: isActive ? 500 : 400 }}>
                {finish}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}