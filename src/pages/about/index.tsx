import React from 'react';
import { Card, CardBody, Button, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Intro section */}
      <section className="relative bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Über uns</h1>
            <p className="text-white/80 text-lg">
              Seit Jahrzehnten steht PAN Hamburg für zuverlässige Leistungen im Schleppbetrieb und Wasserbau.
              Unser Team verbindet maritime Tradition mit moderner Technik – für sichere und nachhaltige Projekte.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="/services" color="primary" variant="solid" startContent={<Icon icon="lucide:waves" />}>Unsere Leistungen</Button>
              <Button as={Link} to="/contact" color="accent" variant="flat" startContent={<Icon icon="lucide:message-square" />}>Kontakt aufnehmen</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">40+</p>
              <p className="text-foreground-600">Jahre Erfahrung</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">1000+</p>
              <p className="text-foreground-600">abgeschlossene Projekte</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-foreground-600">Einsatzbereitschaft</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">ISO</p>
              <p className="text-foreground-600">Sicherheitsstandards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Mission & Vision</h2>
            <p className="text-foreground-600 max-w-2xl mx-auto">
              Wir verbinden hanseatische Verlässlichkeit mit moderner Technik. Unser Antrieb: sichere, effiziente und nachhaltige Lösungen auf dem Wasser.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="h-full">
              <CardBody className="p-6">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <Icon icon="lucide:target" className="text-2xl" />
                  <h3 className="text-xl font-semibold">Unsere Mission</h3>
                </div>
                <ul className="space-y-2 text-foreground-600">
                  <li className="flex items-start gap-2"><Icon icon="lucide:check" className="text-success mt-1" />Maritime Projekte sicher, termin- und budgettreu umsetzen.</li>
                  <li className="flex items-start gap-2"><Icon icon="lucide:check" className="text-success mt-1" />Partnerschaftlich und transparent mit Auftraggebern zusammenarbeiten.</li>
                  <li className="flex items-start gap-2"><Icon icon="lucide:check" className="text-success mt-1" />Mitarbeitende fördern und modernste Technik einsetzen.</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="h-full">
              <CardBody className="p-6">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <Icon icon="lucide:binoculars" className="text-2xl" />
                  <h3 className="text-xl font-semibold">Unsere Vision</h3>
                </div>
                <ul className="space-y-2 text-foreground-600">
                  <li className="flex items-start gap-2"><Icon icon="lucide:check" className="text-success mt-1" />Erster Ansprechpartner für Schleppbetrieb und Wasserbau in Norddeutschland.</li>
                  <li className="flex items-start gap-2"><Icon icon="lucide:check" className="text-success mt-1" />Innovation und Digitalisierung im maritimen Alltag vorantreiben.</li>
                  <li className="flex items-start gap-2"><Icon icon="lucide:check" className="text-success mt-1" />Nachhaltigkeit messbar machen – für Umwelt und Region.</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Einblicke</h2>
            <p className="text-foreground-600 max-w-2xl mx-auto">Ein Blick hinter die Kulissen – Menschen, Technik und Arbeitswelten von PAN Hamburg.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://img.heroui.chat/image/places?w=800&h=600&u=pan-yard-1" alt="Werft und Equipment" className="w-full h-48 md:h-56 object-cover rounded" />
            <img src="https://img.heroui.chat/image/places?w=800&h=600&u=pan-crew-1" alt="Crew bei der Arbeit" className="w-full h-48 md:h-56 object-cover rounded" />
            <img src="https://img.heroui.chat/image/places?w=800&h=600&u=pan-bridge-1" alt="Brücke und Navigation" className="w-full h-48 md:h-56 object-cover rounded" />
            <img src="https://img.heroui.chat/image/places?w=800&h=600&u=pan-barge-1" alt="Arbeitsschiff im Einsatz" className="w-full h-48 md:h-56 object-cover rounded" />
            <img src="https://img.heroui.chat/image/places?w=800&h=600&u=pan-diver-1" alt="Taucherteam" className="w-full h-48 md:h-56 object-cover rounded" />
            <img src="https://img.heroui.chat/image/places?w=800&h=600&u=pan-dock-1" alt="Dockarbeiten" className="w-full h-48 md:h-56 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Werte, die uns leiten</h2>
            <p className="text-foreground-600 max-w-2xl mx-auto">Verantwortungsbewusst, präzise und hanseatisch zuverlässig – so arbeiten wir seit Tag eins.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="h-full">
              <CardBody className="p-6">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <Icon icon="lucide:shield-check" className="text-2xl" />
                  <h3 className="text-xl font-semibold">Sicherheit</h3>
                </div>
                <p className="text-foreground-600">Sicherheit steht an erster Stelle – für unsere Crew, unsere Partner und die Umwelt.</p>
              </CardBody>
            </Card>

            <Card className="h-full">
              <CardBody className="p-6">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <Icon icon="lucide:compass" className="text-2xl" />
                  <h3 className="text-xl font-semibold">Präzision</h3>
                </div>
                <p className="text-foreground-600">Planung und Ausführung mit höchster Genauigkeit – auch unter anspruchsvollen Bedingungen.</p>
              </CardBody>
            </Card>

            <Card className="h-full">
              <CardBody className="p-6">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <Icon icon="lucide:leaf" className="text-2xl" />
                  <h3 className="text-xl font-semibold">Nachhaltigkeit</h3>
                </div>
                <p className="text-foreground-600">Ressourcenschonende Arbeitsweisen und moderne Technik für eine intakte Elbe.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline (History) */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Unser Weg</h2>
          <ol className="relative border-s border-divider">
            <li className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <Icon icon="lucide:flag" className="text-xs" />
              </span>
              <time className="mb-1 text-sm text-foreground-500">1980er</time>
              <h3 className="text-lg font-semibold">Gründung in Hamburg</h3>
              <p className="text-foreground-600">Erste Projekte im Hafen, Aufbau der Kernmannschaft.</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <Icon icon="lucide:ship" className="text-xs" />
              </span>
              <time className="mb-1 text-sm text-foreground-500">2000er</time>
              <h3 className="text-lg font-semibold">Flottenausbau & Spezialisierung</h3>
              <p className="text-foreground-600">Mehrzweckschiffe, Bagger, Taucher – professionelle Erweiterung des Portfolios.</p>
            </li>
            <li className="ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <Icon icon="lucide:star" className="text-xs" />
              </span>
              <time className="mb-1 text-sm text-foreground-500">Heute</time>
              <h3 className="text-lg font-semibold">Zuverlässiger Partner 24/7</h3>
              <p className="text-foreground-600">Schleppbetrieb, Wasserbau und Bergungen – hanseatisch, sicher, präzise.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Unser Team</h2>
            <p className="text-foreground-600 max-w-2xl mx-auto">Erfahrene Fachkräfte an Bord – Navigation, Technik, Bauleitung und Taucherwesen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Kapitän M. Hansen', role: 'Schleppkapitän', img: 'https://img.heroui.chat/image/people?w=480&h=480&u=pan-captain-1' },
              { name: 'S. Richter', role: 'Bauleitung Wasserbau', img: 'https://img.heroui.chat/image/people?w=480&h=480&u=pan-engineer-1' },
              { name: 'A. Nguyen', role: 'Tauchermeisterin', img: 'https://img.heroui.chat/image/people?w=480&h=480&u=pan-diver-2' },
              { name: 'T. Becker', role: 'Technik & Wartung', img: 'https://img.heroui.chat/image/people?w=480&h=480&u=pan-tech-1' },
            ].map((m) => (
              <Card key={m.name} className="h-full">
                <CardBody className="p-6 flex flex-col items-center text-center">
                  <img src={m.img} alt={m.name} className="h-28 w-28 rounded-full object-cover mb-4" />
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="text-sm text-foreground-600">{m.role}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-4">Zertifikate & Partner</h2>
              <ul className="space-y-3 text-foreground-700">
                <li className="flex items-start gap-2"><Icon icon="lucide:award" className="text-primary mt-1" />ISO-orientierte Sicherheits- und Qualitätsprozesse</li>
                <li className="flex items-start gap-2"><Icon icon="lucide:recycle" className="text-primary mt-1" />Nachhaltige Entsorgungs- und Recyclingkonzepte</li>
                <li className="flex items-start gap-2"><Icon icon="lucide:shield" className="text-primary mt-1" />Regelmäßige Crew-Schulungen und Audits</li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
                {[
                  { name: 'HPA', src: 'https://img.heroui.chat/image/logos?w=240&h=120&u=hpa' },
                  { name: 'DNV', src: 'https://img.heroui.chat/image/logos?w=240&h=120&u=dnv' },
                  { name: 'Class', src: 'https://img.heroui.chat/image/logos?w=240&h=120&u=class' },
                  { name: 'Port', src: 'https://img.heroui.chat/image/logos?w=240&h=120&u=port' },
                  { name: 'Elbe', src: 'https://img.heroui.chat/image/logos?w=240&h=120&u=elbe' },
                  { name: 'Hydro', src: 'https://img.heroui.chat/image/logos?w=240&h=120&u=hydro' },
                ].map((p) => (
                  <div key={p.name} className="opacity-80 hover:opacity-100 transition-opacity">
                    <img src={p.src} alt={`${p.name} Logo`} className="mx-auto h-10 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
