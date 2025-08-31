import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { equipmentData } from '../../data/equipment';

export const EquipmentDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = equipmentData.find((e) => e.slug === slug);

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Gerät nicht gefunden</h1>
        <p className="mb-6">Das angeforderte Equipment existiert nicht.</p>
        <Button as={Link} to="/fleet#equipment" color="primary" startContent={<Icon icon="lucide:arrow-left" />}>Zurück zur Übersicht</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button as={Link} to="/fleet#equipment" variant="light" startContent={<Icon icon="lucide:arrow-left" />}>Zurück</Button>
          <div className="mt-6">
            <h1 className="text-3xl font-bold mb-1">{item.title}</h1>
            <p className="text-foreground-600 mb-4">{item.category}</p>
            {item.description && <p className="mb-6 text-foreground-700">{item.description}</p>}

            {(item.specs && item.specs.length > 0) && (
              <Card>
                <CardBody className="p-6">
                  <h2 className="font-semibold mb-3">Technische Daten</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                    {item.specs!.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <Icon icon="lucide:check" className="text-success" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            )}

            <div className="flex gap-2 mt-6">
              <Button as={Link} to="/contact" color="accent" startContent={<Icon icon="lucide:message-square" />}>Anfrage senden</Button>
              <Button as={Link} to="/services" variant="flat" color="primary" startContent={<Icon icon="lucide:arrow-right" />}>Leistungen ansehen</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentDetailPage;

