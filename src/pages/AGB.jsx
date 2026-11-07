const sections = [
  {
    title: '1. Allgemeines',
    clauses: [
      { num: '1.1.', text: 'Für die geschäftlichen Beziehungen zwischen Lieferer und Auftraggeber gelten ausschließlich die nachfolgenden Verkaufs- und Lieferbedingungen. Allgemeine Geschäftsbedingungen des Auftraggebers finden selbst dann keine Anwendung, wenn er im Zusammenhang mit seiner Bestellung auf diese hinweist und der Lieferer diesen nicht widerspricht. Zusagen, Nebenabreden sowie Änderungen und Ergänzungen der Allgemeinen Verkaufs- und Lieferbedingungen bedürfen der Schriftform. Dies gilt auch für die Änderung des Schriftformerfordernisses.' },
      { num: '1.2.', text: 'Angebote sind stets freibleibend und unverbindlich. Verträge kommen erst durch die schriftliche Auftragsbestätigung des Lieferers, spätestens mit Annahme der Lieferung durch den Auftraggeber zustande.' },
      { num: '1.3.', text: 'Die Mitarbeiter und sonstige Beauftragte des Lieferers sind nicht berechtigt oder bevollmächtigt, mündliche Vereinbarungen außerhalb des schriftlich niedergelegten Vertragsinhalts zu treffen. Vertragsinhalt ist deshalb nur das, was vom Lieferer schriftlich als vereinbart festgehalten und bestätigt wird. Inhalt und Umfang der geschuldeten Lieferungen und Leistungen ergeben sich mangels anderweitiger schriftlicher Vereinbarung der Partner aus der Auftragsbestätigung des Lieferers.' },
    ],
  },
  {
    title: '2. Lieferzeit',
    clauses: [
      { num: '2.1.', text: 'Die Lieferzeiten sind unverbindlich, es sei denn, sie werden ausdrücklich schriftlich als verbindlich vereinbart. Sie beginnt mit dem Tage der Absendung der Auftragsbestätigung und gilt als eingehalten, wenn die Ware bis zum Ende der Lieferzeit den Lieferer verlassen hat oder die Versendungsmöglichkeit der Ware angezeigt worden ist. Die Lieferfrist beginnt nicht vor Einigung über sämtliche Bedingungen des Geschäfts und Klarstellung aller Ausführungseinzelheiten.' },
      { num: '2.2.', text: 'Die Lieferzeit verlängert sich – auch während Lieferverzuges – angemessen beim Eintritt von unvorhersehbaren Hindernissen, die der Lieferer bei Anwendung der nach den Umständen zumutbaren Sorgfalt nicht abwenden konnte. Das gilt insbesondere bei Betriebsstörungen – sowohl im Betrieb des Lieferers, als auch in fremden Betrieben, von denen die Herstellung oder der Transport abhängig sind – verursacht etwa durch Krieg, Streik, Aussperrung, Aufruhr, Rohstoff- oder Energieverknappung, Versagen der Verkehrs- und Transportmittel, Arbeitseinschränkungen sowie bei ähnlichen Ereignissen, die den Lieferer an der Einhaltung der Lieferfrist hindern. Von solchen Hindernissen wird dem Auftraggeber unverzüglich nach bekannt werden Mitteilung gemacht, sofern das Hindernis nicht ohnehin allgemein bekannt ist.' },
      { num: '2.3.', text: 'Die Lieferfrist verlängert sich außerdem um den Zeitraum, während dessen der Auftraggeber mit seinen Verpflichtungen aus diesem oder einem anderen, mit diesem im Zusammenhang stehenden Geschäft in Verzug ist, unbeschadet darüberhinausgehender Rechte des Lieferers.' },
      { num: '2.4.', text: 'Der Auftraggeber ist zum Rücktritt vom Vertrag wegen Nichteinhaltung der Lieferfrist nur dann berechtigt, wenn die Verzögerung vom Lieferer verschuldet ist, die Lieferung fällig ist und der Auftraggeber erfolglos schriftlich eine Nachfrist von vier Wochen gesetzt hat. Nach Ablauf dieser Frist kann der Auftraggeber seine gesetzlichen Rechte mit der Maßgabe geltend machen, dass im Falle leichter Fahrlässigkeit die Ersatzpflicht des Lieferers auf die Höhe des Kaufpreises und auf solche Schäden beschränkt ist, die infolge anderweitiger Beschaffung der Ware entstehen. Weitergehende Ansprüche sind in diesem Falle ausgeschlossen.' },
      { num: '2.5.', text: 'Voraussetzung für die Einhaltung der Lieferzeit ist in jedem Fall die richtige und rechtzeitige Selbstbelieferung, die technische Mangelfreiheit sowie die Abnahme der von uns gefertigten Produkte durch das Qualitätsmanagement.' },
    ],
  },
  {
    title: '3. Preise',
    clauses: [
      { num: '3.1.', text: 'Maßgebend sind die in der Auftragsbestätigung genannten Preise.' },
      { num: '3.2.', text: 'Der Lieferer behält sich das Recht vor, die Preise angemessen zu erhöhen, wenn sich nach Vertragsabschluss die preisbildenden Faktoren wie Löhne, Frachtsätze, Energiekosten, Umsatzsteuer, Zölle, Preiserhöhungen des Lieferanten, Wechselkursschwankungen etc. erhöhen, es sei denn, die Lieferung erfolgt innerhalb von 4 Monaten nach Auftragsbestätigung.' },
      { num: '3.3.', text: 'Aufträge, für die nicht ausdrücklich feste Preise vereinbart sind, werden zu den am Tag der Lieferung gültigen Preisen abgerechnet. Fordert der Auftraggeber nicht ausdrücklich vor Beginn von Reparaturaufträgen ein schriftliches Angebot, erfolgt die Berechnung nach Aufwand zu üblichen Kalkulationswerten.' },
      { num: '3.4.', text: 'Alle nach Vertragsschluss eintretenden Veränderungen einer etwa vereinbarten fremden Währung oder des Wechselkurses zum Euro gehen zu Lasten des Auftraggebers.' },
      { num: '3.5.', text: 'Die angegebenen Preise verstehen sich für Lieferung ab Werk / Lager Köln ausschließlich Verpackungs- und Frachtkosten, zuzüglich der jeweils gesetzlich gültigen Mehrwertsteuer.' },
    ],
  },
  {
    title: '4. Zahlung',
    clauses: [
      { num: '4.1.', text: 'Zahlungen haben in Euro innerhalb von 14 Tagen nach Rechnungsdatum ohne jeden Skontoabzug zu erfolgen. Bei Überschreitung dieser Frist um mehr als 14 Tage, ist der Lieferer berechtigt, Verzugszinsen in Höhe von mindestens 9% p.a. (bei Nichtkaufleuten 5% p.a.) über dem Basiszinssatz (nach §247 BGB) des Rechnungswertes zu berechnen; dem Auftraggeber bleibt der Nachweis eines niedrigeren, dem Lieferer der Nachweis eines höheren Schadens vorbehalten.' },
      { num: '4.2.', text: 'Wechsel, Schecks und andere Anweisungspapiere nimmt der Lieferer nur nach Vereinbarung erfüllungshalber unter der Voraussetzung ihrer Diskontierbarkeit an. Diskontspesen werden vom Tage der Fälligkeit des Rechnungsbetrages an berechnet. Die Kosten der Einziehung, Bankzinsen und -spesen trägt der Auftraggeber.' },
      { num: '4.3.', text: 'Bei Neukunden und Aufträgen über € 5.000 kann eine Vorauszahlung oder eine der erbrachten Teilleistung entsprechende Abschlagszahlung vom Lieferer verlangt werden.' },
      { num: '4.4.', text: 'Mit vom Lieferer nicht anerkannten Gegenansprüchen kann der Auftraggeber nicht aufrechnen, es sei denn, dass die Gegenforderung unbestritten oder rechtskräftig zugunsten des Auftraggebers entschieden ist.' },
      { num: '4.5.', text: 'Werden dem Lieferer Umstände bekannt, die auf eine geringe Kreditwürdigkeit des Auftraggebers schließen lassen, so steht dem Lieferer auch nach Abschluss des Vertrages und über § 321 BGB hinaus das Recht zu, sofortige Sicherstellung oder Bezahlung der Forderungen zu verlangen. Kommt der Auftraggeber mit einem Teil seiner Verpflichtungen in Verzug, so ist der Lieferer berechtigt, seine gesamten Ansprüche sofort fällig zu stellen.' },
    ],
  },
  {
    title: '5. Lieferung, Versand, Fracht, Gefahrübergang',
    clauses: [
      { num: '5.1.', text: 'Für die Ausführung der Bestellung ist die schriftliche Auftragsbestätigung maßgebend. Der Lieferer behält sich technische Änderungen im Sinne von Verbesserungen ausdrücklich vor.' },
      { num: '5.2.', text: 'Auf Wunsch des Auftraggebers kann die Ware auf seine Rechnung und Gefahr versendet werden. In diesem Falle geht die Gefahr mit der Auslieferung an den Versandbeauftragten des Auftraggebers, spätestens jedoch mit Verlassen des Lieferwerks oder -lagers auf den Auftraggeber über, und zwar auch dann, wenn die Versendung nicht vom Erfüllungsort aus erfolgt. Erfolgt keine besondere Weisung, so sind Versandweg, Beförderung und Schutzmittel der Wahl des Lieferers unter Ausschluss der Haftung – außer für Vorsatz und grobe Fahrlässigkeit – überlassen.' },
      { num: '5.3.', text: 'Ist die Ware versandbereit und verzögert sich die Versendung oder die Abnahme aus Gründen, die der Lieferer nicht zu vertreten hat, so geht die Gefahr mit dem Zugang der Anzeige der Versandbereitschaft beim Auftraggeber auf diesen über, soweit er die Verzögerung zu vertreten hat. Wenn die Verzögerung dagegen von einem Dritten zu vertreten ist, haftet der Lieferer für Beschädigungen der Ware nur für Vorsatz und grobe Fahrlässigkeit.' },
      { num: '5.4.', text: 'Nimmt der Auftraggeber die Lieferung innerhalb einer angemessenen Frist nach Fertigstellungsanzeige bzw. bei avisiertem Versand nicht prompt ab, so ist der Lieferer berechtigt, die Ware auf Kosten und Gefahr des Auftraggebers entweder selbst auf Lager zu nehmen oder in ein Speditions- oder Lagerhaus eines Dritten einzulagern. Das gleiche gilt, wenn die Auslieferung oder der Versand der Ware auf Wunsch des Auftraggebers zurückgestellt wird oder infolge von Umständen, die der Auftraggeber zu vertreten hat, für längere Zeit unmöglich ist.' },
      { num: '5.5.', text: 'Nimmt der Auftraggeber infolge von Umständen, die der Lieferer nicht zu vertreten hat, die Ware nicht ab oder storniert den Auftrag ganz oder teilweise, wird eine Kosten- und Abstandszahlung in Höhe von mindestens 20 % des Restauftragswertes fällig.' },
      { num: '5.6.', text: 'Sofern nicht vom Lieferer aus für bestimmte Produkte von vornherein auf Kosten des Auftraggebers eine Transportversicherung abgeschlossen wird, schließt der Lieferer diese nur auf Wunsch und Kosten des Auftraggebers ab. In diesem Fall berechnet der Lieferer die entstehenden Kosten, übernimmt jedoch keine Haftung für die Regulierung im Versicherungsfall.' },
      { num: '5.7.', text: 'Der Lieferer ist berechtigt, Teillieferungen auf den Gesamtauftrag vorzunehmen und darüber gesondert abzurechnen.' },
      { num: '5.8.', text: 'Da der Lieferer die Ware teilweise von anderen Firmen bezieht, behält er sich das Recht vor, vom Vertrag zurückzutreten, wenn und soweit der Vorlieferant seinerseits aufgrund Gesetzes, Vertrages oder seiner Geschäftsbedingungen dem Lieferer gegenüber von der Lieferverpflichtung frei wird. Der Auftraggeber wird in diesem Fall hiervon unverzüglich benachrichtigt. Für unsere nach dem 13.08.2005 ausgelieferte Ware gilt § 10 Abs. 2 ElektroG. Danach wird die Ware vom Auftraggeber wiederverwendet, verwertet oder ordnungsgemäß entsorgt. Anderslautende Absprachen sind nur nach vorheriger schriftlicher Vereinbarung mit uns wirksam.' },
    ],
  },
  {
    title: '6. Eigentumsvorbehalt',
    clauses: [
      { num: '6.1.', text: 'Die gelieferte Ware (Vorbehaltsware) bleibt Eigentum des Lieferers. Bei Wechseln und Schecks gilt erst die Einlösung als Zahlung; bei Scheck-, Wechsel-Zahlungen (Rediskontierungs-Wechsel) bleibt unser Eigentumsvorbehalt unabhängig von der Scheckzahlung bis zur Einlösung des Wechsels bestehen.' },
      { num: '6.2.', text: 'Alle Rechte, insbesondere Eigentum, Urheberrechte und dergleichen an technischen Zeichnungen, Montageanleitungen und sonstigen Unterlagen, die dem Auftraggeber mitgeliefert oder sonst ausgehändigt werden, verbleiben beim Lieferer und werden nicht dem Auftraggeber übereignet. Der Auftraggeber darf diese Unterlagen nicht an dritte Personen weitergeben.' },
      { num: '6.3.', text: 'Die Be- oder Verarbeitung der gelieferten Vorbehaltsware erfolgt stets im Auftrag des Lieferers, ohne dass ihm Verbindlichkeiten hieraus entstehen. Wird die vom Lieferer gelieferte Ware mit anderen Gegenständen vermischt, verbunden oder verarbeitet, so tritt der Auftraggeber bereits jetzt seine Eigentums- bzw. Miteigentumsrechte an dem vermischten Bestand oder den neuen Gegenständen an den Lieferer ab. Erlischt das Eigentum des Lieferers durch Verbindung, Vermischung oder Verarbeitung, so überträgt der Auftraggeber dem Lieferer bereits jetzt die ihm zustehenden Eigentums- bzw. Anwartschaftsrechte an dem neuen Bestand oder der neuen Sache im Verhältnis des Rechnungswertes der Vorbehaltsware und verwahrt diese unentgeltlich für den Auftraggeber. Die so entstehenden Miteigentumsrechte gelten als Vorbehaltsware im Sinne von Punkt 6.1.' },
      { num: '6.4.', text: 'Der Auftraggeber ist zur Wiederveräußerung der Vorbehaltsware im normalen Geschäftsbetrieb, nicht aber zu deren Verpfändung oder Sicherheitsübereignung, berechtigt und ermächtigt, wenn sichergestellt ist, dass die Forderung aus dem Weiterverkauf auf den Lieferer übergeht. Zu diesem Zweck tritt der Auftraggeber bereits jetzt die ihm auf den Weiterverkauf der Ware zustehende Verkaufspreisforderung mit allen Nebenrechten an den Lieferer ab. Der Lieferer nimmt diese Abtretung hiermit an. Dies gilt auch für Weiterveräußerungen von vermischten, verbundenen oder verarbeiteten Waren im Sinne von Punkt 6.3.' },
      { num: '6.5.', text: 'Ungeachtet der Abtretung, die dem Drittabnehmer zunächst nicht mitgeteilt werden soll, ist der Auftraggeber zur Einziehung der abgetretenen Forderungen berechtigt, solange er seinen Verpflichtungen dem Lieferer gegenüber nachkommt und nicht in Vermögensverfall gerät. Der Lieferer hat jedoch das Recht, die Ermächtigung zur Einziehung der Forderungen zu widerrufen und die Forderungen einzuziehen. Auf Verlangen hat der Auftraggeber dem Lieferer eine Einzelabtretungserklärung zu erteilen, die Drittabnehmer anzugeben und diesen die Abtretung anzuzeigen. Darüber hinaus hat der Auftraggeber dem Lieferer alle für die Geltendmachung der abgetretenen Forderung erforderlichen Auskünfte zu erteilen.' },
      { num: '6.6.', text: 'Zu einer nochmaligen Übereignung, Verpfändung oder Abtretung der Vorbehaltsrechte des Lieferers an Dritte ist der Auftraggeber nicht befugt. Von einer erfolgten oder bevorstehenden Pfändung der Vorbehaltsrechte durch Dritte wird der Auftraggeber den Lieferer unverzüglich benachrichtigen und das Vorbehaltsrecht des Lieferers als solches kenntlich machen. Die dem Lieferer eventuell entstehenden Interventionskosten trägt der Auftraggeber.' },
    ],
  },
  {
    title: '7. Gewährleistung und Schadensersatz',
    clauses: [
      { num: '7.1.', text: 'Ist die gelieferte Ware mangelhaft, so hat der Auftraggeber, der Kaufmann ist, die Ware zu untersuchen und, wenn sich ein Mangel zeigt, diesen unverzüglich dem Lieferer anzuzeigen. Dies gilt auch bei Reparaturen.' },
      { num: '7.2.', text: 'Bei rechtzeitiger Mängelrüge leistet der Lieferer zunächst Nacherfüllung entsprechend den gesetzlichen Vorschriften. Verweigert der Lieferer die Nacherfüllung insgesamt oder schlägt diese fehl, so steht dem Auftraggeber das Recht zur Minderung oder zum Rücktritt vom Vertrag zu.' },
      { num: '7.3.', text: 'Weitergehende Gewährleistungsansprüche sowie Schadensersatzansprüche jeglicher Art einschließlich Ansprüchen auf Ersatz von Folgeschäden und -kosten sind ausgeschlossen. Der Lieferer haftet deshalb nicht für Schäden, die nicht am Liefergegenstand selbst entstanden sind; insbesondere wird keine Haftung für entgangenen Gewinn oder sonstige Vermögensschäden des Auftraggebers, beispielsweise auf Vertragsstrafen, Betriebsausfall, Arbeitslöhne oder sonstige Mangelfolgeschäden übernommen. Vorstehende Haftungsfreizeichnung gilt nicht, soweit die Schadensursache auf Vorsatz oder grobe Fahrlässigkeit beruht.' },
      { num: '7.4.', text: 'Die Gewährleistungsfrist beträgt für Kaufleute 12 Monate, gerechnet ab Gefahrübergang. Diese Frist ist eine Verjährungsfrist und gilt auch für Schadensersatzansprüche, soweit sie nicht auf unerlaubte Handlungen beruhen. Die Gewährleistung gilt nicht für Mängel, die dem Kunden beim Kauf bekannt waren (§ 442 BGB).' },
    ],
  },
  {
    title: '8. Rechtsbeziehungen, Erfüllungsort und Gerichtsstand',
    clauses: [
      { num: '8.1.', text: 'Die Vertragsbeziehungen unterliegen ausschließlich dem Recht der Bundesrepublik Deutschland. Die Anwendung der Internationalen Kaufrechtsgesetze (IKG) ist ausgeschlossen.' },
      { num: '8.2.', text: 'Erfüllungsort ist Köln, es sei denn, dass der Lieferer einen anderen Erfüllungsort ausdrücklich bestimmt.' },
      { num: '8.3.', text: 'Ist der Auftraggeber Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen, so ist der Gerichtsstand Köln. Im Übrigen ist Köln Gerichtsstand für den Fall, dass der Auftraggeber nach Vertragsschluss seinen Wohnsitz oder gewöhnlichen Aufenthaltsort aus dem Gebiet der Bundesrepublik Deutschland verlegt oder sein Wohnsitz oder gewöhnlicher Aufenthaltsort zum Zeitpunkt der Klageerhebung nicht bekannt ist.' },
    ],
  },
  {
    title: '9. Rechtsbeziehung mit Verbrauchern',
    clauses: [
      { num: '9.1.', text: 'Die geschäftlichen Beziehungen zwischen Lieferer und Verbraucher gemäß §13 BGB richten sich nach den Vorschriften des §312b BGB.' },
      { num: '9.2.', text: 'Eventuelle Beanstandungen auf Vollständigkeit und Transportschäden können nur innerhalb von 24 Stunden nach Erhalt der Ware geltend gemacht werden.' },
      { num: '9.3.', text: 'Der Verbraucher kann innerhalb von 2 Wochen ab der Bestellung den Widerruf erklären. Der Widerruf hat entweder in Textform oder durch Rücksendung der Sache innerhalb der Frist zu erfolgen. Zur Fristwahrung genügt die rechtzeitige Absendung. Es gilt §357 BGB.' },
      { num: '9.4.', text: 'Im Fall des Rücktritts bzw. Widerrufs gemäß Ziffer 9.2. ist der Verbraucher zur Rücksendung verpflichtet, wobei der Lieferer die Gefahr der Rücksendung trägt. Der Verbraucher trägt die Kosten der Rücksendung bis zu einem Betrag in Höhe von 40,00 €, es sei denn, die gelieferte Ware entspricht nicht der bestellten.' },
      { num: '9.5.', text: 'Auch bei einer bestimmungsgemäßen Ingebrauchnahme der Sache vor Widerruf bzw. Rücktritt hat der Verbraucher Wertersatz zu leisten, es sei denn die Wertminderung tritt ausschließlich durch die Prüfung der Sache auf.' },
    ],
  },
  {
    title: '10. Schlussbestimmungen',
    clauses: [
      { num: '10.1.', text: 'Sollten einzelne Bestimmungen dieser Bedingungen unwirksam sein, so wird hierdurch die Wirksamkeit der übrigen Bestimmung nicht berührt. Die unwirksame Bestimmung soll durch diejenige gesetzliche Bestimmung ersetzt werden, die dem Willen der vertragsschließenden Parteien am nächsten kommt.' },
      { num: '10.2.', text: 'Gemäß § 26 Bundesdatenschutzgesetz wird der Auftragnehmer hiermit davon in Kenntnis gesetzt, dass der Lieferer seine Daten EDV-mäßig speichert und verwendet.' },
      { num: '10.3.', text: 'Gemäß §7 UWG kann der Auftraggeber der Verwendung jederzeit widersprechen, ohne dass hierfür andere als die Übermittlungskosten entstehen.' },
    ],
  },
];

