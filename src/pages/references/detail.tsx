import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { referenceData } from '../../data/references';

export const ReferenceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const ref = referenceData.find((r) => r.slug === slug);

  if (!ref) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Projekt nicht gefunden</h1>
        <p className="mb-6">Die angeforderte Referenz existiert nicht.</p>
        <Button as={Link} to="/references" color="primary" startContent={<Icon icon="lucide:arrow-left" />}>Zurück zu Referenzen</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Button as={Link} to="/references" variant="light" startContent={<Icon icon="lucide:arrow-left" />}>Zurück</Button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 items-start">
            <img src={ref.image} alt={ref.title} className="w-full h-72 md:h-96 object-cover rounded" />
            <div>
              <h1 className="text-3xl font-bold mb-2">{ref.title}</h1>
              <p className="text-foreground-600 mb-2">{ref.client} • {ref.year} • {ref.category}</p>
              <p className="text-foreground-700 mb-6">{ref.description}</p>

              <Card>
                <CardBody className="p-6">
                  <h2 className="font-semibold mb-3">Leistungsumfang</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Icon icon="lucide:check" className="text-success" />Projektierung & Koordination</li>
                    <li className="flex items-center gap-2"><Icon icon="lucide:check" className="text-success" />Einsatz von Flotte & Equipment</li>
                    <li className="flex items-center gap-2"><Icon icon="lucide:check" className="text-success" />Sicherheits- & Umweltauflagen</li>
                  </ul>
                </CardBody>
              </Card>

              <div className="flex gap-2 mt-6">
                <Button as={Link} to="/contact" color="accent" startContent={<Icon icon="lucide:message-square" />}>Projekt anfragen</Button>
                <Button as={Link} to="/services" variant="flat" color="primary" startContent={<Icon icon="lucide:arrow-right" />}>Leistungen ansehen</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferenceDetailPage;

