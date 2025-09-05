import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, CardHeader, Button, Chip, Avatar, Divider } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const services = [
  {
    id: 1,
    title: "Schleppbetrieb",
    description: "Professionelle Schleppdienste für alle Schiffsgrößen im Hamburger Hafen und der Elbe.",
    icon: "lucide:ship",
    features: ["24/7 Verfügbarkeit", "Erfahrene Kapitäne", "Moderne Schlepper"],
    color: "primary",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Wasserbau",
    description: "Spezialisierte Wasserbauarbeiten für Hafenanlagen, Brücken und maritime Infrastruktur.",
    icon: "lucide:hammer",
    features: ["Schwimmkrane", "Unterwasserarbeiten", "Spezialausrüstung"],
    color: "secondary",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Bergung & Rettung",
    description: "Schnelle Hilfe bei Havarien und Notfällen auf dem Wasser.",
    icon: "lucide:life-buoy",
    features: ["Notfalldienst", "Bergungsausrüstung", "Sofortige Reaktion"],
    color: "warning",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Transport & Logistik",
    description: "Effiziente Transportlösungen für schwere Lasten und Spezialausrüstung.",
    icon: "lucide:truck",
    features: ["Schwertransport", "Kranarbeiten", "Logistikplanung"],
    color: "success",
    gradient: "from-green-500 to-emerald-500"
  }
];

export const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative">
      {/* No background - will use BeamsBackground from parent */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip
            startContent={<Icon icon="lucide:anchor" className="text-sm" />}
            variant="flat"
            className="mb-4 bg-white/20 text-white border border-white/30"
          >
            Unsere Leistungen
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Maritime Expertise für jeden Bedarf
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Von Schleppbetrieb bis Wasserbau – wir bieten umfassende Lösungen für alle maritimen Herausforderungen
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-white/20 bg-white/10 backdrop-blur-md">
                <CardBody className="p-6">
                  <div className="text-center mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon icon={service.icon} className="text-3xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-blue-100 mb-4 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <Divider className="mb-4 bg-white/20" />
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Icon icon="lucide:check" className="text-green-400 text-sm" />
                        </div>
                        <span className="text-sm text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0">
            <CardBody className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bereit für Ihr nächstes Projekt?
                  </h3>
                  <p className="text-blue-100">
                    Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    as="a"
                    href="tel:+491724003655"
                    size="lg"
                    className="bg-yellow-400 text-black font-semibold hover:bg-yellow-300"
                    startContent={<Icon icon="lucide:phone" />}
                  >
                    Sofort anrufen
                  </Button>
                  <Button
                    as={Link}
                    to="/contact"
                    variant="bordered"
                    size="lg"
                    className="text-white border-white hover:bg-white/10 font-semibold"
                    startContent={<Icon icon="lucide:message-square" />}
                  >
                    Anfrage senden
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
