import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface ReferenceProps {
  title: string;
  client: string;
  description: string;
  image: string;
  index: number;
}

const Reference: React.FC<ReferenceProps> = ({ title, client, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="h-full service-card-hover">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardBody className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-1">{title}</h3>
          <p className="text-foreground-500 text-sm mb-3">Kunde: {client}</p>
          <p className="text-foreground-600 mb-4 line-clamp-3">{description}</p>
          
          <Button
            as={Link}
            to="/references"
            variant="flat"
            color="primary"
            size="sm"
            className="w-full justify-between"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Projekt ansehen
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const ReferencesPreview: React.FC = () => {
  const references = [
    {
      title: "Hafenerweiterung Süd",
      client: "Hamburg Port Authority",
      description: "Umfassende Erweiterung des südlichen Hafenbereichs mit Schlepparbeiten, Baggerung und Konstruktion neuer Anlegestellen.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-ref1"
    },
    {
      title: "Bergung MS Nordlicht",
      client: "Nordlicht Reederei GmbH",
      description: "Erfolgreiche Bergung eines havarierten Frachtschiffs inklusive Sicherung der Ladung und Umweltschutzmaßnahmen.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-ref2"
    },
    {
      title: "Uferbefestigung Elbstrand",
      client: "Stadt Hamburg",
      description: "Nachhaltige Befestigung und Renaturierung des Elbstrands zur Verhinderung von Erosion und Verbesserung der Freizeitqualität.",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-ref3"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Referenzprojekte</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte. 
            Unsere Referenzen sprechen für unsere Expertise und Zuverlässigkeit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((reference, index) => (
            <Reference 
              key={reference.title}
              title={reference.title}
              client={reference.client}
              description={reference.description}
              image={reference.image}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            as={Link}
            to="/references"
            color="primary"
            size="lg"
            className="font-medium"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Alle Referenzen ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};
