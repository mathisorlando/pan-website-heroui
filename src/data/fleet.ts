export interface FleetItem {
  slug: string;
  name: string;
  type: string;
  image: string;
  gallery?: string[];
  specs: string[];
  description: string;
  tags: string[];
}

export const fleetData: FleetItem[] = [
  {
    slug: 'ms-hamburg',
    name: 'MS Hamburg',
    type: 'Schlepperschiff',
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-ship1',
    gallery: [
      'https://img.heroui.chat/image/places?w=900&h=600&u=pan-hamburg-ship1-a',
      'https://img.heroui.chat/image/places?w=900&h=600&u=pan-hamburg-ship1-b',
    ],
    specs: ['Leistung: 2.400 PS', 'Pfahlzug: 35 t', 'Baujahr: 2015', 'Besatzung: 6'],
    description:
      'Leistungsstarker Hafenschlepper für Assistenz- und Manövrierarbeiten mit moderner Navigation und hoher Sicherheit.',
    tags: ['schlepper', 'harbor', 'high-power'],
  },
  {
    slug: 'ms-elbe',
    name: 'MS Elbe',
    type: 'Mehrzweckschiff',
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-ship2',
    specs: ['Leistung: 1.800 PS', 'Länge: 32 m', 'Kran: 15 t', 'Bugstrahl: Ja'],
    description:
      'Vielseitiges Arbeitsschiff für Transport, Montage und Unterstützung im Wasserbau – robust und flexibel.',
    tags: ['workboat', 'crane', 'transport'],
  },
  {
    slug: 'bagger-nord',
    name: 'Bagger Nord',
    type: 'Schwimmbagger',
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-ship3',
    specs: ['Baggertiefe: 15 m', 'Kapazität: 250 m³/h', 'Baujahr: 2018', 'GPS-gestützt'],
    description:
      'Moderner Schwimmbagger für Unterhaltungsbaggerungen und präzise Sedimentarbeiten mit RTK-gestützter Vermessung.',
    tags: ['dredger', 'wasserbau', 'survey'],
  },
  {
    slug: 'ms-hanse',
    name: 'MS Hanse',
    type: 'Schubboot',
    image: 'https://img.heroui.chat/image/places?w=1200&h=800&u=pan-hamburg-ship4',
    specs: ['Leistung: 1.400 PS', 'Schubleistung: 1.200 t', 'Autopilot: Ja'],
    description:
      'Effizientes Schubboot für flexible Transportaufgaben und Logistiklösungen im Hafen und auf der Elbe.',
    tags: ['pushboat', 'logistics'],
  },
];

export const allTypes = Array.from(new Set(fleetData.map((f) => f.type)));
export const allTags = Array.from(new Set(fleetData.flatMap((f) => f.tags))).sort();

