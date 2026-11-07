import { openCookieSettings } from '@/lib/cookieConsent';

const sections = [
  {
    title: 'Verantwortlicher',
    text: 'GL Service GmbH, Dieselstraße 8, 50859 Köln, Deutschland. E-Mail: info@chateau-saxophone.de. Geschäftsführer: Herr Gang Liu.',
  },
  {
    title: 'Erhebung und Verarbeitung personenbezogener Daten',
    text: 'Personenbezogene Daten werden nur erhoben, wenn Sie uns diese im Rahmen einer Anfrage oder Kontaktaufnahme freiwillig mitteilen. Die Verarbeitung erfolgt ausschließlich zur Bearbeitung Ihrer Anfrage auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.',
  },
  {
    title: 'Kontakt per E-Mail',
    text: 'Wenn Sie uns per E-Mail kontaktieren, werden Ihre E-Mail-Adresse, ggf. Ihr Name und der Nachrichteninhalt zur Bearbeitung der Anfrage und für mögliche Rückfragen gespeichert. Diese Daten werden ohne Ihre ausdrückliche Einwilligung nicht an Dritte weitergegeben.',
  },
  {
    title: 'Server-Logfiles',
    text: 'Der Hostinganbieter erhebt und speichert automatisch Informationen in Server-Logfiles, die Ihr Browser übermittelt: Browsertyp und Browserversion, Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse. Diese Daten sind nicht anderen Datenquellen zuordenbar.',
  },
  {
    title: 'Hosting',
    text: 'Diese Website wird auf Servern eines externen Dienstleisters (Hoster) betrieben. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Dies kann insbesondere IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten sowie sonstige über die Website übermittelte Daten umfassen.',
  },
  {
    title: 'Cookies und lokale Speicherung',
    text: 'Diese Website verwendet Cookies bzw. vergleichbare Speichertechnologien (z. B. Local Storage). Wir unterscheiden zwischen technisch notwendigen Cookies und einwilligungspflichtigen Cookies. Technisch notwendige Cookies sind für den Betrieb der Website erforderlich; hierzu zählt insbesondere die Speicherung Ihrer Auswahl im Cookie-Banner, damit dieser nicht bei jedem Seitenaufruf erneut angezeigt wird. Für den Einsatz technisch notwendiger Cookies ist gemäß § 25 Abs. 2 Nr. 2 TTDSG keine Einwilligung erforderlich. Alle übrigen Cookies (Statistik/Analyse und Marketing) werden ausschließlich auf Grundlage Ihrer Einwilligung gemäß § 25 Abs. 1 TTDSG in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO gesetzt.',
  },
  {
    title: 'Einwilligung über das Cookie-Banner',
    text: 'Beim ersten Aufruf der Website werden Sie über ein Cookie-Banner um Ihre Einwilligung gebeten. Sie können dort alle Cookies akzeptieren, nur technisch notwendige Cookies zulassen oder Ihre Auswahl nach Kategorien (Statistik/Analyse, Marketing) selbst festlegen. Einwilligungspflichtige Cookies werden erst gesetzt, nachdem Sie eingewilligt haben. Ihre Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen oder geändert werden, ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird. Den Widerruf können Sie über die Schaltfläche „Cookie-Einstellungen öffnen" am Ende dieser Erklärung vornehmen.',
  },
  {
    title: 'Statistik / Analyse',
    text: 'Sofern Sie einwilligen, setzen wir Analyse-Technologien ein, um die Nutzung unserer Website auszuwerten und unser Angebot zu verbessern. Dabei werden Informationen über Ihr Nutzungsverhalten (z. B. aufgerufene Seiten, Verweildauer, ungefähre Herkunft) erfasst und ausgewertet. Hierzu zählt auch die im folgenden Abschnitt beschriebene Sitzungsaufzeichnung (Session Recording). Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß § 25 Abs. 1 TTDSG in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO. Soweit hierbei eine Übermittlung von Daten an Drittanbieter oder in Drittländer erfolgt, werden Sie hierüber gesondert informiert.',
  },
  {
    title: 'Marketing',
    text: 'Sofern Sie einwilligen, setzen wir Marketing-Cookies ein, um Ihnen für Sie relevante Inhalte und Werbung anzuzeigen sowie die Wirksamkeit unserer Kampagnen zu messen. Dabei können auch Dienste von Drittanbietern eingebunden werden, die Cookies setzen und Nutzungsdaten verarbeiten. Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Soweit hierbei eine Übermittlung von Daten an Drittanbieter oder in Drittländer erfolgt, werden Sie hierüber gesondert informiert.',
  },
  {
    title: 'Rechtsgrundlagen der Verarbeitung',
    text: 'Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines Vertrags oder vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen des Verantwortlichen) sowie – sofern eine Einwilligung vorliegt – Art. 6 Abs. 1 lit. a DSGVO.',
  },
  {
    title: 'Speicherdauer',
    text: 'Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungsfristen (z. B. steuer- oder handelsrechtliche Fristen) dies verlangen. Nach Wegfall des Zwecks oder Ablauf dieser Fristen werden die Daten routinemäßig gelöscht.',
  },
  {
    title: 'Rechte der betroffenen Personen',
    text: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten sowie das Recht auf Berichtigung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch und Löschung. Wenden Sie sich hierzu an: info@chateau-saxophone.de. Darüber hinaus steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.',
  },
  {
    title: 'Widerspruchsrecht',
    text: 'Soweit die Verarbeitung Ihrer personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen) erfolgt, haben Sie das Recht, jederzeit Widerspruch einzulegen. Im Fall des Widerspruchs verarbeiten wir die betreffenden Daten nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen.',
  },
  {
    title: 'Datensicherheit',
    text: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.',
  },
  {
    title: 'Aktualität dieser Erklärung',
    text: 'Diese Datenschutzerklärung hat den Stand Juni 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.',
  },
];

