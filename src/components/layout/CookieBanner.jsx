import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, saveConsent, OPEN_SETTINGS_EVENT } from '@/lib/cookieConsent';

const CATEGORIES = [
  {
    key: 'necessary',
    title: 'Technisch notwendig',
    desc: 'Erforderlich für den Betrieb der Website, z. B. zur Speicherung Ihrer Cookie-Auswahl. Diese Cookies können nicht deaktiviert werden.',
    locked: true,
  },
  {
    key: 'analytics',
    title: 'Statistik / Analyse',
    desc: 'Helfen uns zu verstehen, wie Besucher die Website nutzen. Die Daten werden ausgewertet, um unser Angebot zu verbessern.',
    locked: false,
  },
  {
    key: 'marketing',
    title: 'Marketing',
    desc: 'Werden verwendet, um Besuchern relevante Werbung anzuzeigen und die Wirksamkeit von Kampagnen zu messen.',
    locked: false,
  },
];

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    try {
      return !getConsent();
    } catch {
      return true;
    }
  });
  const [showDetails, setShowDetails] = useState(false);
  const [selection, setSelection] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const reopen = () => {
      const current = getConsent();
      if (current) setSelection({ analytics: current.analytics, marketing: current.marketing });
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  const close = () => { setVisible(false); setShowDetails(false); };

  const acceptAll = () => { saveConsent({ analytics: true, marketing: true }); close(); };
  const rejectAll = () => { saveConsent({ analytics: false, marketing: false }); close(); };
  const saveSelection = () => { saveConsent(selection); close(); };

  const toggle = (key) => setSelection((s) => ({ ...s, [key]: !s[key] }));

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
      style={{
        position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 1100,
        background: '#252525', borderTop: '1px solid rgba(199,162,74,0.45)',
        boxShadow: '0 -8px 30px rgba(0,0,0,0.35)',
        maxHeight: '85vh', display: 'flex', flexDirection: 'column',
      }}
    >
      <style>{`
        .ck-wrap { max-width: 1180px; margin: 0 auto; padding: 22px 28px; overflow-y: auto; -webkit-overflow-scrolling: touch; }
        .ck-top { display: flex; align-items: center; gap: 28px; }
        .ck-text { font-size: 13px; color: #d4d4d4; line-height: 1.6; margin: 0; flex: 1 1 360px; min-width: 0; }
        .ck-actions { display: flex; gap: 10px; flex: 0 0 auto; }
        .ck-btn { padding: 11px 18px; min-height: 44px; cursor: pointer; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-family: var(--font-body); white-space: nowrap; border-radius: 0; }
        .ck-btn-primary { background: #c7a24a; border: 1px solid #c7a24a; color: #ffffff; }
        .ck-btn-ghost { background: transparent; border: 1px solid rgba(229,214,165,0.7); color: #e5d6a5; }
        .ck-cats { margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 18px; display: flex; flex-direction: column; gap: 12px; }
        .ck-cat { display: flex; gap: 14px; align-items: flex-start; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); padding: 14px 16px; }

        @media (max-width: 1024px) {
          .ck-top { display: block; }
          .ck-text { margin-bottom: 18px; }
          .ck-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
          .ck-actions > .ck-btn { width: 100%; }
          .ck-actions > .ck-btn-primary { grid-column: 1 / -1; order: -1; }
        }
        @media (max-width: 520px) {
          .ck-wrap { padding: 18px 18px 20px; }
          .ck-actions { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ck-wrap">
        <div className="ck-top">
          <p className="ck-text">
            Wir verwenden Cookies und vergleichbare Technologien. Technisch notwendige Cookies sind für den
            Betrieb der Website erforderlich. Zusätzlich möchten wir, nur mit Ihrer Einwilligung, Cookies für
            Statistik/Analyse (einschließlich Sitzungsaufzeichnung) und Marketing einsetzen. Ihre Einwilligung
            ist freiwillig und jederzeit mit Wirkung für die Zukunft widerrufbar. Weitere Informationen finden Sie
            in unserer{' '}
            <Link to="/datenschutz" style={{ color: '#e5d6a5', textDecoration: 'underline' }}>Datenschutzerklärung</Link>.
          </p>

          <div className="ck-actions">
            <button className="ck-btn ck-btn-ghost" onClick={() => setShowDetails((v) => !v)}>
              Einstellungen
            </button>
            <button className="ck-btn ck-btn-ghost" onClick={rejectAll}>
              Nur notwendige
            </button>
            <button className="ck-btn ck-btn-primary" onClick={acceptAll}>
              Alle akzeptieren
            </button>
          </div>
        </div>

        {showDetails && (
          <div className="ck-cats">
            {CATEGORIES.map((cat) => {
              const checked = cat.locked ? true : selection[cat.key];
              return (
                <label
                  key={cat.key}
                  className="ck-cat"
                  style={{ cursor: cat.locked ? 'default' : 'pointer' }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={cat.locked}
                    onChange={() => !cat.locked && toggle(cat.key)}
                    style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: '#c7a24a', flexShrink: 0 }}
                  />
                  <span>
                    <span style={{ display: 'block', fontSize: '13px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                      {cat.title}{cat.locked ? ' (immer aktiv)' : ''}
                    </span>
                    <span style={{ display: 'block', fontSize: '12.5px', color: '#b8b8b8', lineHeight: 1.55 }}>
                      {cat.desc}
                    </span>
                  </span>
                </label>
              );
            })}

            <div className="ck-actions" style={{ marginTop: '4px' }}>
              <button className="ck-btn ck-btn-primary" onClick={saveSelection}>
                Auswahl speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}