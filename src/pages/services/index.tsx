import React from 'react';
import { Button, Card, CardBody, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="relative bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Leistungen</h1>
            <p className="text-white/80 text-lg">
              Von Schleppbetrieb über Wasserbau bis hin zu Bergungen – PAN Hamburg bietet ein breites, eingespieltes Leistungsspektrum für Projekte auf der Elbe und im Hafen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="#schlepp" variant="flat" color="primary" startContent={<Icon icon="lucide:anchor" />}>Schleppbetrieb</Button>
              <Button as={Link} to="#wasserbau" variant="flat" color="primary" startContent={<Icon icon="lucide:waves" />}>Wasserbau</Button>
              <Button as={Link} to="#bergung" variant="flat" color="primary" startContent={<Icon icon="lucide:life-buoy" />}>Bergungen</Button>
              <Button as={Link} to="#hafenbau" variant="flat" color="primary" startContent={<Icon icon="lucide:building" />}>Ufer- & Hafenbau</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          {/* Schleppbetrieb */}
          <div id="schlepp" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <img src="https://img.heroui.chat/image/places?w=900&h=600&u=pan-hamburg-tug" alt="Schleppbetrieb" className="w-full h-64 md:h-80 object-cover rounded" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-3">Schleppbetrieb</h2>
                <p className="text-foreground-600 mb-4">Zuverlässige Schleppleistungen für Schiffe aller Größen. Manöver im Hafen, auf der Elbe und bei besonderen Transporten – präzise, sicher, termingerecht.</p>
                <ul className="space-y-2 text-foreground-700">
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Hafenmanöver & Assistenz</li>
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Schwer- & Sondertransporte</li>
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Notfall-Schlepp & Bereitschaft</li>
                </ul>
              </div>
            </div>
          </div>

          <Divider />

          {/* Wasserbau */}
          <div id="wasserbau" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="lg:w-1/2">
                <img src="https://img.heroui.chat/image/places?w=900&h=600&u=pan-hamburg-water" alt="Wasserbau" className="w-full h-64 md:h-80 object-cover rounded" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-3">Wasserbau</h2>
                <p className="text-foreground-600 mb-4">Planung und Ausführung komplexer Wasserbauprojekte – von Baggerarbeiten bis Spundwänden. Nachhaltig und normgerecht umgesetzt.</p>
                <ul className="space-y-2 text-foreground-700">
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Bagger- & Unterwasserarbeiten</li>
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Ufersicherung & Spundwände</li>
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Umwelt- & Sedimentmanagement</li>
                </ul>
              </div>
            </div>
          </div>

          <Divider />

          {/* Bergungen */}
          <div id="bergung" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <img src="https://img.heroui.chat/image/places?w=900&h=600&u=pan-hamburg-salvage" alt="Bergungen" className="w-full h-64 md:h-80 object-cover rounded" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-3">Bergungen & Taucher</h2>
                <p className="text-foreground-600 mb-4">Schnelle Hilfe im Notfall: Bergungen, Havarie-Assistenz und zertifizierte Taucherleistungen für sichere Instandsetzung und Hebung.</p>
                <ul className="space-y-2 text-foreground-700">
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Havarie- & Notfallmanagement</li>
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Unterwasserinspektionen</li>
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Hebungen & Sicherung</li>
                </ul>
              </div>
            </div>
          </div>

          <Divider />

          {/* Ufer- & Hafenbau */}
          <div id="hafenbau" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="lg:w-1/2">
                <img src="https://img.heroui.chat/image/places?w=900&h=600&u=pan-hamburg-harbor-construction" alt="Ufer- & Hafenbau" className="w-full h-64 md:h-80 object-cover rounded" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-3">Ufer- & Hafenbau</h2>
                <p className="text-foreground-600 mb-4">Konstruktion und Instandhaltung von Kaimauern, Dalben und Infrastruktur – auf Langlebigkeit und Betriebssicherheit ausgelegt.</p>
                <ul className="space-y-2 text-foreground-700">
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Kaimauern & Dalben</li>
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Stege & Anlegestellen</li>
                  <li className="flex gap-2"><Icon icon="lucide:check" className="text-success" />Wartung & Sanierung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Fragen zu einem Projekt?</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto mb-6">Wir beraten Sie gern – unverbindlich und schnell. Beschreiben Sie uns kurz Ihr Vorhaben, wir melden uns umgehend.</p>
          <div className="flex justify-center gap-3">
            <Button as={Link} to="/contact" color="accent" startContent={<Icon icon="lucide:message-square" />}>Anfrage senden</Button>
            <Button as="a" href="tel:+4940123456789" variant="flat" color="primary" startContent={<Icon icon="lucide:phone" />}>Anrufen</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

