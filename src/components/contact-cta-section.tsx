import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button, Chip, Avatar, Divider } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const contactMethods = [
  {
    icon: "lucide:phone",
    title: "Notruf",
    value: "+49 172 4003655",
    description: "24/7 Notfalldienst",
    action: "tel:+491724003655",
    color: "warning",
    urgent: true
  },
  {
    icon: "lucide:mail",
    title: "E-Mail",
    value: "info@pan-hamburg.de",
    description: "Anfragen & Informationen",
    action: "mailto:info@pan-hamburg.de",
    color: "primary",
    urgent: false
  },
  {
    icon: "lucide:map-pin",
    title: "Standort",
    value: "Hamburg Hafen",
    description: "Direkt am Wasser",
    action: "/contact",
    color: "success",
    urgent: false
  }
];

export const ContactCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-transparent" />
      </div>

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
            className="bg-white/10 text-white border border-white/20 mb-4"
          >
            Kontakt aufnehmen
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wir sind für Sie da
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ob Notfall oder geplantes Projekt – unser erfahrenes Team steht Ihnen 
            rund um die Uhr zur Verfügung
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardBody className="p-6 text-center">
                  {method.urgent && (
                    <div className="absolute top-2 right-2">
                      <Chip
                        size="sm"
                        className="bg-red-500 text-white animate-pulse"
                      >
                        Notfall
                      </Chip>
                    </div>
                  )}
                  
                  <div className="flex justify-center mb-4">
                    <Avatar
                      icon={<Icon icon={method.icon} className="text-2xl" />}
                      className={`w-16 h-16 text-white ${
                        method.color === 'warning' ? 'bg-yellow-500' :
                        method.color === 'primary' ? 'bg-blue-500' :
                        'bg-green-500'
                      } group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-blue-100 mb-2 text-sm">
                    {method.description}
                  </p>
                  
                  <p className="text-white font-semibold mb-4">
                    {method.value}
                  </p>

                  {method.action.startsWith('/') ? (
                    <Button
                      as={Link}
                      to={method.action}
                      color={method.color as "warning" | "primary" | "success"}
                      variant="solid"
                      className="w-full font-semibold"
                      startContent={<Icon icon={method.icon} />}
                    >
                      {method.urgent ? 'Sofort anrufen' : 
                       method.title === 'E-Mail' ? 'E-Mail senden' : 'Mehr erfahren'}
                    </Button>
                  ) : (
                    <Button
                      as="a"
                      href={method.action}
                      color={method.color as "warning" | "primary" | "success"}
                      variant="solid"
                      className="w-full font-semibold"
                      startContent={<Icon icon={method.icon} />}
                    >
                      {method.urgent ? 'Sofort anrufen' : 
                       method.title === 'E-Mail' ? 'E-Mail senden' : 'Mehr erfahren'}
                    </Button>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/20">
            <CardBody className="p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Kostenlose Beratung vereinbaren
                  </h3>
                  <p className="text-blue-100">
                    Lassen Sie uns gemeinsam die beste Lösung für Ihr Projekt finden.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    as={Link}
                    to="/contact"
                    size="lg"
                    className="bg-white text-blue-900 font-semibold hover:bg-blue-50"
                    startContent={<Icon icon="lucide:calendar" />}
                  >
                    Termin vereinbaren
                  </Button>
                  <Button
                    as={Link}
                    to="/services"
                    variant="bordered"
                    size="lg"
                    className="text-white border-white hover:bg-white/10 font-semibold"
                    startContent={<Icon icon="lucide:info" />}
                  >
                    Leistungen ansehen
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
