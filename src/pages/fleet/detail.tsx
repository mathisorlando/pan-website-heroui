import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { fleetData } from '../../data/fleet';

export const FleetDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = fleetData.find((f) => f.slug === slug);

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Einheit nicht gefunden</h1>
        <p className="mb-6">Die angeforderte Flotteneinheit existiert nicht.</p>
        <Button as={Link} to="/fleet" color="primary" startContent={<Icon icon="lucide:arrow-left" />}>Zurück zur Übersicht</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <Button as={Link} to="/fleet" variant="light" startContent={<Icon icon="lucide:arrow-left" />}>Zurück</Button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 items-start">
            <div>
              <img src={item.image} alt={item.name} className="w-full h-72 md:h-96 object-cover rounded" />
              {item.gallery && item.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {item.gallery.map((g, i) => (
                    <img key={i} src={g} alt={`${item.name} ${i+1}`} className="h-24 w-full object-cover rounded" />
                  ))}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
              <p className="text-foreground-600 mb-4">{item.type}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs bg-default-200 text-foreground-700 rounded px-2 py-0.5">#{t}</span>
                ))}
              </div>
              <p className="mb-6 text-foreground-700">{item.description}</p>

              <Card className="mb-6">
                <CardBody className="p-6">
                  <h2 className="font-semibold mb-3">Technische Daten</h2>
                  <ul className="space-y-2">
                    {item.specs.map((s, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon icon="lucide:check" className="text-success" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>

              <div className="flex gap-2">
                <Button as={Link} to="/contact" color="accent" startContent={<Icon icon="lucide:message-square" />}>Anfrage senden</Button>
                <Button as={Link} to="/services" variant="flat" color="primary" startContent={<Icon icon="lucide:arrow-right" />}>Leistungen ansehen</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetDetailPage;

