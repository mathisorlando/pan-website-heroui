import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, CardBody } from "@heroui/react";
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import footerImg from '../pictures/pan_footer.png';

export const ContactCTA: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const bgSrc = isHome
    ? footerImg
    : 'https://img.heroui.chat/image/places?w=1920&h=600&u=pan-hamburg-harbor-sunset';
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgSrc}
          alt="PAN Hamburg – Kontakt Hintergrund"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Bereit für Ihr nächstes Projekt?</h2>
            <p className="text-lg mb-6">
              Kontaktieren Sie uns für eine unverbindliche Beratung. Unser erfahrenes Team steht Ihnen gerne zur Verfügung, 
              um Ihre Anforderungen zu besprechen und maßgeschneiderte Lösungen zu entwickeln.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon icon="lucide:check-circle" className="text-accent text-xl" />
                <span>Schnelle Reaktionszeiten</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="lucide:check-circle" className="text-accent text-xl" />
                <span>Individuelle Beratung</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="lucide:check-circle" className="text-accent text-xl" />
                <span>Transparente Angebote</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Kontaktieren Sie uns</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 p-2 rounded-full">
                      <Icon icon="lucide:phone" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-500">Telefon</p>
                      <a href="tel:+494079754205" className="text-primary font-medium hover:underline">
                        +49 40 79754205
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 p-2 rounded-full">
                      <Icon icon="lucide:smartphone" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-500">Mobil</p>
                      <a href="tel:+491724003655" className="text-primary font-medium hover:underline">
                        +49 172 4003655
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 p-2 rounded-full">
                      <Icon icon="lucide:mail" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-500">E-Mail</p>
                      <a href="mailto:mail@pan-hamburg.de" className="text-primary font-medium hover:underline">
                        mail@pan-hamburg.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 p-2 rounded-full">
                      <Icon icon="lucide:map-pin" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-500">Adresse</p>
                      <p className="font-medium">Entenwerder 1, 20539 Hamburg</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    as={Link}
                    to="/contact"
                    color="accent"
                    fullWidth
                    className="font-medium"
                    startContent={<Icon icon="lucide:message-square" />}
                  >
                    Anfrage senden
                  </Button>
                  <Button
                    as="a"
                    href="tel:+4940123456789"
                    variant="flat"
                    color="primary"
                    fullWidth
                    className="font-medium"
                    startContent={<Icon icon="lucide:phone" />}
                  >
                    Anrufen
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
