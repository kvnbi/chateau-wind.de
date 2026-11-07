export default function Impressum() {
  const sections = [
    {
      label: 'Anbieter',
      content: 'GL Service GmbH',
    },
    {
      label: 'Anschrift',
      content: <>Dieselstraße 8<br />50859 Köln<br />Deutschland</>,
    },
    {
      label: 'Geschäftsführer',
      content: 'Herr Gang Liu',
    },
    {
      label: 'Kontakt',
      content: <>E-Mail: <a href="mailto:info@chateau-saxophone.de" style={{ color: '#c7a24a' }}>info@chateau-saxophone.de</a></>,
    },
    {
      label: 'Handelsregister',
      content: 'Köln, HRB 54968',
    },
    {
      label: 'USt.-ID-Nr.',
      content: 'DE 814284818',
    },
    {
      label: 'Inhaltlich Verantwortlicher gemäß § 6 MDStV',
      content: 'Herr Gang Liu',
    },
  ];

  const legalSections = [
    {
      title: 'Haftung für Inhalte',
      text: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
    },
    {
      title: 'Haftung für Links',
      text: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    },
    {
      title: 'Urheberrecht',
      text: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    },
    {
      title: 'Verbraucherschlichtung',
      text: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: http://ec.europa.eu/consumers/odr/. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    },
  ];

  const blockStyle = { fontSize: '15px', color: '#202020', lineHeight: 1.6 };
  const labelStyle = { fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c7a24a', marginBottom: '6px' };

  return (
    <div style={{ background: '#f5f1e8' }}>
      <div className="max-w-[800px] mx-auto" style={{ padding: '78px 28px' }}>
        <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
          Rechtliches
        </div>
        <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#202020', marginBottom: '12px' }}>
          Impressum
        </h1>
        <p style={{ fontSize: '15px', color: '#686868', lineHeight: 1.55, marginBottom: '36px' }}>
          Angaben gemäß § 5 Telemediengesetz (TMG).
        </p>

        <div style={{ background: '#ffffff', border: '1px solid #ddd3bf', padding: '32px', marginBottom: '36px' }}>
          <div style={{ display: 'grid', gap: '22px', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {sections.map(s => (
              <div key={s.label}>
                <div style={labelStyle}>{s.label}</div>
                <p style={blockStyle}>{s.content}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-heading" style={{ fontSize: '22px', fontWeight: 400, color: '#202020', marginBottom: '22px' }}>
          Haftungsausschluss
        </h2>
        <div className="flex flex-col" style={{ gap: '24px' }}>
          {legalSections.map(s => (
            <div key={s.title} style={{ background: '#ffffff', border: '1px solid #ddd3bf', padding: '24px' }}>
              <h3 className="font-heading" style={{ fontSize: '17px', fontWeight: 400, color: '#202020', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', color: '#686868', lineHeight: 1.65 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}