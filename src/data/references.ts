export interface ReferenceItem {
  slug: string;
  title: string;
  client: string;
  category: 'Schleppbetrieb' | 'Wasserbau' | 'Bergung' | 'Hafenbau';
  year: number;
  image: string;
  excerpt: string;
  description: string;
}

export const referenceData: ReferenceItem[] = [
  {
    slug: 'hafenerweiterung-sued',
    title: 'Hafenerweiterung Süd',
    client: 'Hamburg Port Authority',
    category: 'Hafenbau',
    year: 2023,
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-ref1',
    excerpt: 'Erweiterung des südlichen Hafenbereichs inkl. Baggerung und neue Anlegestellen.',
    description:
      'Planung und Ausführung einer komplexen Hafenerweiterung mit Schlepp-Assistenz, Unterhaltungsbaggerung und dem Bau neuer Anlegestellen. Enge Koordination mit Behörden und Lotsen, Umsetzung unter laufendem Betrieb.',
  },
  {
    slug: 'bergung-ms-nordlicht',
    title: 'Bergung MS Nordlicht',
    client: 'Nordlicht Reederei GmbH',
    category: 'Bergung',
    year: 2022,
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-ref2',
    excerpt: 'Havarierteinheit gesichert, Ladung geborgen, Umweltauflagen erfüllt.',
    description:
      'Schnelle Havarie-Assistenz, Absicherung der Unfallstelle, Unterwasserkontrolle durch zertifiziertes Taucherteam. Koordiniertes Heben und Abschleppen, Einhaltung aller Umwelt- und Sicherheitsauflagen.',
  },
  {
    slug: 'uferbefestigung-elbstrand',
    title: 'Uferbefestigung Elbstrand',
    client: 'Stadt Hamburg',
    category: 'Wasserbau',
    year: 2021,
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-ref3',
    excerpt: 'Nachhaltige Ufersicherung mit Renaturierung und Erosionsschutz.',
    description:
      'Planung, Materiallogistik und Ausführung einer schonenden Uferbefestigung am Elbstrand. Kombination aus Spundwänden, Steinschüttung und Renaturierungsmaßnahmen.',
  },
  {
    slug: 'schwertransport-kaimauer',
    title: 'Schwertransport Kaimauer',
    client: 'Industriepark Nord',
    category: 'Schleppbetrieb',
    year: 2024,
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-heavy',
    excerpt: 'Sondertransport von Großkomponenten per Ponton und Schubboot.',
    description:
      'Projektierung und Durchführung eines Schwertransports per Wasserstraße. Präzise Manöver mit Schubboot und Ponton, tideabhängige An- und Ablegemanöver an neuer Kaimauer.',
  },
  {
    slug: 'spundwand-sanierung-ostkai',
    title: 'Spundwand-Sanierung Ostkai',
    client: 'Terminalgesellschaft Ostkai',
    category: 'Hafenbau',
    year: 2020,
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-quay',
    excerpt: 'Sanierung mit Vibrationsrammen bei laufendem Terminalbetrieb.',
    description:
      'Demontage beschädigter Elemente, Einbringen neuer Spundbohlen per Vibrationsramme, Anodenmontage und Betonarbeiten. Lärm- und Erschütterungsmonitoring inklusive.',
  },
  {
    slug: 'wracksichtung-und-heben',
    title: 'Wracksichtung und Heben',
    client: 'Wasser- und Schifffahrtsamt',
    category: 'Bergung',
    year: 2019,
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-salvage2',
    excerpt: 'Unterwasserinspektion, Sicherung und kontrolliertes Heben.',
    description:
      'Erkundung mittels Sonar und Taucherteam, Setzen von Hebesäcken und kontrolliertes Heben in Abstimmung mit der Revierzentrale. Freigabe der Fahrrinne nach Abschluss.',
  },
];

export const referenceCategories = Array.from(new Set(referenceData.map((r) => r.category)));

