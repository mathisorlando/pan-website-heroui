export interface EquipmentItem {
  slug: string;
  title: string;
  category: string;
  description?: string;
  specs?: string[];
}

export const equipmentData: EquipmentItem[] = [
  { slug: 'kran-15t', title: 'Kran 15 t', category: 'Hebe- & Greiftechnik', specs: ['Ausleger 18 m', 'Funkfernsteuerung'] },
  { slug: 'greifer-2m3', title: 'Greifer 2 m³', category: 'Hebe- & Greiftechnik', specs: ['Hydraulisch', 'Wechseladapter'] },
  { slug: 'rtk-gps', title: 'RTK-GPS', category: 'Vermessung & Navigation', specs: ['Zentimetergenau', 'Basis/ Rover'] },
  { slug: 'echolot', title: 'Echolot', category: 'Vermessung & Navigation', specs: ['Singlebeam', 'Datenerfassung'] },
  { slug: 'taucher-kompressor', title: 'Kompressor Taucher', category: 'Taucher & Bergeausrüstung', specs: ['2-stufig', 'Filtereinheit'] },
  { slug: 'hebesaetze', title: 'Hebesäcke', category: 'Taucher & Bergeausrüstung', specs: ['Bis 10 t', 'Sicherheitsventile'] },
  { slug: 'vibrator', title: 'Spundwandvibrator', category: 'Bau- & Ufertechnik', specs: ['Hochfrequent', 'Dämpfung'] },
  { slug: 'rammtechnik', title: 'Rammtechnik', category: 'Bau- & Ufertechnik', specs: ['Diesel/ Hydraulik', 'Adapter'] },
];

export const equipmentCategories = Array.from(new Set(equipmentData.map((e) => e.category)));

