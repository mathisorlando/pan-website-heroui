import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="service-card-hover h-full">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardBody className="p-6">
          <div className="flex items-center gap-2 mb-3 text-primary">
            <Icon icon={icon} className="text-2xl" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-foreground-600 mb-4">{description}</p>
          <div className="mt-auto">
            <Button
              as={Link}
              to={link}
              variant="flat"
              color="primary"
              endContent={<Icon icon="lucide:arrow-right" />}
              className="w-full justify-between"
            >
              Mehr erfahren
            </Button>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: "Schleppbetrieb",
      description: "Professionelle Schleppdienstleistungen für Schiffe aller Größen im Hamburger Hafen und auf der Elbe.",
      icon: "lucide:anchor",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-tug",
      link: "/services#schlepp"
    },
    {
      title: "Wasserbau",
      description: "Umfassende Wasserbauarbeiten von der Planung bis zur Ausführung für private und öffentliche Auftraggeber.",
      icon: "lucide:waves",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-water",
      link: "/services#wasserbau"
    },
    {
      title: "Bergungen",
      description: "Spezialisierte Bergungsarbeiten und Unterwassereinsätze mit erfahrenen Tauchern und modernster Ausrüstung.",
      icon: "lucide:life-buoy",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-salvage",
      link: "/services#bergung"
    },
    {
      title: "Ufer- und Hafenbau",
      description: "Fachgerechte Konstruktion und Instandhaltung von Hafenanlagen, Kaimauern und Uferbefestigungen.",
      icon: "lucide:building",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=pan-hamburg-harbor-construction",
      link: "/services#hafenbau"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Unsere Leistungen</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            PAN Hamburg bietet ein umfassendes Spektrum an maritimen Dienstleistungen. 
            Von Schlepparbeiten über Wasserbau bis hin zu spezialisierten Bergungseinsätzen – 
            wir sind Ihr zuverlässiger Partner für alle Herausforderungen im und am Wasser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              link={service.link}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            as={Link}
            to="/services"
            color="primary"
            size="lg"
            className="font-medium"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Alle Leistungen entdecken
          </Button>
        </div>
      </div>
    </section>
  );
};
