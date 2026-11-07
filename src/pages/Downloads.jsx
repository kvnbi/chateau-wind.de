import { FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const downloads = [
  {
    name: 'Produktbroschüre',
    desc: 'Broschüre mit einer Übersicht aller aktuellen Château Saxophone der Versailles und Chenonceau Serien. Geeignet für Händler, Musikschulen und interessierte Spieler.',
    format: 'PDF',
    href: '/files/684294fb5_ChateauFlagshipsBrochure.pdf',
    download: 'Chateau_Flagship_Broschüre.pdf',
  },
  {
    name: 'Preisliste',
    desc: 'Aktuelle Preisliste der verfügbaren Modelle. Bitte nehmen Sie bei Fragen zu Händlerkonditionen direkt Kontakt mit uns auf.',
    format: 'PDF',
    href: '/files/7191a960c_Chateau_Flagship_Preisliste.pdf',
    download: 'Chateau_Flagship_Preisliste.pdf',
  },
];

function DownloadRow({ item }) {
  const handleDownload = async (e) => {
    if (!item.download) return;
    e.preventDefault();
    const res = await fetch(item.href);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = item.download;
    a.click();
    URL.revokeObjectURL(url);
  };

  const content = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        background: '#ffffff',
        border: '1px solid #ddd3bf',
        padding: '24px 26px',
        transition: 'border-color 0.15s',
        textDecoration: 'none',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = '#c7a24a')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = '#ddd3bf')}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', flex: 1 }}>
        <div style={{
          width: '44px', height: '44px',
          background: '#f5f1e8', border: '1px solid #ddd3bf',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <FileText size={18} color="#c7a24a" />
        </div>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 500, color: '#202020', fontFamily: 'var(--font-body)' }}>
            {item.name}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        <span style={{
          fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em',
          color: '#c7a24a', border: '1px solid rgba(199,162,74,0.4)', padding: '3px 8px',
        }}>
          {item.format}
        </span>
        <Download size={16} color="#888" />
      </div>
    </div>
  );

  if (item.isInternal) {
    return <Link to={item.href} style={{ textDecoration: 'none', display: 'block' }}>{content}</Link>;
  }

  return (
    <a href={item.href} onClick={item.download ? handleDownload : undefined} target={item.download ? undefined : '_blank'} rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
      {content}
    </a>
  );
}

export default function Downloads() {
  return (
    <div style={{ background: '#f5f1e8' }}>
      <section style={{ background: '#252525', padding: 'clamp(52px,8vw,78px) 24px clamp(36px,5vw,52px)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
            Downloads
          </div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff', marginBottom: '20px', maxWidth: '700px' }}>
            Unterlagen
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,17px)', color: '#c0c0c0', lineHeight: 1.65, maxWidth: '680px' }}>
            Hier stehen Ihnen die Produktbroschüre sowie die Preisliste zum Download bereit. Für Händlerkonditionen und individuelle Anfragen wenden Sie sich bitte direkt an uns.
          </p>
        </div>
      </section>
      <style>{`
        .downloads-wrap { padding: 60px 28px 80px; }
        @media (max-width: 480px) { .downloads-wrap { padding: 44px 18px 60px; } }
      `}</style>
      <div className="downloads-wrap">
        <div className="max-w-[780px] mx-auto">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {downloads.map(item => (
              <DownloadRow key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}