import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface FleetItemProps {
  name: string;
  type: string;
  image: string;
  specs: string[];
  index: number;
}

const FleetItem: React.FC<FleetItemProps> = ({ name, type, image, specs, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="h-full service-card-hover">
        <div className="h-56 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardBody className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-1">{name}</h3>
          <p className="text-foreground-500 text-sm mb-4">{type}</p>
          
          <ul className="mb-4 space-y-2">
            {specs.map((spec, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <Icon icon="lucide:check" className="text-success" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
          
          <Button
            as={Link}
            to="/fleet"
            variant="flat"
            color="primary"
            size="sm"
            className="w-full justify-between"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Details ansehen
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const FleetPreview: React.FC = () => {
  const fleetItems = [
    {
      name: "MS Hamburg",
      type: "Schlepper",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-ship1",
      specs: ["Leistung: 2.400 PS", "Pfahlzug: 35 t", "Baujahr: 2015"]
    },
    {
      name: "MS Elbe",
      type: "Mehrzweckschiff",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-ship2",
      specs: ["Leistung: 1.800 PS", "Länge: 32 m", "Ausrüstung: Kran 15t"]
    },
    {
      name: "Bagger Nord",
      type: "Schwimmbagger",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-ship3",
      specs: ["Baggertiefe: 15 m", "Kapazität: 250 m³/h", "Baujahr: 2018"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-white">Unsere Flotte</h2>
            <p className="max-w-2xl text-white/80">
              Mit unserer modernen und vielseitigen Flotte sind wir für jede Herausforderung bestens gerüstet.
            </p>
          </div>
          <Button
            as={Link}
            to="/fleet"
            variant="light"
            color="primary"
            className="mt-4 md:mt-0"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Komplette Flotte ansehen
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetItems.map((item, index) => (
            <FleetItem 
              key={item.name}
              name={item.name}
              type={item.type}
              image={item.image}
              specs={item.specs}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