export default function AGB() {
  return (
    <div style={{ background: '#f5f1e8' }}>
      <div className="max-w-[800px] mx-auto" style={{ padding: '78px 28px' }}>
        <div style={{ color: '#c7a24a', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.18em', marginBottom: '14px' }}>
          Rechtliches
        </div>
        <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#202020', marginBottom: '12px' }}>
          Allgemeine Geschäftsbedingungen
        </h1>
        <p style={{ fontSize: '15px', color: '#686868', lineHeight: 1.55, marginBottom: '36px' }}>
          Stand: Juli 2026
        </p>

        <div className="flex flex-col" style={{ gap: '24px' }}>
          {sections.map(section => (
            <div key={section.title} style={{ background: '#ffffff', border: '1px solid #ddd3bf', padding: '24px' }}>
              <h2 className="font-heading" style={{ fontSize: '19px', fontWeight: 400, color: '#202020', marginBottom: '14px' }}>
                {section.title}
              </h2>
              <div className="flex flex-col" style={{ gap: '12px' }}>
                {section.clauses.map(clause => (
                  <p key={clause.num} style={{ fontSize: '14px', color: '#686868', lineHeight: 1.65 }}>
                    <span style={{ color: '#c7a24a' }}>{clause.num}</span>{' '}{clause.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}