export default function SectionHeader({ eyebrow, title, rightText, variant = 'light' }) {
  const isDark = variant === 'dark';
  const borderColor = isDark ? 'rgba(255,255,255,0.16)' : '#ddd3bf';
  const titleColor = isDark ? '#ffffff' : '#202020';
  const textColor = isDark ? '#d0d0d0' : '#686868';

  const gridId = rightText ? 'sh-two-col' : 'sh-one-col';
  return (
    <>
      {rightText && <style>{`
        .section-header-two { display: grid; gap: 32px; align-items: end; grid-template-columns: 1fr minmax(280px, 420px); }
        @media (max-width: 768px) { .section-header-two { grid-template-columns: 1fr; } }
      `}</style>}
      <div
        className={rightText ? 'section-header-two mb-10' : 'mb-10'}
        style={{
          borderBottom: `1px solid ${borderColor}`,
          paddingBottom: '22px',
        }}
      >
      <div>
        {eyebrow && (
          <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
            {eyebrow}
          </div>
        )}
        <h2 className="font-heading" style={{ fontSize: 'clamp(31px, 4vw, 48px)', lineHeight: 1.08, fontWeight: 400, color: titleColor }}>
          {title}
        </h2>
      </div>
      {rightText && (
        <p style={{ fontSize: '15px', color: textColor, lineHeight: 1.55 }}>
          {rightText}
        </p>
      )}
    </div>
    </>
  );
}