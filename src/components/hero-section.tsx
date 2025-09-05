import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, CardBody, Chip, Avatar, Spacer } from "@heroui/react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Wave from 'react-wavify';
import heroImg from '../pictures/pan_hero.png';

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pauseWave = prefersReducedMotion;
  return (
    <section className="relative h-screen md:h-[100vh] lg:h-[100dvh] min-h-[820px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="PAN Hamburg – Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <Chip
                startContent={<Icon icon="lucide:anchor" className="text-sm" />}
                variant="flat"
                color="primary"
                className="bg-white/10 text-white backdrop-blur-sm border border-white/20"
              >
                24/7 Verfügbar
              </Chip>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-md"
            >
              Schleppbetrieb & Wasserbau in Hamburg
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-medium mb-6 text-shadow-sm"
            >
              Zuverlässig seit Jahrzehnten
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg mb-8 max-w-2xl text-shadow-sm"
            >
              PAN Hamburg steht für Expertise und Zuverlässigkeit im maritimen Bereich. 
              Mit modernster Technik und erfahrenen Fachkräften bieten wir maßgeschneiderte Lösungen für Ihre Projekte.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <Button
                as="a"
                href="tel:+491724003655"
                size="lg"
                className="bg-yellow-400 text-black font-semibold shadow-lg hover:brightness-105 hero-notruf btn-raise"
                startContent={<Icon icon="lucide:phone" />}
              >
                Notruf: +49 172 4003655
              </Button>
              <Button
                as={Link}
                to="/contact"
                color="primary"
                size="lg"
                className="btn-glass-static btn-raise font-semibold shadow-xl text-white"
                startContent={<Icon icon="lucide:message-square" />}
              >
                Jetzt anfragen
              </Button>
              <Button
                as={Link}
                to="/services"
                variant="bordered"
                size="lg"
                className="text-white border-white hover:bg-white/10 font-semibold shadow-lg btn-raise"
                startContent={<Icon icon="lucide:info" />}
              >
                Mehr erfahren
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block space-y-4"
          >
            <div className="hero-glass-card rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Avatar
                  icon={<Icon icon="lucide:ship" className="text-xl" />}
                  className="bg-blue-500/30 text-blue-200"
                />
                <div>
                  <h3 className="font-semibold text-white">Moderne Flotte</h3>
                  <p className="text-sm text-white/90">Neueste Technologie für jeden Einsatz</p>
                </div>
              </div>
            </div>

            <div className="hero-glass-card rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Avatar
                  icon={<Icon icon="lucide:users" className="text-xl" />}
                  className="bg-green-500/30 text-green-200"
                />
                <div>
                  <h3 className="font-semibold text-white">Erfahrenes Team</h3>
                  <p className="text-sm text-white/90">Jahrzehntelange Expertise</p>
                </div>
              </div>
            </div>

            <div className="hero-glass-card rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Avatar
                  icon={<Icon icon="lucide:clock" className="text-xl" />}
                  className="bg-orange-500/30 text-orange-200"
                />
                <div>
                  <h3 className="font-semibold text-white">24/7 Service</h3>
                  <p className="text-sm text-white/90">Rund um die Uhr verfügbar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider (react-wavify with ocean gradient) */}
      <div className="wave-divider">
        <Wave
          fill="url(#oceanGradient)"
          paused={pauseWave}
          options={{
            height: 42,
            amplitude: 24,
            speed: pauseWave ? 0 : 0.12,
            points: 3,
          }}
          style={{ display: 'block' }}
        >
          <defs>
            <linearGradient id="oceanGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="var(--ocean-top)" />
              <stop offset="60%" stopColor="var(--ocean-mid)" />
              <stop offset="100%" stopColor="var(--ocean-bottom)" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </section>
  );
};