export default function Datenschutz() {
  return (
    <div style={{ background: '#f5f1e8' }}>
      <div className="max-w-[800px] mx-auto" style={{ padding: '78px 28px' }}>
        <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
          Rechtliches
        </div>
        <h1 className="font-heading" style={{ fontSize: 'clamp(30px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#202020', marginBottom: '12px', overflowWrap: 'normal', wordBreak: 'keep-all' }}>
          Datenschutzerklärung
        </h1>
        <p style={{ fontSize: '15px', color: '#686868', lineHeight: 1.55, marginBottom: '40px' }}>
          Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten gemäß DSGVO. Stand: Juni 2026.
        </p>

        <div className="flex flex-col" style={{ gap: '28px' }}>
          {sections.map(s => (
            <div key={s.title} style={{ background: '#ffffff', border: '1px solid #ddd3bf', padding: '24px' }}>
              <h2 className="font-heading" style={{ fontSize: '20px', fontWeight: 400, color: '#202020', marginBottom: '10px' }}>
                {s.title}
              </h2>
              <p style={{ fontSize: '14px', color: '#686868', lineHeight: 1.65 }}>
                {s.text}
              </p>
            </div>
          ))}

          <div style={{ background: '#ffffff', border: '1px solid #ddd3bf', padding: '24px' }}>
            <h2 className="font-heading" style={{ fontSize: '20px', fontWeight: 400, color: '#202020', marginBottom: '10px' }}>
              Cookie-Einstellungen
            </h2>
            <p style={{ fontSize: '14px', color: '#686868', lineHeight: 1.65, marginBottom: '16px' }}>
              Über die folgende Schaltfläche können Sie den Cookie-Hinweis erneut aufrufen und Ihre Auswahl ändern.
            </p>
            <button
              onClick={openCookieSettings}
              style={{
                padding: '11px 20px', minHeight: '44px', cursor: 'pointer',
                fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em',
                fontFamily: 'var(--font-body)', background: '#c7a24a',
                border: '1px solid #c7a24a', color: '#ffffff',
              }}
            >
              Cookie-Einstellungen öffnen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}